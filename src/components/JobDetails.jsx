import React, { useEffect, useState } from 'react';
import { Link, useLoaderData, useNavigation, useParams } from 'react-router-dom';
import { addToDb } from '../utils/fakeDB';


const JobDetails = () => {

    const { id } = useParams();

    const jobDetails = useLoaderData();


    const detailsData = jobDetails.find(dt => dt.id == id)

    console.log(id);


    const handleAddToCart = id => {

        addToDb(id)
    }


    return (
        <div>
            {/* <h2 className='text-4xl font-bold text-center text-cyan-600'>Job Details</h2>
            <div className='grid grid-cols-2 gap-4 mt-12'>

                <div className='ml-12'>
                    <h2><span className='font-bold'>Job Description:</span> {detailsData.description}</h2>
                    <h2 className='mt-4'><span className='font-bold'>Job Responsibility:</span> {detailsData.responsibilities}</h2>
                    <h2 className=' mt-4'><span className='font-bold'>Experience:</span>{detailsData.experience}</h2>
                </div>
                <div className='w-72 mx-auto bg-gray-200 p-6 rounded'>
                    <h2 className='font-bold'>Job Description</h2>
                    <hr />
                    <p className='mt-2'><span className='font-bold'>Salary:</span> {detailsData.salary}</p>
                    <p className='mt-2'><span className='font-bold'>Job Title:</span> {detailsData.title}</p>
                    <h2 className='mt-2 font-bold'>Contact Information</h2>
                    <hr className='mt-2 bg-black' />
                    <p className='mt-2'><span className='font-bold'>Phone:</span> {detailsData.contact.phone}</p>
                    <p className='mt-2'><span className='font-bold'>Email:</span> {detailsData.contact.email}</p>
                    <p className='mt-2'><span className='font-bold'>Address:</span>  Dhanmondi 32, Sukrabad
                        Dhaka, Bangladesh</p>
                    <Link to='/appliedJobs'>
                        <div className='mt-4'>
                            <button onClick={() => handleAddToCart(detailsData.id)} className='btn-primary'>Apply Now</button>
                        </div>
                    </Link>
                </div>

            </div> */}

            <div className='flex flex-col justify-between lg:flex-row gap-16 lg:items-center mx-20 mt-40'>
                <div className='flex flex-col gap-6 lg:w-2/4'>
                    <img src={detailsData.image} alt="" className='w-full aspect-square object-cover rounded-xl' />

                </div>
                {/* ABOUT */}
                <div className='flex flex-col gap-4 lg:w-2/4'>
                    <div>
                        <span className=' text-green-500 font-semibold'>Author: {detailsData.title}</span>
                        <h1 className='text-3xl font-bold text-green-500'>Title: {detailsData.price}</h1>
                    </div>
                    <p className='text-green-400 '>
                        Description: {detailsData.bookDescription}
                    </p>
                    <h6 className='text-2xl font-semibold text-green-500'>$ 199.00</h6>
                    <h6 className='text-2xl font-semibold text-green-500'>Category: {detailsData.description}</h6>
                    
                    <Link to='/' className='flex flex-row items-center gap-12'>
                        <button className='bg-green-800 text-white font-semibold py-3 px-16 rounded-xl h-full'>Get Now</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default JobDetails;