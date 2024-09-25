import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div>
      
      <div className='text-center text-2xl pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'}/>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[400px] rounded-md' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>Forever was born out of a passion for innovation and a desire to revolutionize the way people shop online. Our journey began with a simple idea: 
            to provide a platform where customers can easily discover, explore, and purchase a wide range of products from the comfort of their homes.
          </p>
          <p>Since our inception, we've worked tirelessly to curate a diverse selection of high-quality products that cater to every taste and preference. 
            From fashion and beauty to electronics and home essentials, we offer an extensive collection sourced from trusted brands and suppliers.
          </p>
          <b className='text-gray-800'>OUR MISSION</b>
          <p>Our mission at Forever is to empower customers with choice, convenience, and confidence. We're dedicated to providing a seamless 
            shopping experience that exceeds expectations, from browsing and ordering to delivery and beyond.
          </p>
        </div>
      </div>

      <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'}/>
      </div>

      <div className='flex flex-col md:flex-row mb-20 gap-4'>
        <div className='flex-1 border border-gray-300 px-10 md:px-10 py-8 sm:py-16 flex flex-col gap-5 text-[15px] rounded-xl hover:bg-[#FFDAD6] hover:text-black transition-all duration-300
          text-gray-600 cursor-pointer hover:shadow-2xl'>
          <b>QUALITY ASSURANCE:</b>
          <p>We meticulously select and vet each product to ensure it meets our stringent quality standards.</p>
        </div>
        <div className='flex-1 border border-gray-300 px-10 md:px-10 py-8 sm:py-16 flex flex-col gap-5 text-[15px] rounded-xl hover:bg-[#FFDAD6] hover:text-black transition-all duration-300
          text-gray-600 cursor-pointer hover:shadow-2xl'>
          <b>CONVENIENCE:</b>
          <p>With our user-friendly interface and hassle-free ordering process, shopping has never been easier.</p>
        </div>
        <div className='flex-1 border border-gray-300 px-10 md:px-10 py-8 sm:py-16 flex flex-col gap-5 text-[15px] rounded-xl hover:bg-[#FFDAD6] hover:text-black transition-all duration-300
          text-gray-600 cursor-pointer hover:shadow-2xl'>
          <b>CUSTOMER SERVICE:</b>
          <p>Our team of dedicated professionals is here to assist you the way, ensuring your satisfaction is our top priority.</p>
        </div>
      </div>

    </div>
  )
}

export default About