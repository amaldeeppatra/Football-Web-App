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









// import React, { useState, useEffect } from 'react'
// import epl from '../resources/logos/epl.svg'
// import Recentmatches from '../components/Recentmatches'
// import rightarrow from '../resources/rightarrow.svg'
// import Pointstabletr from '../components/Pointstabletr'
// import data from '../data/eplPointsTable.json'
// import Carousel from 'react-elastic-carousel'
// import item from "./items"
// const breakPoints = [ 
//   {width:1,itemsToShow:1},
//   {width:500,itemsToShow:2},
//   {width:768,itemsToShow:3},
//   {width:1100,itemsToShow:4}
// ]
// const Epl = () => {
//   const [sortedData, setSortedData] = useState([]);

//   // useEffect(() => {
//   //   const sorted = data.body.sort((a, b) => a.rank - b.rank);
//   //   setSortedData(sorted);
//   // }, []);

//   useEffect(() => {
//     const sorted = data.body.sort((a, b) => {
//       // Sort by points
//       if (a.pts !== b.pts) {
//         return b.pts - a.pts; // Sort by points descending
//       } else {
//         // If points are equal, sort by goal difference
//         return b.gd - a.gd; // Sort by goal difference descending
//       }
//     });
  
//     // Assign ranks
//     sorted.forEach((team, index) => {
//       team.rank = index + 1;
//     });
  
//     setSortedData(sorted);
//   }, []);

//   return (
//     <>
//       <div className='text-white flex items-center p-14 gap-10 font-poppins'>
//         <img src={epl} alt="" className='w-[7rem]'/>
//         <h1 className='text-[3rem] font-bold'>Premier League</h1>
//       </div>
//       <div className='text-white px-14 font-poppins'>
//         <h1 className='text-[2.3rem] font-bold'>Recent Matches</h1>
        
//         <div className='flex gap-28 border border-white rounded-[15px] px-5'>
//           <Carousel breakPoints={breakPoints}>
//           <Recentmatches/>
//           <Recentmatches/>
//           <Recentmatches/>
//           <Recentmatches/>
//           <Recentmatches/>
//           <Recentmatches/>
//           <Recentmatches/>
//           <Recentmatches/>
//           <Recentmatches/>
//           <Recentmatches/>
//           </Carousel>
//         </div>
//       </div>
//       <div className='text-white px-14 mt-16 mb-40 font-poppins'>
//         <h1 className='text-[2.3rem] font-bold mb-5'>Points Table</h1>
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
//             {sortedData.map((team, index) => (
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
//       </div>
//     </>
//   )
// }

// export default Epl





// use this for backend api fetch

// import React, { useState, useEffect } from 'react'
// import epl from '../resources/logos/epl.svg'
// import Recentmatches from '../components/Recentmatches'
// import Carousel from 'react-elastic-carousel'
// import Pointstabletr from '../components/Pointstabletr'
// import data from '../data/eplPointsTable.json'

// const breakPoints = [
//   { width: 1, itemsToShow: 1 },
//   { width: 500, itemsToShow: 2 },
//   { width: 768, itemsToShow: 3 },
//   { width: 1100, itemsToShow: 4 }
// ]

// const Epl = () => {
//   const [sortedData, setSortedData] = useState([]);
//   const [recentMatches, setRecentMatches] = useState([]);

//   useEffect(() => {
//     const sorted = data.body.sort((a, b) => {
//       if (a.pts !== b.pts) {
//         return b.pts - a.pts;
//       } else {
//         return b.gd - a.gd;
//       }
//     });

//     sorted.forEach((team, index) => {
//       team.rank = index + 1;
//     });

//     setSortedData(sorted);
//   }, []);

//   useEffect(() => {
//     // Fetch recent matches data
//     fetch('/api/recent-matches')
//       .then(response => response.json())
//       .then(data => setRecentMatches(data))
//       .catch(error => console.error('Error fetching recent matches:', error));
//   }, []);

//   return (
//     <>
//       <div className='text-white flex items-center p-14 gap-10 font-poppins'>
//         <img src={epl} alt="" className='w-[7rem]' />
//         <h1 className='text-[3rem] font-bold'>Premier League</h1>
//       </div>
//       <div className='text-white px-14 font-poppins'>
//         <h1 className='text-[2.3rem] font-bold'>Recent Matches</h1>
        
