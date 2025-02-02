import React from 'react'
import Image from 'next/image'
import { assets, infoList, toolsData } from '@/assets/assets'

const About = ({isDarkMode}) => {
    return (
        // <div id='about' className='bg-gradient-to-l from-green-200 to-green-300 w-full px-[12%] py-10 scroll-mt-20'>
        
        <div id='about' className='w-full px-[12%] py-10 scroll-mt-20'>
            <h4 className='text-center mb-2 text-lg font-Ovo'>Introduction</h4>
            <h2 className='text-center text-5xl font-Ovo'>About Me</h2>
            <div className='flex w-full flex-col lg:flex-row items-center gap-20 my-20'>
                <div className='w-64 sm:w-80 rounded-3xl max-w-none'>
                    <Image src={assets.user_image} alt='About Image' className='w-full rounded-3xl' />
                </div>
                <div className='flex-1'>
                    <p className='mb-10 max-w-2xl font-Ovo'>
                        <b>"Innovative Web Developer and Aspiring Full-Stack MERN Developer" </b>
                        With over 4 years of experience in data analysis and a strong foundation in web
                        development, I am passionate about crafting dynamic, user-friendly applications.
                    </p>
                    <ul className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl'>
                        {infoList.map(({ icon, iconDark, title, description }, index) => (
                            <li key={index}
                                className='border-[0.5px] border-gray-400 rounded-xl p-4 cursor-pointer flex items-center flex-col justify-center hover:bg-light hover:-translate-y-1 duration-500 hover:shadow-black dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover'>
                                <Image src={icon} alt='icon' className='w-12 mt-3' />
                                <h3 className='font-semibold text-gray-700 dark:text-white'>{title}</h3>
                                <p className='text-gray-600 text-sm text-center dark:text-white/80'>{description}</p>
                            </li>
                        ))}
                    </ul>
                    <h4 className='my-6 text-gray-700 font-Ovo dark:text-white/80'>Tools I use</h4>
                    <ul className='flex flex-items-center gap-3 sm:gap-5'>
                        {toolsData.map((tool, index) => (
                            <li key={index}
                                className='flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500'>
                                <Image src={tool} alt='Tool' className='w-5 sm:w-7' />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default About