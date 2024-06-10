import React from 'react'
import messi from '../resources/messi-smallwidth.svg'

const Hero = () => {
  return (
    <>
    <div className='bg-gradient-to-b from-[#2A2A2A] to-black h-[100vh] flex'>
        <svg viewBox="0 0 400 50" className="w-full h-full left">
            <text x="20" y="-10" textAnchor="start" className="font-bold text-[40px] italic fill-none stroke-[#4559A4] stroke-[2px] stroke-linejoin-round ">
                PREDICT YOUR
            </text>
        </svg>

        <img src={messi} alt="" className='absolute left-64 -top-10' />
        
        <svg viewBox="0 0 400 50" className="w-full h-full">
        <text x="380" y="50" textAnchor="end" className="font-bold text-[40px] italic fill-none stroke-[#C73333] stroke-[2px] stroke-linejoin-round">
            TEAM POINTS
        </text>
        </svg>
    </div>
    </>
  )
}

export default Hero