import clsx from 'clsx';
import React from 'react';

export default function MenuButton(props) {
    const {
        className = 'w-[75%] flex items-center justify-center p-4 m-2 ease-in bg-gray-100 rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-110 duration-200 dark:shadow-slate-300',
        href = '#main',
        menuIcon,
        children,
        onClick,
    } = props;
    return (
        <a onClick={onClick} {...props} href={href} className={className}>
            {menuIcon}
            {children}
        </a>
    );
}
