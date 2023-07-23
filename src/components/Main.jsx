import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { FaGithub, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';
const Main = () => {
    return (
        <div id='main'>
            <img
                className='w-full h-screen object-cover object-left scale-x-[-1]'
                src='https://www-cdn.eumetsat.int/files/styles/16_9_large/s3/2023-04/mtg-i1.jpg?h=d1cb525d&itok=O-COkB2i'
                alt='home background'
            />
            <div className='absolute top-0 left-0 w-full h-screen bg-white/20'>
                <div className='text-white max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center'>
                    <h1 className='text-4xl text-white sm:text-5xl'>Hi, I'm Fransiskus Ariyanto</h1>
                    <h2 className='flex pt-4 text-2xl sm:text-3xl'>
                        <TypeAnimation
                            sequence={[
                                // Same substring at the start will only be typed out once, initially
                                'Web Developer',
                                1000, // wait 1s before replacing "Mice" with "Hamsters"
                                'Android Developer',
                                1000,
                            ]}
                            wrapper='div'
                            style={{ fontSize: '1em', paddingLeft: '5px' }}
                            repeat={Infinity}
                        />
                    </h2>
                    <div className='flex justify-between pt-6 max-w-[200px] w-full border-collapse'>
                        <a href='https://github.com/FransiskusAriyanto'>
                            <FaGithub className='cursor-pointer' size={20} />
                        </a>
                        <a href='https://www.linkedin.com/in/fransiskus-ariyanto-551672180/'>
                            <FaLinkedinIn className='cursor-pointer' size={20} />
                        </a>
                        <a href='https://www.instagram.com/frns.ari/'>
                            <FaInstagram className='cursor-pointer' size={20} />
                        </a>
                        <a href=''>
                            <FaTwitter className='cursor-pointer' size={20} />
                        </a>
                        <a href='mailto: fransiskusariyanto.ari@gmail.com'>
                            <AiOutlineMail className='cursor-pointer' size={20} />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;
