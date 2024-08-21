// import React, { useState, useEffect } from 'react';
// import epl from '../resources/logos/epl.svg';
// import Recentmatches from '../components/Recentmatches';
// import Pointstabletr from '../components/Pointstabletr';
// import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';

// const Epl = () => {
//   const [sortedData, setSortedData] = useState([]);
//   const [recentMatches, setRecentMatches] = useState([]);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchPointsTable = async () => {
//       try {
//         const response = await fetch('https://fieldfuse-backend.onrender.com/api/epl');
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

//     const fetchRecentMatches = async () => {
//       try {
//         const response = await fetch('https://fieldfuse-backend.onrender.com/api/epl/recent-matches');
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
//         const data = await response.json();
//         setRecentMatches(data);
//       } catch (error) {
//         setError(`Error fetching recent matches: ${error.message}`);
//       }
//     };

//     fetchPointsTable();
//     fetchRecentMatches();
//   }, []);

//   return (
//     <>
//       <div className='text-white flex flex-col md:flex-row items-center p-14 gap-10 font-poppins text-center'>
//         <img src={epl} alt="EPL Logo" className='w-[7rem]' />
//         <h1 className='text-[3rem] font-bold'>Premier League</h1>
//       </div>
//       <div className='text-white text-3xl px-14 mt-16 mb-5 font-poppins'>
//         RECENT MATCHES
//       </div>
//       <div className='text-white px-2'>
//         {error ? (
//           <p className="text-red-500">{error}</p>
//         ) : (
//           <Swiper
//             modules={[Navigation, Pagination, Scrollbar, A11y]}
//             slidesPerView={4}
//             navigation
//           >
//             {recentMatches.map((match, index) => (
//               <SwiperSlide key={index}><Recentmatches match={match} /></SwiperSlide>
//             ))}
//           </Swiper>
//         )}
//       </div>
//       <div className='text-white px-14 mt-16 mb-40 font-poppins'>
//         <h1 className='text-[2.3rem] font-bold mb-5'>Points Table</h1>
//         {error ? (
//           <p className="text-red-500">{error}</p>
//         ) : (
//           <div className='overflow-x-auto'>
//             <table className='table-auto min-w-full'>
//               <thead>
//                 <tr>
//                   <th className='px-5'></th>
//                   <th className='px-5'></th>
//                   <th className='px-5'>Club</th>
//                   <th className='px-5'>MP</th>
//                   <th className='px-5'>W</th>
//                   <th className='px-5'>D</th>
//                   <th className='px-5'>L</th>
//                   <th className='px-5'>GF</th>
//                   <th className='px-5'>GA</th>
//                   <th className='px-5'>GD</th>
//                   <th className='px-5'>Pts</th>
//                   <th className='px-5'>Streak</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {sortedData.map((team, index) => (
//                   <Pointstabletr 
//                     key={index}
//                     rank={team.rank}
//                     img={team.img}
//                     club={team.club}
//                     mp={team.mp}
//                     wins={team.wins}
//                     draw={team.draw}
//                     losses={team.losses}
//                     gf={team.gf}
//                     ga={team.ga}
//                     gd={team.gd}
//                     pts={team.pts}
//                     streak={team.streak}
//                   />
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         )}
//       </div>

//       {/* Mobile Responsive Styles */}
//       <style jsx>{`
//         @media (max-width: 768px) {
//           .text-[3rem] {
//             font-size: 2rem;
//           }
//           .text-[2.3rem] {
//             font-size: 1.5rem;
//           }
//           .gap-28 {
//             gap: 10px;
//           }
//           .p-14 {
//             padding: 1rem;
//           }
//           .overflow-x-auto {
//             overflow-x: auto;
//           }
//           .min-w-full {
//             min-width: 100%;
//           }
//         }
//       `}</style>
//     </>
//   );
// }

// export default Epl;



import React, { useState, useEffect } from 'react';
import epl from '../resources/logos/epl.svg';
import Recentmatches from '../components/Recentmatches';
import Pointstabletr from '../components/Pointstabletr';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Epl = () => {
  const [sortedData, setSortedData] = useState([]);
  const [recentMatches, setRecentMatches] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPointsTable = async () => {
      try {
        const response = await fetch('https://fieldfuse-backend.onrender.com/api/epl');
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

    const fetchRecentMatches = async () => {
      try {
        const response = await fetch('https://fieldfuse-backend.onrender.com/api/epl/recent-matches');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setRecentMatches(data);
      } catch (error) {
        setError(`Error fetching recent matches: ${error.message}`);
      }
    };

    fetchPointsTable();
    fetchRecentMatches();
  }, []);

  return (
    <>
      <div className='text-white flex flex-col md:flex-row items-center p-14 gap-10 font-poppins text-center'>
        <img src={epl} alt="EPL Logo" className='w-[7rem]' />
        <h1 className='text-[3rem] font-bold'>Premier League</h1>
      </div>
      <div className='text-white text-3xl px-14 mt-16 mb-5 font-poppins'>
        RECENT MATCHES
      </div>
      <div className='text-white px-[0.3rem]'>
        {error ? (
          <p className="text-red-500">{error}</p>
        ) : (
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            slidesPerView={4}
            navigation
            breakpoints={{
              // when window width is >= 320px
              320: {
                slidesPerView: 1,
              },
              // when window width is >= 768px
              768: {
                slidesPerView: 4,
              },
            }}
          >
            {recentMatches.map((match, index) => (
              <SwiperSlide key={index}><Recentmatches match={match} /></SwiperSlide>
            ))}
          </Swiper>
        )}
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
            font-size: 2rem;
          }
          .text-[2.3rem] {
            font-size: 1.5rem;
          }
          .gap-28 {
            gap: 10px;
          }
          .p-14 {
            padding: 1rem;
          }
          .overflow-x-auto {
            overflow-x: auto;
          }
          .min-w-full {
            min-width: 100%;
          }
        }
      `}</style>
    </>
  );
}

export default Epl;
