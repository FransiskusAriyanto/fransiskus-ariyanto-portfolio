import React from 'react';
import TechStackItem from './TechStackItem';
import bootstrap from '../assets/bootstrap.jpg';
import csharp from '../assets/csharp.png';
import dotnet from '../assets/dotnet.jpg';
import java from '../assets/java.png';
import js from '../assets/js.png';
import kotlinlogo from '../assets/kotlinlogo.png';
import laravel from '../assets/laravel.png';
import mysql from '../assets/mysql.png';
import php from '../assets/php.png';
import react from '../assets/react.svg';
import sqlserver from '../assets/sqlserver.png';
import tailwindcss from '../assets/tailwindcss.png';

const TechStack = () => {
    return (
        <div id='techStack' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
            <h1 className='underline text-4xl font-bold text-center text-[#001b5e] pb-6 dark:text-white'>Tech-Stack</h1>
            <p className='text-stone-500 dark:text-stone-200'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente blanditiis suscipit autem reprehenderit, quidem, vero debitis
                tenetur architecto eum, voluptatum adipisci ducimus veritatis voluptates assumenda accusamus aspernatur asperiores. Ratione, natus.
            </p>
            <div className='grid gap-12 sm:grid-cols-4'>
                <TechStackItem img={bootstrap} title='Bootstrap' />
                <TechStackItem img={csharp} title='C#' />
                <TechStackItem img={dotnet} title='DotNet' />
                <TechStackItem img={java} title='Java' />
                <TechStackItem img={js} title='JS' />
                <TechStackItem img={kotlinlogo} title='Kotlin' />
                <TechStackItem img={laravel} title='Laravel' />
                <TechStackItem img={mysql} title='MySQL' />
                <TechStackItem img={php} title='PHP' />
                <TechStackItem img={react} title='React' />
                <TechStackItem img={sqlserver} title='SQL Server' />
                <TechStackItem img={tailwindcss} title='Tailwind CSS' />
            </div>
        </div>
    );
};

export default TechStack;
