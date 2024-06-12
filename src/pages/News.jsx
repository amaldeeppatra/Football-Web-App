import React from 'react'
import valverde from '../resources/valverde.jpg'
import Cardnews from './Cardnews'
import Footer from '../components/Footer'
const News = () => {
  return (
    <>
      <div className='bg-black-400'>
       <div className='text-white bg-slate-900 ml-11 mr-11'>
        <div className='text-white bg-gray-800 '>
        <div className='flex mt-20 font-bold text-5xl p-10'>
          TRENDING NEWS
        </div>
        <div className='flex'>
          <img className='opacity-70 z-10 rounded-[30px] w-[650px] p-8' src={valverde} alt="" />
          <div className='mt-32 text-3xl text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic voluptate nihil omnis minima id pariatur. </div>
        </div>
        </div>
        <div className=' mt-10 flex'>
           <Cardnews/>
           <Cardnews/>
           <Cardnews/>
           <Cardnews/>
        </div>
        <div className=' mt-10 flex'>
           <Cardnews/>
           <Cardnews/>
           <Cardnews/>
           <Cardnews/>
        </div>
        <div className=' mt-10 flex'>
           <Cardnews/>
           <Cardnews/>
           <Cardnews/>
           <Cardnews/>
        </div>
        <div className=' mt-10 flex'>
           <Cardnews/>
           <Cardnews/>
           <Cardnews/>
           <Cardnews/>
        </div>
       </div>
      </div>
      <div className='mt-10'>
        <Footer/>
      </div>
    </>
  )
}

export default News