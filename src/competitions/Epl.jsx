import React from 'react'
import epl from '../resources/logos/epl.svg'
import Recentmatches from '../components/Recentmatches'
import rightarrow from '../resources/rightarrow.svg'

import Pointstabletr from '../components/Pointstabletr'

const Epl = () => {
  return (
    <>
    <div className='text-white flex items-center p-14 gap-10 font-poppins'>
        <img src={epl} alt="" className='w-[7rem]'/>
        <h1 className='text-[3rem] font-bold'>Premier League</h1>
    </div>
    <div className='text-white px-14 font-poppins'>
        <h1 className='text-[2.3rem] font-bold'>Recent Matches</h1>
        
        <div className='flex gap-28 border border-white rounded-[15px] px-5'>
            <Recentmatches/>
            <Recentmatches/>
            <Recentmatches/>
            <Recentmatches/>
            <div className='flex'>
              <img src={rightarrow} alt=""/>
            </div>
        </div>
    </div>
    <div className='text-white px-14 mt-16 mb-40 font-poppins'>
      <h1 className='text-[2.3rem] font-bold mb-5'>Points Table</h1>
        <table className='table-auto'>
          <thead>
            <tr >
              <th className='px-5'></th>
              <th className='px-5'></th>
              <th className='px-5'>Club</th>
              <th className='px-5'>MP</th>
              <th className='px-5'>W</th>
              <th className='px-5'>D</th>
              <th className='px-5'>L</th>
              <th className='px-5'>GF</th>
              <th className='px-5'>GA</th>
              <th className='px-5'>GD</th>
              <th className='px-5'>Pts</th>
              <th className='px-5'>Streak</th>
            </tr>
          </thead>
          <tbody>
            <Pointstabletr/>
            <Pointstabletr/>
            <Pointstabletr/>
            <Pointstabletr/>
            <Pointstabletr/>
            <Pointstabletr/>
            <Pointstabletr/>
            <Pointstabletr/>
            <Pointstabletr/>
            <Pointstabletr/>
            <Pointstabletr/>
            <Pointstabletr/>
          </tbody>
        </table>
    </div>
    </>
  )
}

export default Epl