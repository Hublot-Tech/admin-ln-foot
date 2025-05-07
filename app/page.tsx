import { auth } from '@/server/auth'
import Link from 'next/link'
import { redirect } from 'next/navigation'

export default async function Home() {
  const session = await auth()

  if (!session) {
    redirect('/api/auth/signin')
  }

  redirect('/dashboard/web')

}
