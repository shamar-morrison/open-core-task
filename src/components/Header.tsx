import { cn } from '@/lib/utils'
import Image from 'next/image'
import { Container } from '@/components/Container'

type GridProps = {
  /** Should the grid image be flipped vertically? */
  isFlipped?: boolean
}

function Header() {
  return (
    <div>
      <Grid isFlipped />
      <div className='flex items-center justify-center relative -top-11'>
        <TopButton />
      </div>
      <Container className='flex justify-between'>
        <h2>Atlas Premier Knowledge Blogs: </h2>
        <h2>Atlas Premier Knowledge Blogs: </h2>
      </Container>
    </div>
  )
}

function TopButton() {
  return (
    <div className='fixed w-max items-center flex border border-gray-300 rounded-full'>
      <button className='p-2 px-4'>
        <Image alt='' src={'/a.png'} height={20} width={20} />
      </button>
      <span className='text-[#294F74]'>|</span>
      <button className='p-2 px-4'>
        <Image alt='' src={'/menu.png'} height={20} width={20} />
      </button>
    </div>
  )
}

function Grid({ isFlipped = false }: GridProps) {
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

export default Header
