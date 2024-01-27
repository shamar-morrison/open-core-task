import { Container } from '@/components/Container'
import React from 'react'
import { AiOutlineFacebook } from 'react-icons/ai'
import { CiLinkedin } from 'react-icons/ci'
import { FaInstagram } from 'react-icons/fa'
import { FiTwitter } from 'react-icons/fi'

export function Footer() {
  return (
    <div className='bg-custom-gradient flex items-center justify-center py-16'>
      <Container className='w-full'>
        <div className='flex justify-between items-start p-10 bg-white rounded-3xl relative'>
          <div className='flex flex-col'>
            <div className='flex flex-col'>
              <span className='text-lg font-bold'>Say Hello!</span>
              <a href='mailto:Atlaspremier@gmail.com' className='mb-2'>
                Atlaspremier@gmail.com
              </a>
            </div>
            <div className='flex space-x-4 mt-7 mb-16'>
              <a href='#'>
                <FaInstagram />
              </a>
              <a href='#'>
                <AiOutlineFacebook />
              </a>
              <a href='#'>
                <FiTwitter />
              </a>
              <a href='#'>
                <CiLinkedin size={20} />
              </a>
            </div>
            <div className='flex'>
              <p>New York, US</p>
            </div>
          </div>
          <div className='grid grid-cols-2 gap-6 mb-64'>
            <div>
              <a
                href='#'
                className='block text-gray-800 hover:text-gray-600 mb-5'>
                Home
              </a>
              <a
                href='#'
                className='block text-gray-800 hover:text-gray-600 mb-5'>
                About us
              </a>
              <a href='#' className='block text-gray-800 hover:text-gray-600'>
                Work
              </a>
            </div>
            <div>
              <a
                href='#'
                className='block text-gray-800 hover:text-gray-600 mb-5'>
                Services
              </a>
              <a href='#' className='block text-gray-800 hover:text-gray-600'>
                Contact us
              </a>
            </div>
          </div>

          <div className='text-[#294F74] absolute -bottom-12 text-clip overflow-hidden text-[120px] font-extrabold w-max left-[50%] translate-x-[-50%]'>
            <span>Atlas Premier</span>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Footer
