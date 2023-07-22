import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { FaGithub, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
const Main = () => {
    return (
        <div id='main'>
            <img
                className='w-full h-screen object-cover object-left scale-x-[-1]'
                src='https://www-cdn.eumetsat.int/files/styles/16_9_large/s3/2023-04/mtg-i1.jpg?h=d1cb525d&itok=O-COkB2i'
                alt='home background'
            />
            <div className='w-full h-screen absolute top-0 left-0 bg-white/20'>
                <div className='text-white max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center'>
                    <h1 className='sm:text-5xl text-4xl text-white underline'>Hi, I'm Fransiskus Ariyanto</h1>
                    <h2 className='flex sm:text-3xl text-2xl pt-4'>
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
                        <FaGithub className='cursor-pointer' size={20} />
                        <FaLinkedinIn className='cursor-pointer' size={20} />
                        <FaInstagram className='cursor-pointer' size={20} />
                        <FaTwitter className='cursor-pointer' size={20} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;
