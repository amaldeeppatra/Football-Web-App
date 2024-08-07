import React from 'react'
import mbappe from '../resources/mbappe.jpg'
import Card2 from './Card2'
import Card3 from './Card3'
import { Link } from 'react-router-dom'

const Card = () => {
  return (
    <>
    <div className='bg-black py-20'>
      <h2 className='text-white mt-5 px-20 py-10 text-[2.3rem] font-poppins font-semibold'>Top News</h2>
      <div className='flex justify-between px-16 gap-10'>
        <div className='relative text-center'>
          <img className='opacity-70 z-10 rounded-[30px]' src={mbappe} alt="" />
          <div className='w-86 absolute bottom-5 left-0 mt-40'>
            <h2 className='text-white text-lg z-20 font-semibold text-justify px-5 py-[-10px] cursor-pointer'><Link to='./news'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Link></h2>
          </div>
        </div>
        <Card2/>
        <Card3/>
      </div>
    </div>
    </>
  )
}

export default Card