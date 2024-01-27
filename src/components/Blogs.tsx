import {
  Block,
  BlockContent,
  BlockFooter,
  BlockTitle,
} from '@/components/Block'
import { Container } from '@/components/Container'
import { Features } from '@/components/Features'
import Image from 'next/image'
import React from 'react'

function Blogs() {
  return (
    <section>
      <Container className='mt-20 flex flex-col gap-20 pb-20'>
        <div className='flex justify-between items-center'>
          <p className='text-[50px] font-bold'>Blogs</p>
          <nav className='flex gap-6'>
            <button className='rounded-full py-2 px-4 bg-[#EDF2F5] border border-[#294F74]'>
              All Blogs
            </button>
            <button className='text-primary-400'>Trends</button>
            <button className='text-primary-400'>Research</button>
            <button className='text-primary-400'>In-house Knowledge</button>
          </nav>
        </div>
        <div className='flex justify-between gap-5'>
          <div className='w-full'>
            <Image alt='' src={'/socials.png'} width={450} height={100} />
          </div>
          <Block className='basis-[90%]'>
            <BlockTitle>FREELANCING 101 • William George</BlockTitle>
            <BlockContent>
              07 Ways to get Consistent Clients from Social Media
            </BlockContent>
            <BlockFooter>15 Min Read • 23 - 05 -2023</BlockFooter>
          </Block>
        </div>
        <Features />
      </Container>
    </section>
  )
}

export default Blogs
