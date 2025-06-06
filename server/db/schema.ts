import { sql } from 'drizzle-orm'
import {
  boolean,
  integer,
  pgTableCreator,
  text,
  timestamp,
  uuid,
  varchar,
  primaryKey,
} from 'drizzle-orm/pg-core'

/**
 * This is an example of how to use the multi-project schema feature of Drizzle ORM. Use the same
 * database instance for multiple projects.
 *
 * @see https://orm.drizzle.team/docs/goodies#multi-project-schema
 */
export const createTable = pgTableCreator((name) => `web_${name}`)

export const users = createTable('user', {
  id: varchar('id', { length: 255 }).primaryKey(),
  name: text('name'),
  email: varchar('email', { length: 255 }).notNull(),
  emailVerified: timestamp('email_verified', { mode: 'date' }),
  image: text('image'),
})

export const accounts = createTable(
  'account',
  {
    userId: varchar('user_id', { length: 255 }).notNull(),
    type: varchar('type', { length: 255 }).notNull(),
    provider: varchar('provider', { length: 255 }).notNull(),
    providerAccountId: varchar('provider_account_id', {
      length: 255,
    }).notNull(),
    refresh_token: text('refresh_token'),
    access_token: text('access_token'),
    expires_at: integer('expires_at'),
    token_type: text('token_type'),
    scope: text('scope'),
    id_token: text('id_token'),
    session_state: text('session_state'),
  },
  (account) => ({
    pk: primaryKey({ columns: [account.provider, account.providerAccountId] }),
  })
)

export const sessions = createTable('session', {
  sessionToken: varchar('session_token', { length: 255 }).primaryKey(),
  userId: varchar('user_id', { length: 255 }).notNull(),
  expires: timestamp('expires', { mode: 'date' }).notNull(),
})

export const verificationTokens = createTable(
  'verification_token',
  {
    identifier: varchar('identifier', { length: 255 }).notNull(),
    token: varchar('token', { length: 255 }).notNull(),
    expires: timestamp('expires', { mode: 'date' }).notNull(),
  },
  (vt) => ({
    pk: primaryKey({ columns: [vt.identifier, vt.token] }),
  })
)

// New Sports Table
export const sports = createTable('sport', {
  id: uuid('id').primaryKey().defaultRandom(),
  sportName: varchar('sport_name', { length: 100 }).unique().notNull(),
  // Add any other sport-specific details
  createdAt: timestamp('created_at', { withTimezone: true })
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
  updatedAt: timestamp('updated_at', { withTimezone: true }).$onUpdate(
    () => new Date()
  ),
})

// New Leagues Table
export const leagues = createTable('leagues', {
  id: uuid('id').primaryKey().defaultRandom(),
  sportId: uuid('sport_id').references(() => sports.id, {
    onDelete: 'cascade',
  }),
  leagueName: varchar('league_name', { length: 255 }).notNull(),
  country: varchar('country', { length: 100 }).notNull(), // Country: e.g., "Cameroun", "France", etc.
  tier: integer('tier'), // Optional tier value (e.g., 1 for top-level, 2 for second-tier)
  apiSource: varchar('api_source', { length: 50 }), // e.g., "BetsAPI", "Highlightly", "Flashscore"
  apiLeagueId: varchar('api_league_id', { length: 255 }), // The API league identifier
  logoUrl: varchar('logo_url', { length: 255 }),
  createdAt: timestamp('created_at', { withTimezone: true })
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
  updatedAt: timestamp('updated_at', { withTimezone: true }).$onUpdate(
    () => new Date()
  ),
})

