import React from 'react';
import WorkItem from './WorkItem';

const data = [
    {
        year: '2023 - present',
        company: 'PT Mitra Integrasi Informatika as Application Developer',
        details: ['Create website using C# Asp.Net Core 6, ', 'Create Dataverse table, ', 'Design ERD'],
    },
    {
        year: '2021',
        company: 'Sinode GKJ Salatiga as Web Developer',
        details: [
            'Design digital receipt application database, ',
            'Create digital receipt application using Laravel 8, ',
            'Testing digital receipt application by manually test, ',
            'Deploy digital receipt application into internal server, ',
            'Merge pdf files into pdf file',
        ],
    },
    {
        year: '2015 - 2017',
        company: 'Glory Net as Helpdesk',
        details: ['Printer Maintenance, ', 'Computer Maintenance, ', 'Wrote papers which were Glory Net’s main income'],
    },
];
const Work = () => {
    return (
        <div id='work' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
            <h1 className='underline text-4xl font-bold text-center text-[#001b5e] pb-6 dark:text-white'>Work Assignments</h1>
            {data.map((item, idx) => (
                <WorkItem key={idx} year={item.year} company={item.company} details={item.details} />
            ))}
        </div>
    );
};

export default Work;
