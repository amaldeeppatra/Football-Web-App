import React from 'react'
import ronaldo from '../resources/ronaldo.jpg'

const Cardnews = () => {
  return (
    <div className='mt-7 bg-gray-600 p-[1.1rem] rounded-[20px] flex flex-col items-center font-poppins'>
      <img className='h-64 rounded-[35px] ' src={ronaldo} alt="" />
      <div className='w-48'>
        <h2 className='text-white text-[1.1rem] font-semibold text-justify cursor-pointer'>Cristiano Ronaldo main player for portugal.</h2>
      </div>
    </div>
  )
}

export default Cardnews