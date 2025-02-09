import { assets, workData } from '@/assets/assets';
import Image from 'next/image';
import React from 'react';
import { motion } from "motion/react"

const Work = ({ isDarkMode }) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            id='work' className='w-full px-[12%] py-10 scroll-mt-20'>
            <motion.h4
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }} className='text-center mb-2 text-lg font-Ovo'>My Portfolio</motion.h4>
            <motion.h2
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className='text-center text-5xl font-Ovo'>My Latest Work</motion.h2>
            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.5 }}
                className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>
                Welcome to my web development portfolio. Explore a collection of projects
                showcasing my experience in front-end development.
            </motion.p>

            {/* Work Grid */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.9, duration: 0.6 }}
                className='grid grid-cols-auto my-10 gap-5 dark:text-black'>
                {workData.map(({ title, description, bgImage }, index) => (
                    // console.log(project.bgImage);
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                        key={index} className='border border-gray-600 text-black relative cursor-pointer group aspect-square rounded-lg overflow-hidden dark:text-white'>
                        {/* Background Image */}
                        <div className='absolute inset-0'>
                            <Image
                                src={bgImage}
                                alt={title}
                                layout='fill'
                                objectFit='cover'
                                className='rounded-lg'
                            />
                        </div>

                        {/* Project Info */}
                        <div className='bg-white text-black w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7 shadow-lg'>
                            <div>
                                <h2 className='font-semibold'>{title}</h2>
                                <p className='text-sm text-gray-700'>{description}</p>
                            </div>
                            <div className='border rounded-full border-black w-8 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-600 transition'>
                                <Image src={assets.send_icon} alt='send icon' width={20} height={20} />
                            </div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>

            {/* Show More Button */}
            <motion.a 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.5 }}
            href="#" className='w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px]
            border-gray-700 rounded-full px-10 py-3 mx-auto my-20 hover:bg-lightHover duration-500
            dark:text-white dark:border-white dark:hover:bg-darkHover'>
                Show more
                <Image
                    src={isDarkMode ? assets.right_arrow_bold_dark : assets.right_arrow_bold}
                    alt='right arrow'
                    width={16} height={16}
                />
            </motion.a>
        </motion.div>
    );
}

export default Work;
