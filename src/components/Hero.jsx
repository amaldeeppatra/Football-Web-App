import React from 'react'
import messi from '../resources/messi-smallwidth.svg'
import predictButton from '../resources/predict-button.svg'

const Hero = () => {
  return (
    <>
    <div className='bg-gradient-to-b from-[#2A2A2A] to-black  bigLaptop:h-[100vh] smallLaptop:h-[100vh] phone:h-[50vh] flex bigLaptop:flex-row smallLaptop:flex-row'>
      <div>
        <svg viewBox="0 0 400 50" className="bigLaptop:w-full bigLaptop:h-full smallLaptop:w-full smallLaptop:h-full left phone:h-auto">
            <text x="20" y="-10" textAnchor="start" className="font-bold bigLaptop:text-[40px] smallLaptop:text-[35px] italic fill-none stroke-[#4559A4] stroke-[2px] stroke-linejoin-round ">
                PREDICT YOUR
            </text>
        </svg>
      </div>
      <div>
        <img src={messi} alt="" className='absolute bigLaptop:left-64 bigLaptop:-top-10 smallLaptop:-top-10 smallLaptop:left-[10rem] phone:top-24' />
      </div>
        
      <div>
        <svg viewBox="0 0 400 50" className="bigLaptop:w-full bigLaptop:h-full smallLaptop:w-full smallLaptop:h-full left phone:h-auto">
        <text x="380" y="50" textAnchor="end" className="font-bold bigLaptop:text-[40px] smallLaptop:text-[35px] italic fill-none stroke-[#C73333] stroke-[2px] stroke-linejoin-round">
            TEAM POINTS
        </text>
        </svg>
        <button className='absolute bigLaptop:right-52 bigLaptop:top-[30.5rem] smallLaptop:right-[9rem] smallLaptop:top-[32rem] bigLaptop:size-48 smallLaptop:size-36 phone:size-20 phone:top-[25rem] bigLaptop:ml-0 smallLaptop:nl-0 phone:ml-5'><img src={predictButton} alt="" /></button>
      </div>
    </div>
    </>
  )
}

export default Hero