//         <div className='flex gap-28 border border-white rounded-[15px] px-5'>
//           <Carousel breakPoints={breakPoints}>
//             {recentMatches.map((match, index) => (
//               <Recentmatches key={index} match={match} />
//             ))}
//           </Carousel>
//         </div>
//       </div>
//       <div className='text-white px-14 mt-16 mb-40 font-poppins'>
//         <h1 className='text-[2.3rem] font-bold mb-5'>Points Table</h1>
//         <table className='table-auto'>
//           <thead>
//             <tr>
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
//             {sortedData.map((team, index) => (
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
//       </div>
//     </>
//   )
// }

// export default Epl



// use this for testing data using json file

// import React, { useState, useEffect } from 'react'
// import epl from '../resources/logos/epl.svg'
// import Recentmatches from '../components/Recentmatches'
// import Carousel from 'react-elastic-carousel'
// import Pointstabletr from '../components/Pointstabletr'
// import pointsData from '../data/eplPointsTable.json'
// import recentMatchesData from '../data/recentMatches.json'

// const breakPoints = [
//   { width: 1, itemsToShow: 1 },
//   { width: 500, itemsToShow: 2 },
//   { width: 768, itemsToShow: 3 },
//   { width: 1100, itemsToShow: 4 }
// ]

// const Epl = () => {
//   const [sortedData, setSortedData] = useState([]);
//   const [recentMatches, setRecentMatches] = useState([]);

//   useEffect(() => {
//     const sorted = pointsData.body.sort((a, b) => {
//       if (a.pts !== b.pts) {
//         return b.pts - a.pts;
//       } else {
//         return b.gd - a.gd;
//       }
//     });

//     sorted.forEach((team, index) => {
//       team.rank = index + 1;
//     });

//     setSortedData(sorted);
//   }, []);

//   useEffect(() => {
//     // Use the imported JSON data
//     setRecentMatches(recentMatchesData);
//   }, []);

//   return (
//     <>
//       <div className='text-white flex items-center p-14 gap-10 font-poppins'>
//         <img src={epl} alt="EPL Logo" className='w-[7rem]' />
//         <h1 className='text-[3rem] font-bold'>Premier League</h1>
//       </div>
//       <div className='text-white px-14 font-poppins'>
//         <h1 className='text-[2.3rem] font-bold'>Recent Matches</h1>
        
//         <div className='flex gap-28 border border-white rounded-[15px] px-5'>
//           <Carousel breakPoints={breakPoints}>
//             {recentMatches.map((match, index) => (
//               <Recentmatches key={index} match={match} />
//             ))}
//           </Carousel>
//         </div>
//       </div>
//       <div className='text-white px-14 mt-16 mb-40 font-poppins'>
//         <h1 className='text-[2.3rem] font-bold mb-5'>Points Table</h1>
//         <table className='table-auto'>
//           <thead>
//             <tr>
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
//             {sortedData.map((team, index) => (
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
//       </div>
//     </>
//   )
// }

// export default Epl











// import React, { useState, useEffect } from 'react';
// import epl from '../resources/logos/epl.svg';
// import Recentmatches from '../components/Recentmatches';
// import Carousel from 'react-elastic-carousel';
// import Pointstabletr from '../components/Pointstabletr';
// import recentMatchesData from '../data/recentMatches.json';

// const breakPoints = [
//   { width: 1, itemsToShow: 1 },
//   { width: 500, itemsToShow: 2 },
//   { width: 768, itemsToShow: 3 },
//   { width: 1100, itemsToShow: 4 }
// ];

// const Epl = () => {
//   const [sortedData, setSortedData] = useState([]);
//   const [recentMatches, setRecentMatches] = useState([]);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchPointsTable = async () => {
//       try {
//         const response = await fetch('http://localhost:5000/api/epl');
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
//         const data = await response.json();

//         // Sorting the data
//         const sorted = data.sort((a, b) => {
//           if (a.pts !== b.pts) {
//             return b.pts - a.pts;
//           } else {
//             return b.gd - a.gd;
//           }
//         });

//         sorted.forEach((team, index) => {
//           team.rank = index + 1;
//         });

//         setSortedData(sorted);
//       } catch (error) {
//         setError(`Error fetching EPL data: ${error.message}`);
//       }
//     };

//     fetchPointsTable();
//   }, []);

//   useEffect(() => {
//     setRecentMatches(recentMatchesData);
//   }, []);

//   return (
//     <>
//       <div className='text-white flex items-center p-14 gap-10 font-poppins'>
//         <img src={epl} alt="EPL Logo" className='w-[7rem]' />
//         <h1 className='text-[3rem] font-bold'>Premier League</h1>
//       </div>
//       <div className='text-white px-14 font-poppins'>
//         <h1 className='text-[2.3rem] font-bold'>Recent Matches</h1>
        
