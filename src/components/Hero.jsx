import React from 'react'
import messi from '../resources/messi-smallwidth.svg'
import predictButton from '../resources/predict-button.svg'

const Hero = () => {
  return (
    <>
    <div className='bg-gradient-to-b from-[#2A2A2A] to-black h-[100vh] flex'>
      <div>
        <svg viewBox="0 0 400 50" className="w-full h-full left">
            <text x="20" y="-10" textAnchor="start" className="font-bold bigLaptop:text-[40px] smallLaptop:text-[35px] italic fill-none stroke-[#4559A4] stroke-[2px] stroke-linejoin-round ">
                PREDICT YOUR
            </text>
        </svg>
      </div>
      <div>
        <img src={messi} alt="" className='absolute bigLaptop:left-64 -top-10 smallLaptop:left-[10rem]' />
      </div>
        
      <div>
        <svg viewBox="0 0 400 50" className="w-full h-full">
        <text x="380" y="50" textAnchor="end" className="font-bold bigLaptop:text-[40px] smallLaptop:text-[35px] italic fill-none stroke-[#C73333] stroke-[2px] stroke-linejoin-round">
            TEAM POINTS
        </text>
        </svg>
        <button className='absolute bigLaptop:right-52 bigLaptop:top-[32.5rem] smallLaptop:right-[9rem] smallLaptop:top-[30rem]'><img src={predictButton} alt="" /></button>
      </div>
    </div>
    </>
  )
}

export default Hero