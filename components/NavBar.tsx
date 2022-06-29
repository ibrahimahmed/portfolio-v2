import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { FcBriefcase, FcBusinessman, FcCustomerSupport, FcHome, FcList, FcServices, FcSurvey } from "react-icons/fc";
import { AiOutlineClose, AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

export const NavBar = () => {
    const [nav, setNav] = useState(false);

    // handle navigation
    const handleNav = () => {
        setNav(!nav);
    }

    return (
        <div className='fixed w-full h-20 shadow-xl z-[100]'>
            <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
                <Image src='/assets/LogoFinal.png' width='200' height='160' />
                <div>
                    <ul className='hidden md:flex'>
                        <Link href='/' >
                            <li className='ml-10 text-sm uppercase hover:border-b hover:bg-[#00c690] font-bold py-2 px-4 rounded-xl inline-flex'>
                                <FcHome size={20} className="self-center w-5 h-5 rounded-full mx-1" />
                                Home
                            </li>
                        </Link>
                        <Link href='/' >
                            <li className='ml-10 text-sm uppercase hover:border-b hover:bg-[#00c690] font-bold py-2 px-4 rounded-xl inline-flex'>
                                <FcBusinessman size={20} className="self-center w-5 h-5 rounded-full mx-1" />
                                About ME
                            </li>
                        </Link>
                        <Link href='/' >
                            <li className='ml-10 text-sm uppercase hover:border-b hover:bg-[#00c690] font-bold py-2 px-4 rounded-xl inline-flex'>
                                <FcBriefcase size={20} className="self-center w-5 h-5 rounded-full mx-1" />
                                Projects
                            </li>
                        </Link>
                        <Link href='/' >
                            <li className='ml-10 text-sm uppercase hover:border-b hover:bg-[#00c690] font-bold py-2 px-4 rounded-xl inline-flex'>
                                <FcServices size={20} className="self-center w-5 h-5 rounded-full mx-1" />
                                Skills
                            </li>
                        </Link>
                        <Link href='/' >
                            <li className='ml-10 text-sm uppercase hover:border-b hover:bg-[#00c690] font-bold py-2 px-4 rounded-xl inline-flex'>
                                <FcSurvey size={20} className="self-center w-5 h-5 rounded-full mx-1" />
                                Experience
                            </li>
                        </Link>
                        <Link href='/' >
                            <li className='ml-10 text-sm uppercase hover:border-b hover:bg-[#00c690] font-bold py-2 px-4 rounded-xl inline-flex'>
                                <FcCustomerSupport size={20} className="self-center w-5 h-5 rounded-full mx-1" />
                                Contact Me
                            </li>
                        </Link>
                    </ul>
                    <div onClick={handleNav} className='md:hidden'>
                        <FcList size={25} />
                    </div>
                </div>
            </div>

            <div className={nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-white/60' : ''}>
                <div className={nav ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#17171f] p-10 ease-in duration-500'
                    : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'}>
                    <div>
                        <div className='flex w-full items-center justify-between'>
                            <Image src='/assets/LogoFinal.png' width='250' height='180' />
                            <div onClick={handleNav} className='rounded-full shadow-lg shadow-neutral-600 p-3 cursor-pointer'>
                                <AiOutlineClose />
                            </div>
                        </div>
                        <div className='border-b my-4'>
                            <p className='w-[85%] md:w-[90%] py-4'>
                                Lets Build something extraordinary together.
                            </p>
                        </div>
                    </div>
                    <div className='py-4 flex flex-col'>
                        <ul className='uppercase'>
                            <Link href='/'>
                                <li className='py-4 text-sm hover:border-b hover:bg-[#00c690] font-bold px-4 rounded-xl '>
                                    <FcHome size={20} className="self-center w-4 h-4 rounded-full mx-0.5 inline" />
                                    Home
                                </li>
                            </Link>
                            <Link href='/'>
                                <li className='py-4 text-sm hover:border-b hover:bg-[#00c690] font-bold px-4 rounded-xl '>
                                    <FcBusinessman size={20} className="self-center w-4 h-4 rounded-full mx-0.5 inline" />
                                    About
                                </li>
                            </Link>
                            <Link href='/'>
                                <li className='py-4 text-sm hover:border-b hover:bg-[#00c690] font-bold px-4 rounded-xl '>
                                    <FcServices size={20} className="self-center w-4 h-4 rounded-full mx-0.5 inline" />

                                    Skills
                                </li>
                            </Link>
                            <Link href='/'>
                                <li className='py-4 text-sm hover:border-b hover:bg-[#00c690] font-bold px-4 rounded-xl '>
                                    <FcBriefcase size={20} className="self-center w-4 h-4 rounded-full mx-0.5 inline" />

                                    Projects
                                </li>
                            </Link>
                            <Link href='/'>
                                <li className='py-4 text-sm hover:border-b hover:bg-[#00c690] font-bold px-4 rounded-xl '>
                                    <FcSurvey size={20} className="self-center w-4 h-4 rounded-full mx-0.5 inline" />

                                    Experience
                                </li>
                            </Link>
                            <Link href='/'>
                                <li className='py-4 text-sm hover:border-b hover:bg-[#00c690] font-bold px-4 rounded-xl '>
                                    <FcCustomerSupport size={20} className="self-center w-4 h-4 rounded-full mx-0.5 inline" />

                                    Contact Us
                                </li>
                            </Link>
                        </ul>
                        <div className='pt-40'>
                            <p className='uppercase tracking-widest text-[#00c690]'> Lets Connect Socially </p>
                            <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
                                <div className='rounded-full shadow-lg shadow-neutral-600 p-3 cursor-pointer hover:scale-105 ease-in duration-500'>
                                    <FaLinkedin />
                                </div>
                                <div className='rounded-full shadow-lg shadow-neutral-600 p-3 cursor-pointer hover:scale-105 ease-in duration-500'>
                                    <FaGithub />
                                </div>
                                <div className='rounded-full shadow-lg shadow-neutral-600 p-3 cursor-pointer hover:scale-105 ease-in duration-500'>
                                    <FaTwitter />
                                </div>
                                <div className='rounded-full shadow-lg shadow-neutral-600 p-3 cursor-pointer hover:scale-105 ease-in duration-500'>
                                    <AiOutlineMail />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
