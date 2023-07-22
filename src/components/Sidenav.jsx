import React from 'react';
import { useState } from 'react';
import { AiOutlineHome, AiOutlineMail, AiOutlineMenu, AiOutlineProject } from 'react-icons/ai';
import { GrProjects } from 'react-icons/gr';
import { BsPerson } from 'react-icons/bs';
import MenuButton from './MenuButton';

const Sidenav = () => {
    const [nav, setNav] = useState(false);
    const handleNav = () => {
        setNav(!nav);
    };

    return (
        <div>
            <AiOutlineMenu onClick={handleNav} className='absolute top-4 right-4 z-[99] md:hidden text-white' />
            {nav ? (
                <div className='fixed z-20 flex flex-col items-center justify-center w-full h-screen bg-white/90'>
                    <MenuButton>
                        <AiOutlineHome size={20} />
                        <span className='pl-4'>Home</span>
                    </MenuButton>

                    <MenuButton href='#work'>
                        <GrProjects size={20} />
                        <span className='pl-4'>Work</span>
                    </MenuButton>

                    <MenuButton href='#project'>
                        <AiOutlineProject size={20} />
                        <span className='pl-4'>Project</span>
                    </MenuButton>

                    <MenuButton href='#main'>
                        <BsPerson size={20} />
                        <span className='pl-4'>Resume</span>
                    </MenuButton>

                    <MenuButton href='#contact'>
                        <AiOutlineMail size={20} />
                        <span className='pl-4'>Contact</span>
                    </MenuButton>
                </div>
            ) : (
                ''
            )}
            <div className='md:block hidden fixed top-[25%] z-10'>
                <div className='flex flex-col'>
                    <MenuButton>
                        <AiOutlineHome size={20} />
                    </MenuButton>

                    <MenuButton href='#work'>
                        <GrProjects size={20} />
                    </MenuButton>

                    <MenuButton href='#project'>
                        <AiOutlineProject size={20} />
                    </MenuButton>

                    <MenuButton href='#main'>
                        <BsPerson size={20} />
                    </MenuButton>

                    <MenuButton href='#contact'>
                        <AiOutlineMail size={20} />
                    </MenuButton>
                    {/* <a
                        href='#contact'
                        className='p-4 m-2 duration-300 ease-in bg-gray-100 rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-110'>
                        <AiOutlineMail size={20} />
                    </a> */}
                </div>
            </div>
        </div>
    );
};

export default Sidenav;
