import React from 'react'
import { Link } from 'react-router-dom'
import epl from '../resources/logos/epl.svg'
import laliga from '../resources/logos/laliga.svg'
import bundesliga from '../resources/logos/bundesliga.svg'
import seriea from '../resources/logos/serie a.svg'
import ucl from '../resources/logos/ucl.svg'
import uel from '../resources/logos/uel.svg'
import euro2024 from '../resources/logos/euro2024.svg'
import copaamerica2024 from '../resources/logos/copa america2024.svg'

const Competitions = () => {
  return (
    <>
      <div className='text-white font-poppins py-14 px-8 sm:px-14'>
        {/* Leagues Section */}
        <div className="bg-gradient-to-r from-[#2c3035] to-[#01161a] p-8 rounded-xl shadow-lg mb-10">
          <h1 className='text-[2.69rem] mb-6'>Leagues</h1>
          <div className='flex flex-wrap justify-between gap-10 sm:gap-20'>
            <Link to="./epl" className='flex items-center hover:scale-105 transition-transform duration-300'><img src={epl} alt="EPL" className='w-[6rem] sm:w-[14rem] rounded-lg' /></Link>
            <Link to="./laliga" className='flex items-center hover:scale-105 transition-transform duration-300'><img src={laliga} alt="La Liga" className='w-[6rem] sm:w-[14rem] rounded-lg' /></Link>
            <Link className='flex items-center hover:scale-105 transition-transform duration-300'><img src={bundesliga} alt="Bundesliga" className='w-[6rem] sm:w-[14rem] rounded-lg' /></Link>
            <Link className='flex items-center hover:scale-105 transition-transform duration-300'><img src={seriea} alt="Serie A" className='w-[6rem] sm:w-[14rem] rounded-lg' /></Link>
          </div>
        </div>

        {/* UEFA Leagues Section */}
        <div className="bg-gradient-to-r from-[#414145] to-[#06003f] p-8 rounded-xl shadow-lg mb-10">
          <h1 className='text-[2.69rem] mb-6'>UEFA Leagues</h1>
          <div className='flex flex-wrap gap-10 sm:gap-20'>
            <Link className='flex items-center hover:scale-105 transition-transform duration-300'><img src={ucl} alt="UCL" className='w-[6rem] sm:w-[14rem] rounded-lg' /></Link>
            <Link className='flex items-center hover:scale-105 transition-transform duration-300'><img src={uel} alt="UEL" className='w-[6rem] sm:w-[14rem] rounded-lg' /></Link>
          </div>
        </div>

        {/* International Tournaments Section */}
        <div className="bg-gradient-to-r from-[#434a4f] to-[#003d52] p-8 rounded-xl shadow-lg">
          <h1 className='text-[2.69rem] mb-6'>International Tournaments</h1>
          <div className='flex flex-wrap gap-10 sm:gap-20'>
            <Link className='flex items-center hover:scale-105 transition-transform duration-300'><img src={euro2024} alt="Euro 2024" className='w-[6rem] sm:w-[14rem] rounded-lg' /></Link>
            <Link className='flex items-center hover:scale-105 transition-transform duration-300'><img src={copaamerica2024} alt="Copa America 2024" className='w-[6rem] sm:w-[14rem] rounded-lg' /></Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Competitions