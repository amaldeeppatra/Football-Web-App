import React from 'react'
import kimmich from '../resources/kimmich.jpg'
import { Link } from 'react-router-dom'

const Card = () => {
  return (
    <div className='relative text-center'>
      <img className='opacity-70 z-10 rounded-[30px]' src={kimmich} alt="" />
      <div className='w-86 absolute bottom-5 left-0 mt-40'>
        <h2 className='text-white text-lg font-semibold z-20 text-justify px-5 py-[-10px]'><Link to='./news'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Link></h2>
      </div>
    </div>
  )
}

export default Card