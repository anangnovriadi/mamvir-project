import * as React from 'react'
import { Add01Icon, UnfoldMoreIcon } from '@hugeicons/core-free-icons'
import { HugeiconsIcon, type IconSvgElement } from '@hugeicons/react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from '@/components/ui/sidebar'
import { cn } from '@/lib/utils'

type TeamSwitcherProps = {
  teams: {
    name: string
    logo: IconSvgElement | string
    plan?: string
  }[]
}

function TeamLogo({
  logo,
  className,
}: {
  logo: IconSvgElement | string
  className?: string
}) {
  return typeof logo === 'string' ? (
    <img src={logo} alt='' className={cn('object-contain', className)} />
  ) : (
    <HugeiconsIcon icon={logo} className={className} />
  )
}

export function TeamSwitcher({ teams }: TeamSwitcherProps) {
  const { isMobile } = useSidebar()
  const [activeTeam, setActiveTeam] = React.useState(teams[0])

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              size='lg'
              className='data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground'
            >
              {typeof activeTeam.logo === 'string' ? (
                <div className='flex aspect-square size-8 items-center justify-center'>
                  <TeamLogo logo={activeTeam.logo} className='size-7' />
                </div>
              ) : (
                <div className='flex aspect-square size-8 items-center justify-center rounded-sm bg-sidebar-primary text-sidebar-primary-foreground'>
                  <TeamLogo logo={activeTeam.logo} className='size-4' />
                </div>
              )}
              <div className='grid flex-1 text-start text-[15px] leading-tight'>
                <span className='truncate font-semibold'>
                  {activeTeam.name}
                </span>
                {activeTeam.plan && (
                  <span className='truncate text-xs'>{activeTeam.plan}</span>
                )}
              </div>
              <HugeiconsIcon icon={UnfoldMoreIcon} className='ms-auto' />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className='w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-sm'
            align='start'
            side={isMobile ? 'bottom' : 'right'}
            sideOffset={4}
          >
            <DropdownMenuLabel className='text-xs text-muted-foreground'>
              Teams
            </DropdownMenuLabel>
            {teams.map((team, index) => (
              <DropdownMenuItem
                key={team.name}
                onClick={() => setActiveTeam(team)}
                className='gap-2 p-2'
              >
                <div className='flex size-6 items-center justify-center rounded-sm border'>
                  <TeamLogo logo={team.logo} className='size-4 shrink-0' />
                </div>
                {team.name}
                <DropdownMenuShortcut>⌘{index + 1}</DropdownMenuShortcut>
              </DropdownMenuItem>
            ))}
            <DropdownMenuSeparator />
            <DropdownMenuItem className='gap-2 p-2'>
              <div className='flex size-6 items-center justify-center rounded-sm border bg-background'>
                <HugeiconsIcon icon={Add01Icon} className='size-4' />
              </div>
              <div className='font-medium text-muted-foreground'>Add team</div>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  )
}
