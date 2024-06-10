// import React from 'react'
// import messi from '../resources/messi-smallwidth.svg'

// const Hero = () => {
//   return (
//     <>
//     <div className='bg-gradient-to-b from-[#2A2A2A] to-black h-[100vh] flex'>
//         <svg viewBox="0 0 400 50" className="w-full h-full left">
//             <text x="20" y="-10" textAnchor="start" className="font-bold text-[40px] italic fill-none stroke-[#4559A4] stroke-[2px] stroke-linejoin-round ">
//                 PREDICT YOUR
//             </text>
//         </svg>

//         <img src={messi} alt="" className='absolute left-64 -top-10' />
        
//         <svg viewBox="0 0 400 50" className="w-full h-full">
//         <text x="380" y="50" textAnchor="end" className="font-bold text-[40px] italic fill-none stroke-[#C73333] stroke-[2px] stroke-linejoin-round">
//             TEAM POINTS
//         </text>
//         </svg>
//     </div>
//     </>
//   )
// }

// export default Hero




import React from 'react'
import messi from '../resources/messi-smallwidth.svg'

const Hero = () => {
  return (
    <>
      <div className='bg-gradient-to-b from-[#2A2A2A] to-black h-[100vh] flex flex-col md:flex-row items-center justify-center relative'>
        <svg viewBox="0 0 400 50" className="w-full md:w-auto h-auto">
          <text x="20" y="40" textAnchor="start" className="font-bold text-[20px] md:text-[40px] lg:text-[40px] italic fill-none stroke-[#4559A4] stroke-[2px] stroke-linejoin-round">
            PREDICT YOUR
          </text>
        </svg>

        <img src={messi} alt="" className='absolute md:relative md:left-0 md:top-0 left-64 -top-10 w-auto md:w-1/4 lg:w-1/3 xl:w-1/2' />
        
        <svg viewBox="0 0 400 50" className="w-full md:w-auto h-auto">
          <text x="380" y="40" textAnchor="end" className="font-bold text-[20px] md:text-[40px] lg:text-[40px] italic fill-none stroke-[#C73333] stroke-[2px] stroke-linejoin-round">
            TEAM POINTS
          </text>
        </svg>
      </div>
    </>
  )
}

export default Hero
