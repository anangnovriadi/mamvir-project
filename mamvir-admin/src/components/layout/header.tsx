import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'
import { SidebarTrigger } from '@/components/ui/sidebar'
import { NotificationsDropdown } from '@/components/notifications-dropdown'
import { ThemeSwitch } from '@/components/theme-switch'

type HeaderProps = React.HTMLAttributes<HTMLElement> & {
  ref?: React.Ref<HTMLElement>
}

export function Header({ className, children, ...props }: HeaderProps) {
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      setOffset(document.body.scrollTop || document.documentElement.scrollTop)
    }

    // Add scroll listener to the body
    document.addEventListener('scroll', onScroll, { passive: true })

    // Clean up the event listener on unmount
    return () => document.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'sticky top-0 z-50 h-16 border-b bg-sidebar',
        offset > 10 ? 'shadow-xs' : 'shadow-none',
        className
      )}
      {...props}
    >
      <div className='relative flex h-full items-center gap-2 p-4 text-sm'>
        <SidebarTrigger className='size-9 [&_svg]:size-5!' />
        <div className='ms-auto flex items-center gap-1'>
          <NotificationsDropdown />
          <ThemeSwitch />
          {children}
        </div>
      </div>
    </header>
  )
}
