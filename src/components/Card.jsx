import React from 'react'
import mbappe from '../resources/mbappe.jpg'

const Card = () => {
  return (
    <div className='relative text-center'>
      <img className='opacity-70 z-10 rounded-[30px]' src={mbappe} alt="" />
      <div className='w-86 absolute bottom-5 left-0 mt-40'>
        <h2 className='text-white text-lg z-20 font-semibold text-justify px-5 py-[-10px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h2>
      </div>
    </div>
  )
}

export default Card