import {
  AlertCircleIcon,
  ArrowDown02Icon,
  ArrowRight02Icon,
  ArrowUp02Icon,
  CheckmarkCircle02Icon,
  CircleIcon,
  HelpCircleIcon,
  Timer02Icon,
  UnavailableIcon,
} from '@hugeicons/core-free-icons'

export const labels = [
  {
    value: 'bug',
    label: 'Bug',
  },
  {
    value: 'feature',
    label: 'Feature',
  },
  {
    value: 'documentation',
    label: 'Documentation',
  },
]

export const statuses = [
  {
    label: 'Backlog',
    value: 'backlog' as const,
    icon: HelpCircleIcon,
  },
  {
    label: 'Todo',
    value: 'todo' as const,
    icon: CircleIcon,
  },
  {
    label: 'In Progress',
    value: 'in progress' as const,
    icon: Timer02Icon,
  },
  {
    label: 'Done',
    value: 'done' as const,
    icon: CheckmarkCircle02Icon,
  },
  {
    label: 'Canceled',
    value: 'canceled' as const,
    icon: UnavailableIcon,
  },
]

export const priorities = [
  {
    label: 'Low',
    value: 'low' as const,
    icon: ArrowDown02Icon,
  },
  {
    label: 'Medium',
    value: 'medium' as const,
    icon: ArrowRight02Icon,
  },
  {
    label: 'High',
    value: 'high' as const,
    icon: ArrowUp02Icon,
  },
  {
    label: 'Critical',
    value: 'critical' as const,
    icon: AlertCircleIcon,
  },
]
