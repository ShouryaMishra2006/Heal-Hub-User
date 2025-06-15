import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
     return (
        <div>
            <div className='text-center text-2xl pt-10 text-gray-500'>
                <p>ABOUT <span className='text-gray-700 font-medium'>US</span></p>
            </div>
            <div className='my-10 flex flex-col md:flex-row gap-12'>
               <img src={assets.about_image} alt =""/>
               <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600'>
                 <p>At Heal-Hub, we believe that access to quality healthcare should be simple, seamless, and stress-free. Our platform connects patients with highly qualified and experienced medical professionals, ensuring they receive the best possible care. Whether you need a routine check-up, a specialist consultation, or urgent medical advice, Heal-Hub makes it easy to book appointments with trusted doctors at your convenience.</p>
                 <p>Our network includes a diverse range of healthcare providers, from general physicians to top-rated specialists in various fields. We prioritize patient well-being by offering verified doctor profiles, real-time appointment scheduling, and an intuitive interface that makes healthcare more accessible than ever. With advanced search filters and personalized recommendations, finding the right doctor has never been easier.</p>
                 <b className='font-semibold text-gray-800'>Our Vision</b>
                 <p>At Heal-Hub, we are committed to enhancing the patient-doctor experience through technology and innovation. Our goal is to bridge the gap between healthcare professionals and patients, making healthcare more transparent, efficient, and reliable. Your health is our priority, and we strive to empower you with the best medical support at your fingertips.</p>
               </div>
            </div>
            <div className='text-2xl my-4'>
                <p>WHY <span className='text-gray-700 font-semibold'>CHOOSE US</span></p>
            </div>
            <div className='flex flex-col md:flex-row mb-20 gap-1'>
                <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-[#4499dd] hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
                    {/* first */}
                    <b>Efficiency:</b>
                    <p>Streamlined appointment scheduling that fits into your busy lifestyle</p>
                </div>
                <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-[#4499dd] hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
                    {/* second */}
                    <b>Convenience:</b>
                    <p>Access to a network of trusted healthcare professionals in your area.</p>
                </div>
                <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-[#4499dd] hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
                    {/* three */}
                    <b>Personalization:</b>
                    <p>Tailored recommendations and reminders to help you stay on top of your health</p>
                </div>

            </div>
        </div>
     )
}
export default About