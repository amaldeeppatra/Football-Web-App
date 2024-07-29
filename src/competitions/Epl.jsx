// import React from 'react'
// import epl from '../resources/logos/epl.svg'
// import Recentmatches from '../components/Recentmatches'
// import rightarrow from '../resources/rightarrow.svg'
// import Pointstabletr from '../components/Pointstabletr'
// import data from '../data/eplPointsTable.json'

// const Epl = () => {
//   return (
//     <>
//     <div className='text-white flex items-center p-14 gap-10 font-poppins'>
//         <img src={epl} alt="" className='w-[7rem]'/>
//         <h1 className='text-[3rem] font-bold'>Premier League</h1>
//     </div>
//     <div className='text-white px-14 font-poppins'>
//         <h1 className='text-[2.3rem] font-bold'>Recent Matches</h1>
        
//         <div className='flex gap-28 border border-white rounded-[15px] px-5'>
//             <Recentmatches/>
//             <Recentmatches/>
//             <Recentmatches/>
//             <Recentmatches/>
//             <div className='flex'>
//               <img src={rightarrow} alt=""/>
//             </div>
//         </div>
//     </div>
//     <div className='text-white px-14 mt-16 mb-40 font-poppins'>
//       <h1 className='text-[2.3rem] font-bold mb-5'>Points Table</h1>
//         <table className='table-auto'>
//           <thead>
//             <tr >
//               <th className='px-5'></th>
//               <th className='px-5'></th>
//               <th className='px-5'>Club</th>
//               <th className='px-5'>MP</th>
//               <th className='px-5'>W</th>
//               <th className='px-5'>D</th>
//               <th className='px-5'>L</th>
//               <th className='px-5'>GF</th>
//               <th className='px-5'>GA</th>
//               <th className='px-5'>GD</th>
//               <th className='px-5'>Pts</th>
//               <th className='px-5'>Streak</th>
//             </tr>
//           </thead>
//           <tbody>
//           {data.body.map((team, index) => (
//               <Pointstabletr 
//                 key={index}
//                 rank={team.rank}
//                 img={team.img}
//                 club={team.club}
//                 mp={team.mp}
//                 wins={team.wins}
//                 draw={team.draw}
//                 losses={team.losses}
//                 gf={team.gf}
//                 ga={team.ga}
//                 gd={team.gd}
//                 pts={team.pts}
//                 streak={team.streak}
//               />
//             ))}
//           </tbody>
//         </table>
//     </div>
//     </>
//   )
// }
//<div className='flex'>//
            //<img src={rightarrow} alt=""/>
          //</div>//
// export default Epl









import React, { useState, useEffect } from 'react'
import epl from '../resources/logos/epl.svg'
import Recentmatches from '../components/Recentmatches'
import rightarrow from '../resources/rightarrow.svg'
import Pointstabletr from '../components/Pointstabletr'
import data from '../data/eplPointsTable.json'
import Carousel from 'react-elastic-carousel'
import item from "./items"
const breakPoints = [ 
  {width:1,itemsToShow:1},
  {width:500,itemsToShow:2},
  {width:768,itemsToShow:3},
  {width:1100,itemsToShow:4}
]
const Epl = () => {
  const [sortedData, setSortedData] = useState([]);

  // useEffect(() => {
  //   const sorted = data.body.sort((a, b) => a.rank - b.rank);
  //   setSortedData(sorted);
  // }, []);

  useEffect(() => {
    const sorted = data.body.sort((a, b) => {
      // Sort by points
      if (a.pts !== b.pts) {
        return b.pts - a.pts; // Sort by points descending
      } else {
        // If points are equal, sort by goal difference
        return b.gd - a.gd; // Sort by goal difference descending
      }
    });
  
    // Assign ranks
    sorted.forEach((team, index) => {
      team.rank = index + 1;
    });
  
    setSortedData(sorted);
  }, []);

  return (
    <>
      <div className='text-white flex items-center p-14 gap-10 font-poppins'>
        <img src={epl} alt="" className='w-[7rem]'/>
        <h1 className='text-[3rem] font-bold'>Premier League</h1>
      </div>
      <div className='text-white px-14 font-poppins'>
        <h1 className='text-[2.3rem] font-bold'>Recent Matches</h1>
        
        <div className='flex gap-28 border border-white rounded-[15px] px-5'>
          <Carousel breakPoints={breakPoints}>
          <Recentmatches/>
          <Recentmatches/>
          <Recentmatches/>
          <Recentmatches/>
          <Recentmatches/>
          <Recentmatches/>
          <Recentmatches/>
          <Recentmatches/>
          <Recentmatches/>
          <Recentmatches/>
          </Carousel>
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
            {sortedData.map((team, index) => (
              <Pointstabletr 
                key={index}
                rank={team.rank}
                img={team.img}
                club={team.club}
                mp={team.mp}
                wins={team.wins}
                draw={team.draw}
                losses={team.losses}
                gf={team.gf}
                ga={team.ga}
                gd={team.gd}
                pts={team.pts}
                streak={team.streak}
              />
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default Epl
