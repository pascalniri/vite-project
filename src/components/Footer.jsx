import React from 'react';
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { TiSocialInstagramCircular } from "react-icons/ti";
import { TiSocialYoutubeCircular } from "react-icons/ti";

const Footer = () => {
  return (
    <div className='flex justify-between px-32 py-16 bg-white'>
      <div className="w-1/5">
        <h1 className='my-5 text-2xl font-bold'>LOGO</h1>
        <p className="mb-4 text-gray-500">Best information about the company
           goes here but now lorem ipsum is</p>
           <div className='flex gap-x-4'>
              <FaFacebook className="text-gray-500 text-4xl hover:text-gray-700 cursor-pointer" />
              <AiFillTwitterCircle className="text-gray-500 text-4xl hover:text-gray-700 cursor-pointer" />
              <TiSocialLinkedinCircular className="text-gray-500 text-4xl hover:text-gray-700 cursor-pointer" />
              <TiSocialInstagramCircular className="text-gray-500 text-4xl hover:text-gray-700 cursor-pointer" />
              <TiSocialYoutubeCircular className="text-gray-500 text-4xl hover:text-gray-700 cursor-pointer" />
           </div>
      </div>
      <div className="w-1/5">
        <h4 className='my-5 font-semibold text-lg'>About</h4>
        <p className="mb-2 text-gray-500">About Us</p>
        <p className="mb-2 text-gray-500">Find Store</p>
        <p className="mb-2 text-gray-500">Categories</p>
        <p className="mb-2 text-gray-500">Blogs</p>
      </div>
      <div className="w-1/5">
        <h4 className='my-5 font-semibold text-lg'>Partnership</h4>
        <p className="mb-2 text-gray-500">About Us</p>
        <p className="mb-2 text-gray-500">Find Store</p>
        <p className="mb-2 text-gray-500">Categories</p>
        <p className="mb-2 text-gray-500">Blogs</p>
      </div>
      <div className="w-1/5">
        <h4 className='my-5 font-semibold text-lg'>Information</h4>
        <p className="mb-2 text-gray-500">Help Center</p>
        <p className="mb-2 text-gray-500">Money Refund</p>
        <p className="mb-2 text-gray-500">Shipping</p>
        <p className="mb-2 text-gray-500">Contact Us</p>
      </div>
      <div className="w-1/5">
        <h4 className='my-5 font-semibold text-lg'>For Users</h4>
        <p className="mb-2 text-gray-500">Login</p>
        <p className="mb-2 text-gray-500">Register</p>
        <p className="mb-2 text-gray-500">Setting</p>
        <p className="mb-2 text-gray-500">My Orders</p>
      </div>
      <div className="w-1/5">
        <h4 className='my-5 font-semibold text-lg'>Get app</h4>
      </div>
    </div>
  );
}

export default Footer;
