import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'

const Contact = () => {
  return (
    <div>
        
        <div className='text-center text-2x1 pt-10 border-t'>
          <Title text1={'CONTACT'} text2={'US'} />
        </div>

        <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
          <img className='w-full md:max-w-[480px]' src={assets.contact_img} alt="" />
          <div className='flex flex-col justify-center items-start gap-6'>
            <p className='font-semibold text-xl text-gray-600'>Our Store</p>
            <p className='text-gray-500'>800008 Patna <br/> Patna,Bihar,India</p>
            <p className='text-gray-500'>Tel: (+91) 6299917856 <br/> Email:mojo2002@gmail.com</p>
            <p className='text-gray-500'>Learn more about our teams and job openings.</p>
            <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white translate-all duration-500'>Explore Jobs</button>
          </div>
        </div>
    </div>
  )
}

export default Contact