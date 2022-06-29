import React from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'

export const Main = () => {
    return (
        <div className='w-full h-screen text-center'>
            <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
                <div>
                    <h1 className='py-4'>Hi, I'm <span className='text-[#00c690]'>Ibrahim Ahmed</span></h1>
                    <h1 className='py-2'>A Full-Stack Developer </h1>
                    <p className='py-4 max-w-[70%] m-auto'>
                        I'm a Full-Stack Developer with a passion for designing and developing web applications. Currently,working as a
                        <span className='text-[#00c690]'> Techincal Lead </span> at Try Catch Pro leading the team of 6 engineer who works day and night to make the other peoples idea a reality.
                    </p>
                    <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
                        <div className='rounded-full shadow-lg shadow-neutral-600 p-6 cursor-pointer hover:scale-105 ease-in duration-500'>
                            <FaLinkedin />
                        </div>
                        <div className='rounded-full shadow-lg shadow-neutral-600 p-6 cursor-pointer hover:scale-105 ease-in duration-500'>
                            <FaGithub />
                        </div>
                        <div className='rounded-full shadow-lg shadow-neutral-600 p-6 cursor-pointer hover:scale-105 ease-in duration-500'>
                            <FaTwitter />
                        </div>
                        <div className='rounded-full shadow-lg shadow-neutral-600 p-6 cursor-pointer hover:scale-105 ease-in duration-500'>
                            <AiOutlineMail />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
