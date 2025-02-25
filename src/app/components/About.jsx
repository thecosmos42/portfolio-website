import { assets } from '@/assets/assets';
import descriptionData from '@/assets/about.json'
import Image from 'next/image'
import React from 'react'

const categoryIcons = {
  "Education": assets.edu_icon,
  "Work Experience": assets.project_icon,
  "Hobbies": assets.hobbies_icon,
  "Languages": assets.code_icon
};

const About = () => {
  const { description, infoList } = descriptionData;

  return (
    <div id='about' className='w-full px-[9%] py-10 scroll-mt-20'>
      <h4 className='text-center mb-2 text-lg font-Ovo'>Introduction</h4>
      <h2 className='text-center text-4xl font-Ovo'>About me</h2>
      <div className='flex w-full flex-col lg:flex-row items-center gap-10 my-20'>
        <div className='w-64 sm:w-80 rounded-3xl'>
          <Image src={assets.user_image} alt='user' className='w-full rounded-3xl'/>
        </div>
        <div className='flex-1'>
          <p className='mb-10 max-w-2xl font-Ovo text-base'>
            {description}
          </p>

          <ul className='grid grid-cols-1 sm:grid-cols-2 gap-2'>
            {infoList.map((category, index) => (
              <li key={index} className="border-[1px] border-gray-400 rounded-xl p-2 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-300 hover:shadow-black">
                <div className='flex items-center'>
                  <Image src={categoryIcons[category.category]} width="50" height="50" alt={category.category} className='w-7 mt-3'/>
                  <h3 className='my-4 font-medium text-black-700 text-lg ml-2'>{category.category}</h3>
                </div>
                {category.entries.map((entry, entryIndex) => (
                  <div key={entryIndex} className='mb-4'>
                    <h4 className='mt-2 font-medium text-black-700 text-md leading-tight'>{entry.title}</h4>
                    <h5 className='text-xs mb-2 '>{entry.time}</h5>
                    <p className='text-sm'>{entry.description}</p>
                    {entryIndex < category.entries.length - 1 && (
                      <div className='border-b-2 border-gray-300 h-6 mx-auto my-2'></div>
                    )}
                  </div>
                ))}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default About