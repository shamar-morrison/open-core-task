import { cn } from '@/lib/utils'
import Image from 'next/image'

type GridProps = {
  /** Should the grid image be flipped vertically? */
  isFlipped?: boolean
}

export function Grid({ isFlipped = false }: GridProps) {
  return (
    <div className='w-full overflow-hidden'>
      <div className='relative w-full h-[100px]'>
        <div
          className={cn(
            isFlipped && 'scale-y-[-1] absolute bottom-0 w-full h-full',
          )}>
          <Image
            src='/grid.png'
            alt='Descriptive text for the image'
            layout='fill'
            objectFit='cover'
          />
        </div>
      </div>
    </div>
  )
}
