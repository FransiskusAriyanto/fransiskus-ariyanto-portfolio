import React from 'react';

const TechStackItem = ({ img, title }) => {
    return (
        <div className='relative flex items-center justify-center h-auto shadow-xl w-full shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-gray-200 to-[#001b5e] dark:shadow-gray-600'>
            <img src={img} alt='/' className='object-fill rounded-xl group-hover:opacity-10' />
            <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
                <h3 className='text-2xl font-bold tracking-wider text-center text-white'>{title}</h3>
            </div>
        </div>
    );
};

export default TechStackItem;
