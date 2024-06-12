import React from 'react'
import ronaldo from '../resources/ronaldo.jpg'

const Cardnews = () => {
  return (
    <div className='mt-10 mr-11 bg-gray-600 w-80 rounded-[20px] py-3'>
      <img className='mt-2 ml-4 h-72 w-72 opacity-70 z-10 rounded-[30px]' src={ronaldo} alt="" />
      <div className='ml-4 w-72'>
        <h2 className='text-white text-lg font-semibold z-20 text-justify'>Lorem ipsum dolor sit amet consectetur adipisic</h2>
      </div>
    </div>
  )
}

export default Cardnews