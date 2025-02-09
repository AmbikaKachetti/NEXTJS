// import React from 'react'
// import Image from 'next/image'
// import { assets, infoList, toolsData } from '@/assets/assets'
// import { motion } from "motion/react"

// const About = ({ isDarkMode }) => {
//     return (
//         // <div id='about' className='bg-gradient-to-l from-green-200 to-green-300 w-full px-[12%] py-10 scroll-mt-20'>

//         <motion.div id='about' className='w-full px-[12%] py-10 scroll-mt-20'
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             transition={{ duration: 1 }}
//         >
//             <motion.h4
//                 initial={{ opacity: 0, y: -20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5, delay: 0.3 }}
//                 className='text-center mb-2 text-lg font-Ovo'>Introduction</motion.h4>
//             <motion.h2
//                 initial={{ opacity: 0, y: -20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5, delay: 0.5 }}
//                 className='text-center text-5xl font-Ovo'>About Me</motion.h2>
//             <motion.div
//                 initial={{ opacity: 0 }}
//                 whileInView={{ opacity: 1, y: 1 }}
//                 transition={{ duration: 0.8 }}
//                 className='flex w-full flex-col lg:flex-row items-center gap-20 my-20'>
//                 <motion.div
//                     initial={{ opacity: 0, scale: 0.9 }}
//                     whileInView={{ opacity: 1, scale: 1 }}
//                     transition={{ duration: 0.6 }}
//                     className='w-64 sm:w-80 rounded-3xl max-w-none'>
//                     <Image src={assets.user_image} alt='About Image' className='w-full rounded-3xl' />
//                 </motion.div>
//                 <motion.div
//                     initial={{ opacity: 0 }}
//                     whileInView={{ opacity: 1 }}
//                     transition={{ duration: 0.6, delay: 0.8 }}
//                     className='flex-1'>
//                     <p className='mb-10 max-w-2xl mx-auto font-Ovo'>
//                         <b>"Innovative Web Developer and Aspiring Full-Stack MERN Developer" </b>
//                         With over 4 years of experience in data analysis and a strong foundation in web
//                         development, I am passionate about crafting dynamic, user-friendly applications.
//                     </p>
//                     <motion.ul
//                         initial={{ opacity: 0 }}
//                         whileInView={{ opacity: 1 }}
//                         transition={{ duration: 0.8, delay: 1 }} className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl'>
//                         {infoList.map(({ icon, iconDark, title, description }, index) => (
//                             <motion.li
//                                 whileHover={{ scale: 1.05 }}
//                                 key={index}
//                                 className='border-[0.5px] border-gray-400 rounded-xl p-4 cursor-pointer flex items-center flex-col justify-center hover:bg-light hover:-translate-y-1 duration-500 hover:shadow-black dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover'>
//                                 <Image src={icon} alt='icon' className='w-12 mt-3' />
//                                 <h3 className='font-semibold text-gray-700 dark:text-white'>{title}</h3>
//                                 <p className='text-gray-600 text-sm text-center dark:text-white/80'>{description}</p>
//                             </motion.li>
//                         ))}
//                     </motion.ul>
//                     <motion.h4
//                         initial={{ y: 20, opacity: 0 }}
//                         whileInView={{ y: 0, opacity: 1 }}
//                         transition={{ delay: 1.3, duration: 0.5 }}
//                         className='my-6 text-gray-700 font-Ovo dark:text-white/80'>Tools I use</motion.h4>
//                     <motion.ul
//                         initial={{ opacity: 0 }}
//                         whileInView={{ opacity: 1 }}
//                         transition={{ delay: 1.5, duration: 0.6 }}
//                         className='flex flex-items-center gap-3 sm:gap-5'>
//                         {toolsData.map((tool, index) => (
//                             <motion.li
//                                 whileHover={{ scale: 1.1 }}
//                                 key={index}
//                                 className='flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500'>
//                                 <Image src={tool} alt='Tool' className='w-5 sm:w-7' />
//                             </motion.li>
//                         ))}
//                     </motion.ul>
//                 </motion.div>
//             </motion.div>
//         </motion.div>
//     )
// }

// export default About
import React from 'react';
import Image from 'next/image';
import { assets, infoList, toolsData } from '@/assets/assets';
import { motion } from "motion/react";

const About = ({ isDarkMode }) => {
    return (
        <motion.div id='about' className='w-full px-6 sm:px-[12%] py-10 scroll-mt-20'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            <motion.h4
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className='text-center mb-2 text-lg font-Ovo'>Introduction</motion.h4>
            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className='text-center text-4xl sm:text-5xl font-Ovo'>About Me</motion.h2>
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1, y: 1 }}
                transition={{ duration: 0.8 }}
                className='flex flex-col lg:flex-row items-center gap-10 sm:gap-20 my-10 sm:my-20'>
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    className='w-48 sm:w-64 md:w-80 rounded-3xl max-w-none'>
                    <Image src={assets.user_image} alt='About Image' className='w-full rounded-3xl' />
                </motion.div>
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className='flex-1 text-center sm:text-left'>
                    <p className='mb-6 sm:mb-10 max-w-2xl mx-auto font-Ovo text-sm sm:text-base'>
                        <b>"Innovative Web Developer and Aspiring Full-Stack MERN Developer"</b>
                        With over 4 years of experience in data analysis and a strong foundation in web
                        development, I am passionate about crafting dynamic, user-friendly applications.
                    </p>
                    <motion.ul
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 1 }}
                        className='grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-2xl'>
                        {infoList.map(({ icon, iconDark, title, description }, index) => (
                            <motion.li
                                whileHover={{ scale: 1.05 }}
                                key={index}
                                className='border-[0.5px] border-gray-400 rounded-xl p-3 sm:p-4 cursor-pointer flex items-center flex-col justify-center hover:bg-light hover:-translate-y-1 duration-500 hover:shadow-black dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover'>
                                <Image src={icon} alt='icon' className='w-10 sm:w-12 mt-2 sm:mt-3' />
                                <h3 className='font-semibold text-gray-700 dark:text-white text-sm sm:text-base'>{title}</h3>
                                <p className='text-gray-600 text-xs sm:text-sm text-center dark:text-white/80'>{description}</p>
                            </motion.li>
                        ))}
                    </motion.ul>
                    <motion.h4
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ delay: 1.3, duration: 0.5 }}
                        className='mt-8 sm:mt-12 text-gray-700 font-Ovo dark:text-white/80 text-sm sm:text-base'>Tools I use</motion.h4>
                    <motion.ul
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 1.5, duration: 0.6 }}
                        className='flex flex-wrap justify-center sm:justify-start gap-3 sm:gap-5 mt-4 sm:mt-6'>
                        {toolsData.map((tool, index) => (
                            <motion.li
                                whileHover={{ scale: 1.1 }}
                                key={index}
                                className='flex items-center justify-center w-10 sm:w-12 md:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500'>
                                <Image src={tool} alt='Tool' className='w-4 sm:w-6 md:w-7' />
                            </motion.li>
                        ))}
                    </motion.ul>
                </motion.div>
            </motion.div>
        </motion.div>
    );
}

export default About;
