// import React, { useState, useEffect } from 'react'
// import laliga from '../resources/logos/laliga.svg'
// import Recentmatches from '../components/Recentmatches'
// import rightarrow from '../resources/rightarrow.svg'
// import Pointstabletr from '../components/Pointstabletr'
// import data from '../data/laligaPointsTable.json'
// import Carousel from 'react-elastic-carousel'
// import item from "./items"
// const breakPoints = [ 
//   {width:1,itemsToShow:1},
//   {width:500,itemsToShow:2},
//   {width:768,itemsToShow:3},
//   {width:1100,itemsToShow:4}
// ]
// const Laliga = () => {
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
//         <img src={laliga} alt="" className='w-[7rem]'/>
//         <h1 className='text-[3rem] font-bold'>LALIGA</h1>
//       </div>
//       <div className='text-white px-14 font-poppins'>
//         <h1 className='text-[2.3rem] font-bold'>Recent Matches</h1>
        
//         <div className='flex gap-28 border border-white rounded-[15px] px-5'>
//         <Carousel breakPoints={breakPoints}>
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

// export default Laliga







// use this for testing data using json file

// import React, { useState, useEffect } from 'react'
// import laliga from '../resources/logos/laliga.svg'
// import Recentmatches from '../components/Recentmatches'
// import Carousel from 'react-elastic-carousel'
// import Pointstabletr from '../components/Pointstabletr'
// import pointsData from '../data/laligaPointsTable.json'
// import recentMatchesData from '../data/recentMatches.json'

// const breakPoints = [
//   { width: 1, itemsToShow: 1 },
//   { width: 500, itemsToShow: 2 },
//   { width: 768, itemsToShow: 3 },
//   { width: 1100, itemsToShow: 4 }
// ]

// const Laliga = () => {
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
//         <img src={laliga} alt="EPL Logo" className='w-[7rem]' />
//         <h1 className='text-[3rem] font-bold'>La Liga</h1>
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

// export default Laliga






// import React, { useState, useEffect } from 'react'
// import laliga from '../resources/logos/laliga.svg'
// import Recentmatches from '../components/Recentmatches'
// import Pointstabletr from '../components/Pointstabletr'
// import pointsData from '../data/laligaPointsTable.json'
// import recentMatchesData from '../data/recentMatches.json'
// import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';

// const breakPoints = [
//   { width: 1, itemsToShow: 1 },
//   { width: 500, itemsToShow: 2 },
//   { width: 768, itemsToShow: 3 },
//   { width: 1100, itemsToShow: 4 }
// ];

// const Laliga = () => {
//   const [sortedData, setSortedData] = useState([]);
//   const [recentMatches, setRecentMatches] = useState([]);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchPointsTable = async () => {
//       try {
//         const response = await fetch('http://localhost:5000/api/laliga');
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
//         setError(`Error fetching Laliga data: ${error.message}`);
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
//         <img src={laliga} alt="Laliga Logo" className='w-[7rem]' />
//         <h1 className='text-[3rem] font-bold'>Laliga</h1>
//       </div>
//       <div className='text-white text-3xl px-14 mt-16 mb-5 font-poppins'>
//                      RECENT MATCHES
//       </div>
//       <div className='text-white px-10'>
//         <Swiper
//           // install Swiper modules
//           modules={[Navigation, Pagination, Scrollbar, A11y]}
//           // spaceBetween={50}
//           slidesPerView={4}
//           navigation
//           // pagination={{ clickable: true }}
//           // scrollbar={{ draggable: true }}
//           onSwiper={(swiper) => console.log(swiper)}
//           onSlideChange={() => console.log('slide change')}
//         >
//           {recentMatches.map((match,index) => (
//                   <SwiperSlide ><Recentmatches key={index} match={match} /> </SwiperSlide>
//               ))}
//         </Swiper>
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

// export default Laliga;



import React, { useState, useEffect } from 'react'
import laliga from '../resources/logos/laliga.svg'
import Recentmatches from '../components/Recentmatches'
import Pointstabletr from '../components/Pointstabletr'
import pointsData from '../data/laligaPointsTable.json'
import recentMatchesData from '../data/recentMatches.json'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Laliga = () => {
  const [sortedData, setSortedData] = useState([]);
  const [recentMatches, setRecentMatches] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPointsTable = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/laliga');
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
        setError(`Error fetching Laliga data: ${error.message}`);
      }
    };

    fetchPointsTable();
  }, []);

  useEffect(() => {
    setRecentMatches(recentMatchesData);
  }, []);

  return (
    <>
      <div className='text-white flex items-center p-14 gap-10 font-poppins'>
        <img src={laliga} alt="Laliga Logo" className='w-[7rem]' />
        <h1 className='text-[3rem] font-bold'>Laliga</h1>
      </div>
      <div className='text-white text-3xl px-14 mt-16 mb-5 font-poppins'>
        RECENT MATCHES
      </div>
      <div className='text-white px-10'>
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          // spaceBetween={50}
          breakpoints={{
            // when window width is >= 320px
            320: {
              slidesPerView: 1,
            },
            // when window width is >= 480px
            480: {
              slidesPerView: 3,
            },
            // when window width is >= 640px
            640: {
              slidesPerView: 3,
            },
            // when window width is >= 1100px
            1100: {
              slidesPerView: 4,
            },
          }}
          navigation
          // pagination={{ clickable: true }}
          // scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
        >
          {recentMatches.map((match, index) => (
            <SwiperSlide key={index}><Recentmatches match={match} /></SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className='text-white px-14 mt-16 mb-40 font-poppins'>
        <h1 className='text-[2.3rem] font-bold mb-5'>Points Table</h1>
        {error ? (
          <p className="text-red-500">{error}</p>
        ) : (
          <table className='table-auto'>
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
        )}
      </div>
    </>
  );
}

export default Laliga;
