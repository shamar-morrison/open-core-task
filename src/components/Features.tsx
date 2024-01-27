import {
  Block,
  BlockContent,
  BlockFooter,
  BlockTitle,
} from '@/components/Block'
import { Grid } from '@/components/Grid'
import Image from 'next/image'

function Rocket() {
  return (
    <div className='flex justify-center mb-6'>
      <Image alt='feature image' src={'/rocket.png'} width={150} height={100} />
    </div>
  )
}

function Lightning() {
  return (
    <div className='flex justify-center mb-6'>
      <Image
        alt='feature image'
        src={'/lightning.png'}
        width={130}
        height={100}
      />
    </div>
  )
}

function CTABanner() {
  return (
    <div className='rounded-lg bg-custom-gradient'>
      <span className='opacity-15'>
        <Grid isFlipped />
      </span>
      <div className='flex justify-between items-center p-14'>
        <div className='flex flex-col gap-4'>
          <p className='text-[60px] text-white w-[80%]'>
            Transforming your <strong>Ideas into reality</strong>
          </p>
          <p className='text-white'>
            Let&rsquo;s build something extraordinary together to captivate your
            audience.
          </p>
        </div>
        <div className='flex items-center justify-center text-white text-xl border-2 border-white rounded-full h-48 w-48 aspect-square'>
          <div className='text-center'>Let&apos;s Work Together!</div>
        </div>
      </div>
      <span className='opacity-15'>
        <Grid />
      </span>
    </div>
  )
}

export function Features() {
  return (
    <>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20  p-4 mt-20'>
        <Block>
          <Rocket />
          <BlockTitle>FREELANCING 101 • William George</BlockTitle>
          <BlockContent>
            07 Ways to get Consistent Clients from Social Media
          </BlockContent>
          <BlockFooter>15 Min Read • 23 - 05 -2023</BlockFooter>
        </Block>

        <Block>
          <Lightning />
          <BlockTitle>FREELANCING 101 • William George</BlockTitle>
          <BlockContent>
            07 Ways to get Consistent Clients from Social Media
          </BlockContent>
          <BlockFooter>15 Min Read • 23 - 05 -2023</BlockFooter>
        </Block>

        <Block>
          <Rocket />
          <BlockTitle>FREELANCING 101 • William George</BlockTitle>
          <BlockContent>
            07 Ways to get Consistent Clients from Social Media
          </BlockContent>
          <BlockFooter>15 Min Read • 23 - 05 -2023</BlockFooter>
        </Block>

        <Block>
          <Lightning />
          <BlockTitle>FREELANCING 101 • William George</BlockTitle>
          <BlockContent>
            07 Ways to get Consistent Clients from Social Media
          </BlockContent>
          <BlockFooter>15 Min Read • 23 - 05 -2023</BlockFooter>
        </Block>

        <Block>
          <Lightning />
          <BlockTitle>FREELANCING 101 • William George</BlockTitle>
          <BlockContent>
            07 Ways to get Consistent Clients from Social Media
          </BlockContent>
          <BlockFooter>15 Min Read • 23 - 05 -2023</BlockFooter>
        </Block>

        <Block>
          <Rocket />
          <BlockTitle>FREELANCING 101 • William George</BlockTitle>
          <BlockContent>
            07 Ways to get Consistent Clients from Social Media
          </BlockContent>
          <BlockFooter>15 Min Read • 23 - 05 -2023</BlockFooter>
        </Block>
      </div>
      <CTABanner />
    </>
  )
}
