import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='flex justify-evenly my-2'>
            <Link to='/'>
                <div className='text-3xl font-bold tracking-wide text-gray-800'>
                    logo
                </div>
            </Link>
            <ul className='flex gap-8'>
                {/* <Link className='mt-2 hidden space-x-8 lg:flex font-bold' to='/'>Home</Link> */}
                {/* <Link className='mt-2 hidden space-x-8 lg:flex font-bold' to='/appliedJobs'>Applied Jobs</Link> */}
            </ul>
            <div className="relative inline-block">
                <button className="relative -top-1 -left-1 bg-lime-600 py-2.5 px-5 font-medium uppercase text-white transition-all before:absolute before:top-1 before:left-1 before:-z-[1] before:h-full before:w-full before:border-2 before:border-lime-700 before:transition-all before:content-[''] hover:top-0 hover:left-0 before:hover:top-0 before:hover:left-0">
                    All Products

                </button>
            </div>
        </div>
    );
};

export default Header;