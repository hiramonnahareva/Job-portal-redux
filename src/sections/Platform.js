import React from 'react';
import {GiChemicalArrow} from 'react-icons/gi';

const Platform = () => {
    const data = [
        {
            _id: 1,
            icon: <GiChemicalArrow />,
            title: 'Marketing & Communication',
            para: '58 jobs Available',
        },
        {
            _id: 2,
            icon: <GiChemicalArrow/>,
            title: 'Design & Development',
            para: '120 jobs Available',
        },
        {
            _id: 3,
            icon: <GiChemicalArrow/>,
            title: 'Human Research & Development',
            para: '199 jobs Available',
        },
        {
            _id: 4,
            icon: <GiChemicalArrow/>,
            title: 'Finance Management',
            para: '157 jobs Available',
        },
        {
            _id: 5,
            icon: <GiChemicalArrow/>,
            title: 'Armforce Guide & Secuirity',
            para: '120 jobs Available',
        },
        {
            _id: 6,
            icon: <GiChemicalArrow/>,
            title: 'Business & Consulting',
            para: '47 jobs Available',
        },
        {
            _id: 7,
            icon: <GiChemicalArrow/>,
            title: 'Customer & Support Care',
            para: '87 jobs Available',
        },
        {
            _id: 8,
            icon: <GiChemicalArrow/>,
            title: 'Project Management',
            para: '20 jobs Available',
        },
    ]
    return (
        <div className='bg-primary/10 py-28 p-0 '>
            <h2 className='pb-20 text-center text-3xl font-bold'>One Platform <br/> Many <span className='text-primary'>Solutions</span></h2>
            <div className='grid grid-cols-4 gap-6 mx-20'>
                    {
                        data.map(data => 
                            <div key={data._id} className='flex gap-4 p-10 bg-white hover:bg-primary hover:text-white rounded-lg transition-all'>
                            <div className='text-3xl text-pink-400 '>
                                {data.icon} 

                            </div>
                            <div className=''>
                            <h2 className='text-[18px] font-bold mb-2'>{data.title}</h2>
                            <p>{data.para}</p>
                            </div>
                        </div>)
                    }
            </div>
        </div>
    );
};

export default Platform;