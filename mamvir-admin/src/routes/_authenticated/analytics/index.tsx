import { createFileRoute } from '@tanstack/react-router'
import { DashboardAnalytics } from '@/features/dashboard/analytics-page'

export const Route = createFileRoute('/_authenticated/analytics/')({
  component: DashboardAnalytics,
})
