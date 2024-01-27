import { Container } from '@/components/Container'
import Image from 'next/image'
import React from 'react'

function Blogs() {
  return (
    <Container className='mt-20 flex flex-col gap-20'>
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

      <div className='flex justify-between'>
        <Image alt='' src={'/socials.png'} width={400} height={100} />
      </div>
    </Container>
  )
}

export default Blogs
