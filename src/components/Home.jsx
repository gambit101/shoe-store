import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Category from './Category';
import Shoe from './Shoe';
import { FaCarSide, FaClock } from "react-icons/fa";
import { FaCommentDollar } from "react-icons/fa";
import Typewriter from 'typewriter-effect';



const Home = () => {
    const [jobs, setJobs] = useState([])

    const [categories] = useLoaderData();



    useEffect(() => {
        fetch('features.json')
            .then(res => res.json())
            .then(data => setJobs(data))
    }, [])




    // console.log(jobs);


    return (
        <div>
            <div className="w-full h-[600px] bg-banner-bg bg-center">
                <div className="w-full bg-black opacity-80 text-white">
                    {/* <Navbar /> */}
                    <div className="h-[600px] max-w-screen-2xl mx-auto flex flex-col justify-center items-center">
                        <h1 className="text-2xl md:text-5xl uppercase font-bold">
                            <Typewriter
                                options={{
                                    strings: ['Welcome To Our Store!!'],
                                    autoStart: true,
                                    loop: true,
                                }}
                            />
                        </h1>
                        <p className="text-base md:text-lg w-3/4 text-center font-semibold mt-6 italic">
                            {/* {text} <Cursor cursorBlinking cursorStyle="|" cursorColor="#ffaa17" /> */}
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis deleniti iste quisquam? Nisi dignissimos cupiditate, omnis corporis eveniet pariatur veniam.
                        </p>
                        <button className=" mt-10 rounded relative -top-1 -left-1 bg-lime-900 py-2.5 px-5 font-medium uppercase text-white transition-all before:absolute before:top-1 before:left-1 before:-z-[1] before:h-full before:w-full before:border-2 before:border-gray-700 before:transition-all before:content-[''] hover:top-0 hover:left-0 before:hover:top-0 before:hover:left-0">Our FaceBook</button>
                    </div>
                </div>
            </div>


            {/* category section  */}

            <div className='mt-10'>
                <h2 className='text-center text-4xl font-bold text-lime-600'>
                    Our Features
                </h2>
                <p className='text-gray-600 mt-4 text-center italic'>
                    Serving our customer is our first priority
                </p>



                <div className='grid lg:grid-cols-3 gap-10 mx-20 mt-20'>

                    <div className='flex bg-emerald-200 p-5 rounded-lg'>
                        <FaCarSide className='text-7xl' />

                        <div className='ml-5'>
                            <h1 className='font-bold text-xl'>Home Delivery</h1>
                            <p className=' text-sm mt-2'>Full country delivery</p>
                        </div>
                    </div>
                    <div className='flex bg-orange-200 p-4 rounded-lg'>
                        <img src="https://htmldemo.net/juan/juan/assets/img/icon/policy-2.png" alt="" />

                        <div className='ml-5'>
                            <h1 className='font-bold text-xl'>ONLINE SUPPORT</h1>
                            <p className='text-sm mt-2'>Online support 24 hours a day</p>
                        </div>
                    </div>
                    <div className='flex bg-lime-300 p-4 rounded-lg'>
                        <FaCommentDollar className='text-7xl' />

                        <div className='ml-5'>
                            <h1 className='font-bold text-xl'>MONEY RETURN</h1>
                            <p className=' text-sm mt-2'>Back guarantee under 5 days</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* featured jobs  */}

            <div className='mt-20'>
                <h2 className='text-center text-4xl font-bold text-lime-600'>
                    Our Products
                </h2>
                <p className='text-gray-600 mt-4 text-center italic'>
                    See all our product details
                </p>
            </div>

            {/* main features */}



            {/* map  */}

            <div className='grid grid-cols-1 md:grid-cols-3 md:mx-10'>
                {
                    jobs.map(job => <Shoe key={job.id} job={job}></Shoe>)
                }
            </div>

        </div>
    );
};

export default Home;