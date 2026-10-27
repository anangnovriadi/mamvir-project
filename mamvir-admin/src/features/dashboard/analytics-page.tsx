import { Header } from '@/components/layout/header'
import { Main } from '@/components/layout/main'
import { Analytics } from './components/analytics'

export function DashboardAnalytics() {
  return (
    <>
      <Header />

      <Main>
        <div className='mb-4'>
          <h1 className='text-2xl font-bold tracking-tight'>Analytics</h1>
        </div>
        <Analytics />
      </Main>
    </>
  )
}
