import { fetchFixtures } from '@/lib/api-football'
import { db } from '@/server/db'
import {
  leagues as LeaguesTable,
  fixtures as FixturesTable,
  teams as TeamsTable,
} from '@/server/db/schema'
import { eq } from 'drizzle-orm'
import { createTRPCRouter, ghActionProcedure } from '../trpc'
import { calculateFinalScore } from '@/lib/utils'

export const syncRouter = createTRPCRouter({
  syncData: ghActionProcedure.mutation(async () => {
    const apiSource = 'apisports'
    let fixtures = await fetchFixtures({ live: 'all' })
    if (!fixtures.length) {
      fixtures = await fetchFixtures({
        last: 100,
      })
    }

    await db.transaction(async (tx) => {
      // Clear the fixtures table before inserting/updating
      await tx.delete(FixturesTable)

      await Promise.all(
        fixtures.map(async (item) => {
          // League
          const apiLeagueId = item.league.id.toString()
          let league = await tx.query.leagues.findFirst({
            where: eq(LeaguesTable.apiLeagueId, apiLeagueId),
          })
          if (!league) {
            await tx.insert(LeaguesTable).values({
              country: item.league.country,
              leagueName: item.league.name,
              apiLeagueId,
              apiSource,
              logoUrl: item.league.logo,
            })
            league = await tx.query.leagues.findFirst({
              where: eq(LeaguesTable.apiLeagueId, apiLeagueId),
            })
          }

          // Home Team
          const apiHomeTeamId = item.teams.home.id.toString()
          let homeTeam = await tx.query.teams.findFirst({
            where: eq(TeamsTable.apiTeamId, apiHomeTeamId),
          })
          if (!homeTeam) {
            await tx.insert(TeamsTable).values({
              apiTeamId: apiHomeTeamId,
              teamName: item.teams.home.name,
              logoUrl: item.teams.home.logo,
              apiSource,
            })
            homeTeam = await tx.query.teams.findFirst({
              where: eq(TeamsTable.apiTeamId, apiHomeTeamId),
            })
          }

          // Away Team
          const apiAwayTeamId = item.teams.away.id.toString()
          let awayTeam = await tx.query.teams.findFirst({
            where: eq(TeamsTable.apiTeamId, apiAwayTeamId),
          })
          if (!awayTeam) {
            await tx.insert(TeamsTable).values({
              apiTeamId: apiAwayTeamId,
              teamName: item.teams.away.name,
              logoUrl: item.teams.away.logo,
              apiSource,
            })
            awayTeam = await tx.query.teams.findFirst({
              where: eq(TeamsTable.apiTeamId, apiAwayTeamId),
            })
          }

          const scores = calculateFinalScore(item.score)

          // Insert new fixture (no check since we cleared the table)
          await tx.insert(FixturesTable).values({
            apiSource,
            score1: scores.home,
            score2: scores.away,
            matchDatetime: new Date(item.fixture.date),
            apiFixtureId: item.fixture.id.toString(),
            leagueId: league!.id,
            team1Id: homeTeam!.id,
            team2Id: awayTeam!.id,
            status: item.fixture.status.short,
          })
        })
      )
    })

    return fixtures
  }),
})
