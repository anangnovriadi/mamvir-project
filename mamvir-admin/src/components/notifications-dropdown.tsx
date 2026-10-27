import { useState } from 'react'
import { Link } from '@tanstack/react-router'
import {
  BubbleChatIcon,
  CheckmarkCircle02Icon,
  CreditCardIcon,
  Notification01Icon,
  UserAdd01Icon,
} from '@hugeicons/core-free-icons'
import { HugeiconsIcon, type IconSvgElement } from '@hugeicons/react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'

type Notification = {
  id: string
  title: string
  description: string
  time: string
  icon: IconSvgElement
  read: boolean
}

const initialNotifications: Notification[] = [
  {
    id: '1',
    title: 'New message from Olivia',
    description: 'Hey, can you review the latest design changes?',
    time: '2m ago',
    icon: BubbleChatIcon,
    read: false,
  },
  {
    id: '2',
    title: 'New user registered',
    description: 'Jackson Lee just created an account.',
    time: '15m ago',
    icon: UserAdd01Icon,
    read: false,
  },
  {
    id: '3',
    title: 'Payment received',
    description: 'Invoice #1024 has been paid ($1,999.00).',
    time: '1h ago',
    icon: CreditCardIcon,
    read: false,
  },
  {
    id: '4',
    title: 'Task completed',
    description: 'Isabella marked "Update onboarding flow" as done.',
    time: 'Yesterday',
    icon: CheckmarkCircle02Icon,
    read: true,
  },
]

export function NotificationsDropdown() {
  const [notifications, setNotifications] = useState(initialNotifications)
  const unreadCount = notifications.filter((n) => !n.read).length

  const markAsRead = (id: string) =>
    setNotifications((prev) =>
      prev.map((n) => (n.id === id ? { ...n, read: true } : n))
    )

  const markAllAsRead = () =>
    setNotifications((prev) => prev.map((n) => ({ ...n, read: true })))

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant='ghost' size='icon' className='relative size-9'>
          <HugeiconsIcon icon={Notification01Icon} className='size-5' />
          {unreadCount > 0 && (
            <span className='absolute top-2 right-2 size-2 rounded-full bg-destructive ring-2 ring-background' />
          )}
          <span className='sr-only'>
            Notifications{unreadCount > 0 ? ` (${unreadCount} unread)` : ''}
          </span>
        </Button>
      </PopoverTrigger>
      <PopoverContent align='end' className='w-80 p-0'>
        <div className='flex items-center justify-between border-b px-4 py-3'>
          <p className='text-sm font-semibold'>Notifications</p>
          {unreadCount > 0 && (
            <button
              type='button'
              onClick={markAllAsRead}
              className='text-xs text-muted-foreground hover:text-foreground'
            >
              Mark all as read
            </button>
          )}
        </div>
        {notifications.length === 0 ? (
          <p className='px-4 py-8 text-center text-sm text-muted-foreground'>
            No notifications
          </p>
        ) : (
          <ul className='max-h-80 divide-y overflow-y-auto'>
            {notifications.map((n) => (
              <li key={n.id}>
                <button
                  type='button'
                  onClick={() => markAsRead(n.id)}
                  className='flex w-full gap-3 px-4 py-3 text-start hover:bg-accent'
                >
                  <span className='flex size-8 shrink-0 items-center justify-center rounded-sm bg-muted'>
                    <HugeiconsIcon icon={n.icon} className='size-4' />
                  </span>
                  <span className='grid flex-1 gap-0.5'>
                    <span
                      className={cn(
                        'text-sm leading-tight',
                        n.read ? 'font-normal' : 'font-medium'
                      )}
                    >
                      {n.title}
                    </span>
                    <span className='text-xs text-muted-foreground'>
                      {n.description}
                    </span>
                    <span className='text-xs text-muted-foreground'>
                      {n.time}
                    </span>
                  </span>
                  {!n.read && (
                    <span className='mt-1.5 size-2 shrink-0 rounded-full bg-primary' />
                  )}
                </button>
              </li>
            ))}
          </ul>
        )}
        <div className='border-t p-1'>
          <Button variant='ghost' size='sm' className='w-full' asChild>
            <Link to='/settings/notifications'>Notification settings</Link>
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  )
}
