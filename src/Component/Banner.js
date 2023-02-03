import React from 'react';
import img from '../assets/Designation.png'


const Banner = () => {
  return (
    <div className='md:flex justify-center bg-[#f0f0f2] md:p-32 p-6'>
      <div>
        <h1 className='text-6xl font-bold mb-8 w-10/12'>User <span className='text-[#fbbf24]'>Information</span>  Management System</h1>

        <p className='text-xl w-10/12'>Websites collect user information such as name, email, address, and phone number through forms. This data is used for account creation, purchases and marketing.</p>

        <div className='flex mt-10 md:mb-0 mb-8 '>
          <button className='custom-button mr-5'>Get Started</button>
          <button className='custom-button'>Learn More</button>
        </div>
      </div>
      <img src={img} alt="" />
    </div>
  );
};

export default Banner;