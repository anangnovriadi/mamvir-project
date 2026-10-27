import { type SVGProps } from 'react'
import { cn } from '@/lib/utils'
import { CLERK_PATH } from './clerk-icon'

export function ClerkLogo({ className, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      role='img'
      viewBox='0 0 24 24'
      xmlns='http://www.w3.org/2000/svg'
      id='clerk'
      height='24'
      width='24'
      className={cn('[&>path]:fill-foreground', className)}
      {...props}
    >
      <title>Clerk</title>
      <path d={CLERK_PATH} strokeWidth='1'></path>
    </svg>
  )
}
