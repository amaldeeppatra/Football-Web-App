import React from 'react'
import ronaldo from '../resources/ronaldo.jpg'
import { Link } from 'react-router-dom'

const Card = () => {
  return (
    // <div className='relative text-center'>
    //   <img className='opacity-70 z-10 rounded-[30px]' src={ronaldo} alt="" />
    //   <div className='w-86 absolute bottom-5 left-0 mt-40'>
    //     <h2 className='text-white text-lg font-semibold z-20 text-justify px-5 py-[-10px]'><Link to='./news'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Link></h2>
    //   </div>
    // </div>
    <div className='relative text-center'>
      <img className='opacity-70 z-10 rounded-[30px] w-full' src="https://res.cloudinary.com/dxj6xhcpe/image/upload/v1724408851/ronaldo_xevggd.jpg" alt="" />
      <div className='w-full absolute bottom-5 left-0'>
        <h2 className='text-white text-lg z-20 font-semibold text-justify px-5 cursor-pointer'>
          <Link to='./news'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Link>
        </h2>
      </div>
    </div>
  )
}

export default Card