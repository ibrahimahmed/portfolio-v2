import Image from 'next/image'
import React from 'react'
import AboutImg from '../public/assets/about.jpg';
import { ProjectItem } from './ProjectItem';

export const Projects = () => {
  return (
    <div className='w-full'>
        <div className='max-w-[1240px] mx-auto px-2 py-16 '>
            <p className='text-xl tracking-widest uppercase text-[#00c690]'>
                Projects
            </p>
            <h2 className='py-4'>
                What I've Built so far
            </h2>
            <div className='grid md:grid-cols-2 gap-8'>
               <ProjectItem
            title='Property Finder'
            backgroundImg={AboutImg}
            projectUrl='/property'
            tech='React JS'
          />
             <ProjectItem
            title='Property Finder'
            backgroundImg={AboutImg}
            projectUrl='/property'
            tech='React JS'
          />
            </div>
        </div>
    </div>
  )
}
