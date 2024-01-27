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
    <div className='rounded-md bg-custom-gradient'>
      <Grid isFlipped />
      <div className='flex justify-between items-center'>
        <div className='flex flex-col gap4'>
          <p>Transforming your Ideas into reality</p>
          <p>
            Let&rsquo;s build something extraordinary together to captivate your
            audience.
          </p>
        </div>
      </div>
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
