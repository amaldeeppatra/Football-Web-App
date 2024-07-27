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
        <div className='text-white font-poppins text-[2.69rem] p-14'>
            <h1 className='mb-3'>Leagues</h1>
            <div className='flex justify-between'>
                <Link to="./epl"><img src={epl} alt="" /></Link>
                <Link to="./laliga"><img src={laliga} alt="" /></Link>
                <Link><img src={bundesliga} alt="" /></Link>
                <Link><img src={seriea} alt="" /></Link>
            </div>
        </div>
        <div className='text-white font-poppins text-[2.69rem] p-14'>
            <h1 className='mb-3'>UEFA Leagues</h1>
            <div className='flex gap-32'>
                <Link><img src={ucl} alt="" /></Link>
                <Link><img src={uel} alt="" /></Link>
            </div>
        </div>
        <div className='text-white font-poppins text-[2.69rem] p-14 mb-12'>
            <h1 className='mb-3'>International Tournaments</h1>
            <div className='flex gap-32'>
                <Link><img src={euro2024} alt="" /></Link>
                <Link><img src={copaamerica2024} alt="" /></Link>
            </div>
        </div>
    </>
  )
}

export default Competitions