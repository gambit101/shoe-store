import React from 'react';
import { Link } from 'react-router-dom';

const Shoe = ({ job }) => {
    // console.log(job);
    return (
        <div className='mx-auto mt-14 p-4 rounded'>
            <img className='rounded w-96 h-56' src={job.image} alt="" />
            <h2 className='text-xl font-bold mt-4'>{job.title}</h2>
            <p className='text-gray-600 mt-2'>{job.company_name}</p>
           
            <div className='flex'>
                <p className='text-gray-600 mt-2'>
                    {job.location}
                </p>
                <p className='text-gray-600 mt-2 ml-3' >
                    {job.salary}
                </p>
            </div>
            <Link to={`/jobDetails/${job.id}`}>

            <button className="relative border-2 border-lime-600 bg-transparent py-2.5 px-5 font-medium uppercase text-gray-800 transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-lime-600 before:transition-transform before:duration-300 before:content-[''] hover:text-white before:hover:scale-x-100 rounded">button one</button>
            </Link>

        </div>
    );
};

export default Shoe;