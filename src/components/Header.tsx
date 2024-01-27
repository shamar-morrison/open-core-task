import { cn } from '@/lib/utils'
import Image from 'next/image'
import { Container } from '@/components/Container'
import {
  Block,
  BlockContent,
  BlockFooter,
  BlockTitle,
} from '@/components/Block'
import { Grid } from '@/components/Grid'

function Header() {
  return (
    <section>
      <Grid isFlipped />
      <div className='flex items-center justify-center relative -top-6'>
        <TopButton />
      </div>
      <Container className='flex flex-col gap-8 pt-6'>
        <div className='flex justify-between gap-4 items-center'>
          <p className='text-[60px] font-bold w-[90%]'>
            Atlas Premier Knowledge Blogs:{' '}
          </p>
          <p className='w-[60%] text-primary-500'>
            &quot;Immerse yourself in the latest knowledge and research from our
            team of software engineers and design professionals.
          </p>
        </div>
        <div className='flex justify-between'>
          <div className='overflow-hidden rounded-3xl rounded-r-none basis-[80%]'>
            <Image alt='' src={'/macbook.png'} width={600} height={600} />
          </div>
          <Block className='ml-[100px]'>
            <BlockTitle>FREELANCING 101 • Joseph Patrick</BlockTitle>
            <BlockContent className='w-[60%]'>
              07 Ways to get Consistent Clients from Social Media
            </BlockContent>
            <BlockFooter>15 Min Read • 23 - 05 -2023</BlockFooter>
          </Block>
        </div>
      </Container>
      <Grid />
    </section>
  )
}

function TopButton() {
  return (
    <div className='bg-white fixed w-max items-center flex border border-gray-300 rounded-full'>
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

export default Header
