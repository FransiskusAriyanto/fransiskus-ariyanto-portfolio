import React from 'react';
import { useEffect } from 'react';

const Switcher = (onClick) => {
    const selectTheme = (value) => {
        localStorage.setItem('theme', value);
        document.querySelector('html').classList.add(localStorage.getItem('theme'));
        if (value == 'dark') {
            document.querySelector('html').classList.remove('light')
        }
        else {
            document.querySelector('html').classList.remove('dark')
        }
    };

    useEffect(() => {
        document.querySelector('html').classList.add(localStorage.getItem('theme'));
    }, []);
    return (
        <div className='fixed flex items-center justify-between shadow p-4rounded-lg bottom-4 right-4'>
            <button onClick={() => selectTheme('light')} className='w-5 h-5 mr-2 bg-gray-200 rounded-full focus:outline-none ' />
            <button onClick={() => selectTheme('dark')} className='w-5 h-5 bg-gray-800 rounded-full focus:outline-none ' />
        </div>
    );
};

export default Switcher;
