  import React, { useState } from 'react';
  import AOS from 'aos';
  import 'aos/dist/aos.css';
  import { useEffect } from 'react';
  import './UserCard.css';
  
  const UserCard = ({user}) => {

const {username, name, address, company, email, phone, website} = user;

const [show, setShow]= useState(false)

useEffect(() => {
  AOS.init();
}, [])


    return (
      <div data-aos="flip-down" data-aos-duration="1500" className="bg-white m-6 py-12 text-center shadow-xl rounded-lg">
      
      <div className="grid md:grid-cols-5 grid-cols-1 gap-10 ">
        <h1 className='font-semibold text-lg'>Hello {username}</h1>
        <div>
          <h1 className='font-bold'>CONTACT</h1>
          <p>{name}</p>
        </div>

        <div>
          <h1 className='font-bold'>CITY</h1>
          <p>{address.city}</p>
        </div>      

        <div>
          <h1 className='font-bold'>STATE</h1>
          <p>{address.street}</p>
        </div>
        
        <button className='custom-button mx-12' onClick={() =>setShow(!show)}>{show === true? 'Hide Details' : 'View Details'}</button>
      </div>






    {show &&  <div className='mx-8 md:mx-0 mt-10'>
        <h1 className='bg-[#c3ccd8] w-full h-[1.5px] my-6'> </h1> 
        <div className='text-left md:mx-32'>
          <h1 className='text-2xl font-semibold my-8'>Description</h1>
          <h1>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero quasi voluptas expedita consequuntur obcaecati nulla distinctio, autem soluta, sint non voluptatem rerum quas culpa veritatis assumenda quaerat. Voluptatum esse, expedita iure, rem animi alias molestiae voluptas deleniti quae amet corrupti.</h1>

          <h1 className='text-2xl font-semibold my-3'>Company</h1>
          <p><span className='font-bold'>Name: </span> {company.name}</p>
          <p><span className='font-bold'>Catch Phrase: </span> {company.catchPhrase}</p>
          <p><span className='font-bold'>BS: </span> {company.bs}</p>



          <div className='grid md:grid-cols-3 grid-cols-1 mt-6'>


          <div>
            <div data-aos="fade-up-right" data-aos-duration="1500" className='my-5'>
            <h1 className='text-lg font-semibold'>Contact Person</h1>
              <p>{name}</p>
            </div>
            <div data-aos="fade-up-right" data-aos-duration="1500" className='my-5'>
            <h1 className='text-lg font-semibold'>Email</h1>
              <p>{email}</p>
            </div>
            <div data-aos="fade-up-right" data-aos-duration="1500" className='my-5'>
            <h1 className='text-lg font-semibold'>Phones</h1>
              <p>{phone}</p>
            </div>
            <div data-aos="fade-up-right" data-aos-duration="1500" className='my-5'>
            <h1 className='text-lg font-semibold'>Website</h1>
              <p>{website}</p>
            </div>
          </div>

          
          <div>
            <div data-aos="fade-up-left" data-aos-duration="1500" className='my-5'>
            <h1 className='text-lg font-semibold'>Street</h1>
              <p>{address.street}</p>
            </div>
            <div data-aos="fade-up-left" data-aos-duration="1500" className='my-5'>
            <h1 className='text-lg font-semibold'>Suite</h1>
              <p>{address.suite}</p>
            </div>
            <div data-aos="fade-up-left" data-aos-duration="1500" className='my-5'>
            <h1 className='text-lg font-semibold'>City</h1>
              <p>{address.city}</p>
            </div>
            <div data-aos="fade-up-left" data-aos-duration="1500" className='my-5'>
            <h1 className='text-lg font-semibold'>Zip Code</h1>
              <p>{address.zipcode}</p>
            </div>
          </div>
          </div>
        </div>
      </div>
      }


      </div>
    );
  };
  
  export default UserCard;