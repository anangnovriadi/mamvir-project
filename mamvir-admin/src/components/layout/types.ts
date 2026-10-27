import { type LinkProps } from '@tanstack/react-router'
import { type IconSvgElement } from '@hugeicons/react'

type User = {
  name: string
  email: string
  avatar: string
}

type Team = {
  name: string
  // A Hugeicons icon, or an image URL (e.g. a brand logo in /public)
  logo: IconSvgElement | string
  plan?: string
}

type BaseNavItem = {
  title: string
  badge?: string
  icon?: IconSvgElement
}

type NavLink = BaseNavItem & {
  url: LinkProps['to'] | (string & {})
  items?: never
}

type NavCollapsible = BaseNavItem & {
  items: (BaseNavItem & { url: LinkProps['to'] | (string & {}) })[]
  url?: never
}

type NavItem = NavCollapsible | NavLink

type NavGroup = {
  title: string
  items: NavItem[]
}

type SidebarData = {
  user: User
  teams: Team[]
  navGroups: NavGroup[]
}

export type { SidebarData, NavGroup, NavItem, NavCollapsible, NavLink }
