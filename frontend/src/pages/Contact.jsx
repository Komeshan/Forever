import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'

const Contact = () => {

  const onSubmitHandler = (e) => {
    e.preventDefault()
  } 

  return (
    <div>
      
      <div className='text-center text-2xl pt-8 border-t'>
        <Title text1={'CONTACT'} text2={'US'}/>
      </div>

      <div className='my-10 md:ml-28 flex flex-col md:flex-row gap-10 mb-28 text-sm'>
        <img className='w-full md:max-w-[458px] rounded-lg' src={assets.contact_img} alt="" />
        <div className='flex flex-col justify-center gap-6'>
          <p className='font-semibold text-[18px] text-gray-700'>OUR STORE</p>
          <p className='text-gray-500'>498 Galle Road, <br />Colombo 00300</p>
          <p className='text-gray-500'>contact@prescripto.com <br />Tel: +94 112 984 397</p>
          <p className='font-semibold text-[18px] text-gray-700 mt-6'>Careers at Forever</p>
          <p className='text-gray-500'>Learn more about our job oenings</p>
          <button className='border border-black px-8 py-4 text-sm hover:bg-[#FFDAD6] hover:text-black transition-all duration-300 max-w-48'>Explore Jobs</button>
        </div>
      </div>

      <div className='text-center'>
        <p className='text-2xl font-medium text-gray-800'>Be the first to know</p>
        <p className='mt-3 text-gray-400'>Subscribe now & get 10% off of your first order</p>

        <form onSubmit={onSubmitHandler} className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3 rounded-sm'>
            <input className='w-full sm:flex-1 outline-none' type="email" placeholder='Enter your email address...' required/>
            <button type='submit' className='bg-black text-white text-xs px-10 py-4 rounded-sm'>SUBSCRIBE</button>
        </form>
      </div>

    </div>
  )
}

export default Contact