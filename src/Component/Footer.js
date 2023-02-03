import React from 'react';
import icon from '../assets/icon.png';

const Footer = () => {
  return (
    <footer className="footer p-10 bg-[#f0f0f2] text-base-content pb-20">
  <div className='md:ml-36'>
    <img className='w-1/4 ' src={icon} alt="" />
    <p className='text-lg'> <span className='text-xl font-bold'>Leadzen</span><br/>User Information Management System</p>
    <p>Copyright © 2023 - All right reserved</p>
  </div> 
  <div>
    <span className="footer-title">Services</span> 
    <a href='/' className="link link-hover">Branding</a> 
    <a href='/' className="link link-hover">Design</a> 
    <a href='/' className="link link-hover">Marketing</a> 
    <a href='/' className="link link-hover">Advertisement</a>
  </div> 
  <div>
    <span className="footer-title">Company</span> 
    <a href='/' className="link link-hover">About us</a> 
    <a href='/' className="link link-hover">Contact</a> 
    <a href='/' className="link link-hover">Jobs</a> 
    <a href='/' className="link link-hover">Press kit</a>
  </div> 
  <div>
    <span className="footer-title">Legal</span> 
    <a href='/' className="link link-hover">Terms of use</a> 
    <a href='/' className="link link-hover">Privacy policy</a> 
    <a href='/' className="link link-hover">Cookie policy</a>
  </div>
</footer>
  );
};

export default Footer;