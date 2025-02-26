import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import project from '@/app/projects/projects.json'


const Projects = () => {
    const { description, projectsData } = project;
  return (
    <div id='projects' className='w-full px-[9%] py-10 scroll-mt-20'>
        <h4 className='text-center mb-2 text-lg font-Ovo'>List of</h4>
        <h2 className='text-center text-4xl font-Ovo'>Projects</h2>
        <p className='text-center max-w-2xl mx-auto mt-5 mb-12 text-base font-Ovo'>
            {description}
        </p>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 my-10'>
        {projectsData.map(({ icon, title, description, link }, index) => (
            <div
            key={index}
            className='border-[1px] border-gray-400 rounded-lg px-3 py-5 hover:shadow-black cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-300 flex flex-col'
            style={{ height: '500px' }}
            >


            <div className='flex flex-col justify-center text-center'>
                <h3 className='text-lg my-2 text-black-700 font-medium'>{title}</h3>
            </div>
            <div className='flex-1 flex items-center justify-center mb-6'>
                <Image
                src={icon} alt='' width={300} height={300} className='w-full h-full object-contain' />
            </div>
            <div className='flex flex-col justify-center'>
                <p className='text-sm text-black-600 leading-5'>
                {description}
                </p>
                <a href={link} className='flex items-center gap-2 text-sm mt-3 font-Ovo justify-center'>
                GitHub Link
                <Image src={assets.right_arrow} alt='' width={20} height={20} className='w-4' />
                </a>
            </div>
            </div>
        ))}
        </div>
      
    </div>
  )
}

export default Projects
