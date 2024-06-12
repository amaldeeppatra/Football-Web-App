import React from 'react'
import arsenal from '../resources/team-logos/arsenal.svg'
import everton from '../resources/team-logos/everton.svg'
import mancity from '../resources/team-logos/man city.svg'
import westham from '../resources/team-logos/west ham.svg'

const Recentmatches = () => {
  return (
    <>
    <div className='flex items-center gap-10'>
        <div className='py-3'>
            <div className='flex items-center gap-10 p-2'>
                <img src={arsenal} alt="" />
                <p className='text-[2rem]'>2</p>
            </div>
            <div className='flex items-center gap-10 p-2'>
                <img src={everton} alt="" />
                <p className='text-[2rem]'>1</p>
            </div>
        </div>
        <div className='text-center text-xl'>
            <p>FT</p>
            <p>19 May</p>
        </div>
    </div>
    </>
  )
}

export default Recentmatches