//         <div className='flex gap-28 border border-white rounded-[15px] px-5'>
//           <Carousel breakPoints={breakPoints}>
//             {recentMatches.map((match, index) => (
//               <Recentmatches key={index} match={match} />
//             ))}
//           </Carousel>
//         </div>
//       </div>
//       <div className='text-white px-14 mt-16 mb-40 font-poppins'>
//         <h1 className='text-[2.3rem] font-bold mb-5'>Points Table</h1>
//         {error ? (
//           <p className="text-red-500">{error}</p>
//         ) : (
//           <table className='table-auto'>
//             <thead>
//               <tr>
//                 <th className='px-5'></th>
//                 <th className='px-5'></th>
//                 <th className='px-5'>Club</th>
//                 <th className='px-5'>MP</th>
//                 <th className='px-5'>W</th>
//                 <th className='px-5'>D</th>
//                 <th className='px-5'>L</th>
//                 <th className='px-5'>GF</th>
//                 <th className='px-5'>GA</th>
//                 <th className='px-5'>GD</th>
//                 <th className='px-5'>Pts</th>
//                 <th className='px-5'>Streak</th>
//               </tr>
//             </thead>
//             <tbody>
//               {sortedData.map((team, index) => (
//                 <Pointstabletr 
//                   key={index}
//                   rank={team.rank}
//                   img={team.img}
//                   club={team.club}
//                   mp={team.mp}
//                   wins={team.wins}
//                   draw={team.draw}
//                   losses={team.losses}
//                   gf={team.gf}
//                   ga={team.ga}
//                   gd={team.gd}
//                   pts={team.pts}
//                   streak={team.streak}
//                 />
//               ))}
//             </tbody>
//           </table>
//         )}
//       </div>
//     </>
//   );
// }

// export default Epl;




import React, { useState, useEffect } from 'react';
import epl from '../resources/logos/epl.svg';
import Recentmatches from '../components/Recentmatches';
import Pointstabletr from '../components/Pointstabletr';
import recentMatchesData from '../data/recentMatches.json';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 500, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1100, itemsToShow: 4 }
];

const Epl = () => {
  const [sortedData, setSortedData] = useState([]);
  const [recentMatches, setRecentMatches] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchPointsTable = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/epl');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();

        // Sorting the data
        const sorted = data.sort((a, b) => {
          if (a.pts !== b.pts) {
            return b.pts - a.pts;
          } else {
            return b.gd - a.gd;
          }
        });

        sorted.forEach((team, index) => {
          team.rank = index + 1;
        });

        setSortedData(sorted);
      } catch (error) {
        setError(`Error fetching EPL data: ${error.message}`);
      }
    };

    fetchPointsTable();
  }, []);

  useEffect(() => {
    setRecentMatches(recentMatchesData);
  }, []);

  return (
    <>
      <div className='text-white flex flex-col md:flex-row items-center p-14 gap-10 font-poppins text-center'>
        <img src={epl} alt="EPL Logo" className='w-[7rem]' />
        <h1 className='text-[3rem] font-bold'>Premier League</h1>
      </div>
      <div className='text-white text-3xl px-14 mt-16 mb-40 font-poppins'>
                     RECENT MATCHES
      </div>
      <div>
      <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      {recentMatches.map((match,index) => (
              <SwiperSlide ><Recentmatches key={index} match={match} /> </SwiperSlide>
           ))}
    </Swiper>
      </div>
      <div className='text-white px-14 mt-16 mb-40 font-poppins'>
        <h1 className='text-[2.3rem] font-bold mb-5'>Points Table</h1>
        {error ? (
          <p className="text-red-500">{error}</p>
        ) : (
          <div className='overflow-x-auto'>
            <table className='table-auto min-w-full'>
              <thead>
                <tr>
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
        )}
      </div>

      {/* Mobile Responsive Styles */}
      <style jsx>{`
        @media (max-width: 768px) {
          .text-[3rem] {
            font-size: 2rem; /* Adjust font size for smaller screens */
          }
          .text-[2.3rem] {
            font-size: 1.5rem; /* Adjust font size for smaller screens */
          }
          .gap-28 {
            gap: 10px; /* Adjust gap for smaller screens */
          }
          .p-14 {
            padding: 1rem; /* Adjust padding for smaller screens */
          }
          .overflow-x-auto {
            overflow-x: auto; /* Ensure horizontal scroll for tables and carousels */
          }
          .min-w-full {
            min-width: 100%; /* Ensure table takes full width on small screens */
          }
        }
      `}</style>
    </>
  );
}

export default Epl;
