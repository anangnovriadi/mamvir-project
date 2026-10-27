// Next Imports
import Image from 'next/image'

// Config Imports
import themeConfig from '@/configs/themeConfig'

// Util Imports
import { cn } from '@/lib/utils'

const Logo = ({ className }: { className?: string }) => {
  return (
    <div className={cn('flex items-center gap-2.5', className)}>
      <Image src='/images/logo_mamvir.png' alt='Logo' width={339} height={297} className='size-8.5 object-contain' />
      <span className='text-xl font-bold'>{themeConfig.templateName}</span>
    </div>
  )
}

export default Logo
