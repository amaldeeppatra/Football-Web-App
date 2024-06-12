import React from 'react'
import ronaldo from '../resources/ronaldo.jpg'
import Cardnews from './Cardnews'
const News = () => {
  return (
    <>
      <div className='bg-black-400'>
       <div className='text-white bg-gray-950 ml-11'>
        <div className='flex mt-20 font-bold text-5xl'>
          TRENDING NEWS
        </div>
        <div className='flex'>
          <img className='opacity-70 z-10' src={ronaldo} alt="" />
          <div className='mt-32 text-4xl text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic voluptate nihil omnis minima id pariatur. </div>
        </div>
        <div className='flex'>
           <Cardnews/>
           <Cardnews/>
           <Cardnews/>
        </div>
       </div>
      </div>
    </>
  )
}

export default News