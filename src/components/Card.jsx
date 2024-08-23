import React from 'react';
import Card2 from './Card2';
import Card3 from './Card3';
import { Link } from 'react-router-dom';

const Card = () => {
  return (
    <div className='bg-black py-20'>
      <h2 className='text-white mt-5 px-5 md:px-20 py-10 text-[2.3rem] font-poppins font-semibold'>Top News</h2>
      <div className='flex flex-col lg:flex-row justify-between px-5 md:px-16 gap-10'>
        <div className='relative text-center'>
          <img className='opacity-70 z-10 rounded-[30px] w-full' src="https://res.cloudinary.com/dxj6xhcpe/image/upload/v1724408851/mbappe_ogoj2f.jpg" alt="" />
          <div className='w-full absolute bottom-5 left-0'>
            <h2 className='text-white text-lg z-20 font-semibold text-justify px-5 cursor-pointer'>
              <Link to='./news'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Link>
            </h2>
          </div>
        </div>
        <div className='mt-10 lg:mt-0'>
          <Card2 />
        </div>
        <div className='mt-10 lg:mt-0'>
          <Card3 />
        </div>
      </div>
    </div>
  );
}

export default Card;