// New Teams Table
export const teams = createTable('teams', {
  id: uuid('id').primaryKey().defaultRandom(),
  leagueId: uuid('league_id').references(() => leagues.id, {
    onDelete: 'cascade',
  }),
  teamName: varchar('team_name', { length: 255 }).notNull(),
  apiSource: varchar('api_source', { length: 50 }), // e.g., 'BetsAPI', 'Highlightly', 'Flashscore'
  apiTeamId: varchar('api_team_id', { length: 255 }), // The ID used by the API
  logoUrl: varchar('logo_url', { length: 255 }),
  // Add other team-specific details
  createdAt: timestamp('created_at', { withTimezone: true })
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
  updatedAt: timestamp('updated_at', { withTimezone: true }).$onUpdate(
    () => new Date()
  ),
})

// New Matches/Events Table
export const fixtures = createTable('fixtures', {
  id: uuid('id').primaryKey().defaultRandom(),
  leagueId: uuid('league_id')
    .references(() => leagues.id, {
      onDelete: 'cascade',
    })
    .notNull(),
  team1Id: uuid('team1_id')
    .references(() => teams.id, {
      onDelete: 'cascade',
    })
    .notNull(),
  team2Id: uuid('team2_id')
    .references(() => teams.id, {
      onDelete: 'cascade',
    })
    .notNull(),
  matchDatetime: timestamp('match_datetime', { withTimezone: true }).notNull(),
  apiSource: varchar('api_source', { length: 50 }), // e.g., 'BetsAPI', 'Highlightly', 'Flashscore'
  apiFixtureId: varchar('api_fixture_id', { length: 255 }), // The ID used by the API
  status: varchar('status', { length: 50 }), // e.g., 'scheduled', 'live', 'finished', 'postponed'
  score1: integer('score1').default(0).notNull(), // Score for team1
  score2: integer('score2').default(0).notNull(), // Score for team2
  // Additional match details (e.g., venue, referee)
  createdAt: timestamp('created_at', { withTimezone: true })
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
  updatedAt: timestamp('updated_at', { withTimezone: true }).$onUpdate(
    () => new Date()
  ),
})

// New Highlights Table
export const highlights = createTable('highlights', {
  id: uuid('id').primaryKey().defaultRandom(),
  matchId: uuid('match_id').references(() => fixtures.id, {
    onDelete: 'cascade',
  }), // Link to the match
  title: text('title'),
  description: text('description'),
  videoUrl: varchar('video_url', { length: 255 }),
  thumbnailUrl: varchar('thumbnail_url', { length: 255 }),
  publishedAt: timestamp('published_at', { withTimezone: true }),
  apiSource: varchar('api_source', { length: 50 }),
  apiHighlightId: varchar('api_highlight_id', { length: 255 }),
  createdAt: timestamp('created_at', { withTimezone: true })
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
  updatedAt: timestamp('updated_at', { withTimezone: true }).$onUpdate(
    () => new Date()
  ),
})

// New News/Articles Table
export const newsArticles = createTable('news_articles', {
  id: uuid('id').primaryKey().defaultRandom(),
  title: text('title').notNull(),
  content: text('content'),
  summary: text('summary'),
  imageUrl: varchar('image_url', { length: 255 }),
  sourceUrl: varchar('source_url', { length: 255 }), // Link to the original article
  publishedAt: timestamp('published_at', { withTimezone: true }),
  apiSource: varchar('api_source', { length: 50 }),
  apiArticleId: varchar('api_article_id', { length: 255 }),
  isMajorUpdate: boolean('is_major_update').default(false),
  createdAt: timestamp('created_at', { withTimezone: true })
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
  updatedAt: timestamp('updated_at', { withTimezone: true }).$onUpdate(
    () => new Date()
  ),
})

export const publicities = createTable('publicities', {
  id: uuid('id').primaryKey().defaultRandom(),
  title: text('title').notNull(),
  description: text('description'),
  referenceUrl: varchar('reference_url', { length: 255 }), // Url of the advertisement
  imageUrl: varchar('image_url', { length: 255 }),
  createdAt: timestamp('created_at', { withTimezone: true })
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
  updatedAt: timestamp('updated_at', { withTimezone: true }).$onUpdate(
    () => new Date()
  ),
})
