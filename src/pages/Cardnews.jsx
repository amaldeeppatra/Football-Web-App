import React from 'react'
import ronaldo from '../resources/ronaldo.jpg'

const Cardnews = () => {
  return (
    <div className='mt-10'>
      <img className=' h-72 w-96 opacity-70 z-10' src={ronaldo} alt="" />
      <div className='w-30'>
        <h2 className='text-white text-lg font-semibold z-20 text-justify'>Lorem ipsum dolor sit amet consectetur adipisic</h2>
      </div>
    </div>
  )
}

export default Cardnews