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
      <Container className='flex flex-col gap-8 pt-6'>
        <div className='flex justify-between gap-4 items-center'>
          <p className='text-[60px] font-bold w-[90%]'>
            Atlas Premier Knowledge Blogs:{' '}
          </p>
          <span className='w-[60%] text-primary-500'>
            &quot;Immerse yourself in the latest knowledge and research from our
            team of software engineers and design professionals.
          </span>
        </div>
        <div className='flex justify-between'>
          <div className='overflow-hidden rounded-3xl rounded-r-none basis-[80%]'>
            <Image alt='' src={'/macbook.png'} width={600} height={600} />
          </div>
          <div className='flex gap-3 flex-col justify-center ml-[100px]'>
            <span className='text-left'>FREELANCING 101 | Joseph Patrick</span>
            <span className='w-[60%] text-[30px]'>
              07 Ways to get Consistent Clients from Social Media
            </span>
          </div>
        </div>
      </Container>
      <Grid />
    </div>
  )
}

function TopButton() {
  return (
    <div className='fixed w-max items-center flex border border-gray-300 rounded-full'>
      <button className='p-2 px-4'>
        <Image alt='' src={'/A.png'} height={20} width={20} />
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
