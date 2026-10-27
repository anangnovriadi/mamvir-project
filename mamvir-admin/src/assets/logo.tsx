import { type ImgHTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

export function Logo({ className, ...props }: ImgHTMLAttributes<HTMLImageElement>) {
  return (
    <img
      id='mamvir-logo'
      src='/images/logo_mamvir_transparent.png'
      alt='Mamvir'
      className={cn('size-6 object-contain', className)}
      {...props}
    />
  )
}
