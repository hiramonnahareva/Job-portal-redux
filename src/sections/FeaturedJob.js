import React from 'react';
import { GiChemicalArrow } from 'react-icons/gi';
import { Link } from 'react-router-dom';

const FeaturedJob = () => {
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
        <div className='py-6 p-0 mt-20'>
            <h2 className='pb-20 text-center text-3xl font-bold'><span className='text-primary'>Featured </span> Jobs Circulars</h2>
            <div className='grid grid-cols-4 gap-10 mx-20'>
                    {
                        data.map(data => 
                             <div  className='p-10 border-gray-100 border-[1px] hover:shadow-lg rounded-lg transition-all'>
                           <div className='flex gap-4'>
                            <div className='text-3xl text-pink-400 '>
                                {data.icon} 

                            </div>
                            <div className='text-[16px]'>
                            <h2 className=' font-bold mb-1'>Microsoft</h2>
                            <p className='text-[14px]'>{data.para}</p>
                            </div>
                        </div>
                        
                        <div className='mt-4 text-gray-500'>
                            <h2 className='text-[18px] font-bold mb-1 text-primary'>Visual Designer</h2>
                            <p className='text-[14px]'>Full Time</p>
                            <p className='text-[14px] mt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            <div className='mt-10 flex justify-between items-center'>
                            <p ><span className='text-[16px] text-black font-semibold'>$2500</span><sub>/month</sub></p>
                            <Link to='/login' className='text-primary hover:bg-primary px-4 py-2 rounded hover:text-white transition-all'>Apply Now</Link>
                            </div>
                            </div>
                           </div>
                            )
                    }
            </div>
        </div>
    )
};

export default FeaturedJob;