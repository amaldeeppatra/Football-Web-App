// import React from 'react'
// import { Link } from 'react-router-dom'
// import epl from '../resources/logos/epl.svg'
// import laliga from '../resources/logos/laliga.svg'
// import bundesliga from '../resources/logos/bundesliga.svg'
// import seriea from '../resources/logos/serie a.svg'
// import ucl from '../resources/logos/ucl.svg'
// import uel from '../resources/logos/uel.svg'
// import euro2024 from '../resources/logos/euro2024.svg'
// import copaamerica2024 from '../resources/logos/copa america2024.svg'

// const Competitions = () => {
//   return (
//     <>
//         <div className='text-white font-poppins text-[2.69rem] p-14'>
//             <h1 className='mb-3'>Leagues</h1>
//             <div className='flex justify-between'>
//                 <Link to="./epl"><img src={epl} alt="" /></Link>
//                 <Link to="./laliga"><img src={laliga} alt="" /></Link>
//                 <Link><img src={bundesliga} alt="" /></Link>
//                 <Link><img src={seriea} alt="" /></Link>
//             </div>
//         </div>
//         <div className='text-white font-poppins text-[2.69rem] p-14'>
//             <h1 className='mb-3'>UEFA Leagues</h1>
//             <div className='flex gap-32'>
//                 <Link><img src={ucl} alt="" /></Link>
//                 <Link><img src={uel} alt="" /></Link>
//             </div>
//         </div>
//         <div className='text-white font-poppins text-[2.69rem] p-14 mb-12'>
//             <h1 className='mb-3'>International Tournaments</h1>
//             <div className='flex gap-32'>
//                 <Link><img src={euro2024} alt="" /></Link>
//                 <Link><img src={copaamerica2024} alt="" /></Link>
//             </div>
//         </div>
//     </>
//   )
// }

// export default Competitions






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
      <div className='text-white font-poppins p-14'>
        <h1 className='text-[2.69rem] mb-3'>Leagues</h1>
        <div className='flex flex-wrap justify-between gap-6 sm:gap-12'>
          <Link to="./epl" className='flex items-center'><img src={epl} alt="EPL" className='w-[6rem] sm:w-[14rem]' /></Link>
          <Link to="./laliga" className='flex items-center'><img src={laliga} alt="La Liga" className='w-[6rem] sm:w-[14rem]' /></Link>
          <Link className='flex items-center'><img src={bundesliga} alt="Bundesliga" className='w-[6rem] sm:w-[14rem]' /></Link>
          <Link className='flex items-center'><img src={seriea} alt="Serie A" className='w-[6rem] sm:w-[14rem]' /></Link>
        </div>
      </div>

      <div className='text-white font-poppins p-14'>
        <h1 className='text-[2.69rem] mb-3'>UEFA Leagues</h1>
        <div className='flex flex-wrap gap-6 sm:gap-12'>
          <Link className='flex items-center'><img src={ucl} alt="UCL" className='w-[6rem] sm:w-[14rem]' /></Link>
          <Link className='flex items-center'><img src={uel} alt="UEL" className='w-[6rem] sm:w-[14rem]' /></Link>
        </div>
      </div>

      <div className='text-white font-poppins p-14 mb-12'>
        <h1 className='text-[2.69rem] mb-3'>International Tournaments</h1>
        <div className='flex flex-wrap gap-6 sm:gap-12'>
          <Link className='flex items-center'><img src={euro2024} alt="Euro 2024" className='w-[6rem] sm:w-[14rem]' /></Link>
          <Link className='flex items-center'><img src={copaamerica2024} alt="Copa America 2024" className='w-[6rem] sm:w-[14rem]' /></Link>
        </div>
      </div>
    </>
  )
}

export default Competitions