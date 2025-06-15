import React from 'react'
import { assets } from '../assets/assets'

const Header = () => {
  return (
    <div className='flex flex-col md:flex-row items-center justify-between bg-[#4499dd] rounded-lg px-6 md:px-10 lg:px-20 py-10'>

      {/* ---------Left Side-------- */}
      <div className='md:w-1/2 flex flex-col items-start justify-center gap-4'>
        <p className='text-3xl md:text-4xl lg:text-5xl text-white font-semibold leading-tight'>
            Book Appointment <br />With Trusted Doctors
        </p>
        <div className='flex items-center gap-3 text-white text-sm font-light'>
            <img className='w-10' src={assets.header_img} alt="Profiles" />
            <p>Simply browse through our extensive list of trusted doctors, <br className='hidden sm:block' /> schedule your appointment hassle-free.</p>
        </div>
        <a className='flex items-center gap-2 bg-white px-6 py-3 rounded-full text-gray-600 text-sm mt-4 hover:scale-105 transition-all duration-300' href="#speciality">
          Book Appointment <img className='w-4' src={assets.arrow_icon} alt="Arrow Icon" />
        </a>
      </div>

      {/* ------Right Side-------------- */}
      <div className='md:w-1/2 flex justify-end'>
        <img className='w-full max-w-md md:max-w-lg h-auto' src={assets.group_profiles} alt="Doctors" />
      </div>
      
    </div>
  )
}

export default Header
