// import { assets } from '@/assets/assets'
// import Image from 'next/image'
// import React from 'react'

// const Header = () => {
//     return (
//         <div>
//             <div>
//                 <Image src={assets.profile_img} alt='' className='rounded-full w-32' />
//             </div>
//             <h3 className='flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo'>
//                 Hi I'm AR Katyayini
//                 <Image src={assets.hand_icon}
//                     alt=''
//                     className='w-6' />
//             </h3>
//             <h1 className='text-3xl sm:text-6xl lg:text-[66px] font-Ovo'>
//                 Frontend Web Developer based in India.
//                 <p className='max-w-2xl mx-auto font-Ovo'>I'm a frontend developer from Konaseema, Andhra with 3 years of experience in multiple comapnies like, Lumidad, MediCardia and freelancing.</p>
//                 <div className='fle flex-col sm:flex-row items-center gap-4 mt-4'>
//                     <a href="#contact"
//                         className='px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2'
//                     >Contact Me
//                         <Image src={assets.right_arrow_white}
//                             alt=''
//                             className='w-4' />
//                     </a>

//                     <a href="/portfolio/public/My Resume Sample.pdf" download
//                         className='px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2'
//                     >My Resume
//                         <Image src={assets.download_icon}
//                             alt=''
//                             className='w-4' />
//                     </a>
//                 </div>
//             </h1>

//         </div>
//     )
// }

// export default Header

import { assets } from '@/assets/assets';
import Image from 'next/image';
import React from 'react';

const Header = ({isDarkMode}) => {
    return (
        // <div className="bg-gradient-to-r from-green-300 via-yellow-400 to-green-300 text-black p-6 md:p-12 rounded-lg shadow-lg">
        <div className="p-6 md:p-12 rounded-lg shadow-lg">

            <div className="flex justify-center mb-6">
                <Image
                    src={assets.profile_img}
                    alt="Profile Picture"
                    className="w-32 mt-11"
                />
            </div>
            <h3 className="flex items-center justify-center gap-2 text-xl md:text-2xl mb-3 font-Ovo dark:bg-transparent">
                Hi, I'm <p className='font-Outfit'>Ambika Rama Katyayini</p>
                <Image
                    src={isDarkMode?assets.hand_icon_dark:assets.hand_icon}
                    alt="Hand Icon"
                    className="w-7 animate-wave"
                />
            </h3>
            <h1 className="text-center text-3xl sm:text-5xl lg:text-[66px] font-Ovo mb-6">
                Frontend Web Developer based in India.
            </h1>
            <p className="max-w-2xl mx-auto text-center text-lg md:text-xl font-Ovo mb-6">
                I'm a frontend developer from Konaseema, Andhra with 3 years of experience in multiple companies like Lumidad, MediCardia, and freelancing.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                <a
                    href="#contact"
                    className="px-10 py-3 border-2 border-white/20 rounded-full  text-white bg-black flex items-center gap-3 transition duration-300 dark:bg-transparent"
                >
                    Contact Me
                    <Image
                        src={assets.right_arrow_white}
                        alt="Right Arrow"
                        className="w-4 animate-pulse"
                    />
                </a>

                <a
                    href="/Student Athlete Resume.pdf"
                    download
                    className="px-10 py-3 border-2 rounded-full hover:bg-white hover:text-black flex items-center gap-2 transition duration-300 bg-white dark:text-black"
                >
                    My Resume
                    <Image
                        src={assets.download_icon}
                        alt="Download Icon"
                        className="w-4 animate-bounce"
                    />
                </a>
            </div>
        </div>
    );
};

export default Header;