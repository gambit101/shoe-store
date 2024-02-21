import React from 'react';
import { FaFacebookSquare, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-8 mt-20 px-20">
      <div className="container mx-auto md:flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">Store Name</h1>
          <p className="mt-2">A brief description of your app or store.</p>
          <p className="mt-2">Email: info@email.com.</p>
          <p className="mt-2">Phone: 01710000</p>
        </div>
        <div className="flex space-x-6 mt-10">
          <a href="#" className="hover:text-gray-400 transition duration-300"><FaFacebookSquare className='text-4xl' /></a>
          <a href="#" className="hover:text-gray-400 transition duration-300"><FaWhatsapp className='text-4xl'/></a>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;