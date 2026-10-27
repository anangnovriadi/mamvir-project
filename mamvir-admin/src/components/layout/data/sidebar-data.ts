import {
  Analytics01Icon,
  Home01Icon,
  LayoutTwoColumnIcon,
  Login01Icon,
  PasswordValidationIcon,
  ResetPasswordIcon,
  UserAdd01Icon,
  UserMultipleIcon,
  AudioWave01Icon,
  BubbleChatIcon,
  Bug01Icon,
  CheckListIcon,
  CommandIcon,
  ComputerIcon,
  ConstructionIcon,
  DashboardSquare01Icon,
  FileRemoveIcon,
  GalleryVerticalEndIcon,
  HelpCircleIcon,
  Notification01Icon,
  PackageIcon,
  PaintBoardIcon,
  SecurityCheckIcon,
  ServerOffIcon,
  Settings01Icon,
  SquareLock02Icon,
  UserGroupIcon,
  UserRemove01Icon,
  UserSettings01Icon,
  Wrench01Icon,
} from '@hugeicons/core-free-icons'
import { ClerkIcon } from '@/assets/clerk-icon'
import { type SidebarData } from '../types'

export const sidebarData: SidebarData = {
  user: {
    name: 'satnaing',
    email: 'satnaingdev@gmail.com',
    avatar: '/avatars/shadcn.jpg',
  },
  teams: [
    {
      name: 'Mamvir',
      logo: CommandIcon,
      plan: 'Admin Dashboard',
    },
    {
      name: 'Acme Inc',
      logo: GalleryVerticalEndIcon,
      plan: 'Enterprise',
    },
    {
      name: 'Acme Corp.',
      logo: AudioWave01Icon,
      plan: 'Startup',
    },
  ],
  navGroups: [
    {
      title: 'General',
      items: [
        {
          title: 'Dashboard',
          icon: DashboardSquare01Icon,
          items: [
            {
              title: 'Overview',
              url: '/',
              icon: Home01Icon,
            },
            {
              title: 'Analytics',
              url: '/analytics',
              icon: Analytics01Icon,
            },
          ],
        },
        {
          title: 'Tasks',
          url: '/tasks',
          icon: CheckListIcon,
        },
        {
          title: 'Apps',
          url: '/apps',
          icon: PackageIcon,
        },
        {
          title: 'Chats',
          url: '/chats',
          badge: '3',
          icon: BubbleChatIcon,
        },
        {
          title: 'Users',
          url: '/users',
          icon: UserGroupIcon,
        },
        {
          title: 'Secured by Clerk',
          icon: ClerkIcon,
          items: [
            {
              title: 'Sign In',
              url: '/clerk/sign-in',
              icon: Login01Icon,
            },
            {
              title: 'Sign Up',
              url: '/clerk/sign-up',
              icon: UserAdd01Icon,
            },
            {
              title: 'User Management',
              url: '/clerk/user-management',
              icon: UserMultipleIcon,
            },
          ],
        },
      ],
    },
    {
      title: 'Pages',
      items: [
        {
          title: 'Auth',
          icon: SecurityCheckIcon,
          items: [
            {
              title: 'Sign In',
              url: '/sign-in',
              icon: Login01Icon,
            },
            {
              title: 'Sign In (2 Col)',
              url: '/sign-in-2',
              icon: LayoutTwoColumnIcon,
            },
            {
              title: 'Sign Up',
              url: '/sign-up',
              icon: UserAdd01Icon,
            },
            {
              title: 'Forgot Password',
              url: '/forgot-password',
              icon: ResetPasswordIcon,
            },
            {
              title: 'OTP',
              url: '/otp',
              icon: PasswordValidationIcon,
            },
          ],
        },
        {
          title: 'Errors',
          icon: Bug01Icon,
          items: [
            {
              title: 'Unauthorized',
              url: '/errors/unauthorized',
              icon: SquareLock02Icon,
            },
            {
              title: 'Forbidden',
              url: '/errors/forbidden',
              icon: UserRemove01Icon,
            },
            {
              title: 'Not Found',
              url: '/errors/not-found',
              icon: FileRemoveIcon,
            },
            {
              title: 'Internal Server Error',
              url: '/errors/internal-server-error',
              icon: ServerOffIcon,
            },
            {
              title: 'Maintenance Error',
              url: '/errors/maintenance-error',
              icon: ConstructionIcon,
            },
          ],
        },
      ],
    },
    {
      title: 'Other',
      items: [
        {
          title: 'Settings',
          icon: Settings01Icon,
          items: [
            {
              title: 'Profile',
              url: '/settings',
              icon: UserSettings01Icon,
            },
            {
              title: 'Account',
              url: '/settings/account',
              icon: Wrench01Icon,
            },
            {
              title: 'Appearance',
              url: '/settings/appearance',
              icon: PaintBoardIcon,
            },
            {
              title: 'Notifications',
              url: '/settings/notifications',
              icon: Notification01Icon,
            },
            {
              title: 'Display',
              url: '/settings/display',
              icon: ComputerIcon,
            },
          ],
        },
        {
          title: 'Help Center',
          url: '/help-center',
          icon: HelpCircleIcon,
        },
      ],
    },
  ],
}
