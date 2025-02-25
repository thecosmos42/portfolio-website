import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import contactData from '@/assets/contact.json'

const Contact = () => {
const { description, email, linkedin, github } = contactData
  return (
    <div id ='contact' className='w-full px-[12%] py-10 scroll-mt-20 bg-[url("/footer-bg-color.png")] bg-no-repeat bg-center bg-[length:90%_auto]'>
        <h4 className='text-center mb-2 text-lg font-Ovo'>Connect with Me</h4>
        <h2 className='text-center text-5xl font-Ovo'>Get in Touch</h2>

        <p className='text-center max-w-2xl mx-auto mt-5 mb-4 font-Ovo leading-tight'>{description}
        </p>
        <div className='flex justify-center gap-4 mb-12'>
            <a target='_blank' href={linkedin}>
                <Image src={assets.linkedin_icon} alt="LinkedIn" width={40} height={40} className='hover:opacity-80 hover:bg-lightHover hover:-translate-y-1 duration-300 hover:shadow-black'/>
            </a>
            <a href={email}>
                <Image src={assets.gmail_icon} alt="Email" width={40} height={40} className='hover:opacity-80 hover:bg-lightHover hover:-translate-y-1 duration-300 hover:shadow-black'/>
            </a>
            <a target='_blank' href={github}>
                <Image src={assets.github_icon} alt="Github" width={40} height={40} className='hover:opacity-80 hover:bg-lightHover hover:-translate-y-1 duration-300 hover:shadow-black'/>
            </a>
        </div>

        {/* <form className='max-w-2xl mx-auto'>
            <div className='grid grid-cols-1 md:grid-cols-2 mt-10 mb-8 gap-6'>
                <input type='text' placeholder='Enter your name' required
                className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white'/>
                <input type='email' placeholder='Enter your email' required
                className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white'/>
            </div>
            <textarea rows='6' placeholder='Enter your message' required
            className='w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6'></textarea>
            <button type='submit'
            className='py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-300'>Submit now<Image src={assets.right_arrow_white} alt='' className='w-4' /></button>
        </form> */}
    </div>
  )
}

export default Contact
