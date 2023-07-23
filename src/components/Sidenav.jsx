import React from 'react';
import { useState } from 'react';
import { AiOutlineCoffee, AiOutlineHome, AiOutlineMenu } from 'react-icons/ai';
import { GrProjects } from 'react-icons/gr';
import MenuButton from './MenuButton';
import Switcher from './Switcher';

const Sidenav = () => {
    const [nav, setNav] = useState(false);
    const handleNav = () => {
        setNav(!nav);
    };

    return (
        <div>
            <AiOutlineMenu
                onClick={handleNav}
                className='fixed top-4 right-4 z-[99] md:hidden text-white bg-gradient-to-r from-gray-200 to-[#001b5e]'
            />
            {nav ? (
                <div className='fixed z-20 flex flex-col items-center justify-center w-full h-screen bg-white/90'>
                    <MenuButton onClick={handleNav}>
                        <AiOutlineHome size={20} />
                        <span className='pl-4'>Home</span>
                    </MenuButton>

                    <MenuButton href='#work' onClick={handleNav}>
                        <GrProjects size={20} />
                        <span className='pl-4'>Work</span>
                    </MenuButton>

                    <MenuButton href='#techStack' onClick={handleNav}>
                        <AiOutlineCoffee size={20} />
                        <span className='pl-4'>Tech Stack</span>
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

                    <MenuButton href='#techStack'>
                        <AiOutlineCoffee size={20} />
                    </MenuButton>
                </div>
            </div>
        </div>
    );
};

export default Sidenav;
