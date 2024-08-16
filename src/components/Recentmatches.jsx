// import React from 'react'
// import arsenal from '../resources/team-logos/arsenal.svg'
// import everton from '../resources/team-logos/everton.svg'
// import mancity from '../resources/team-logos/man city.svg'
// import westham from '../resources/team-logos/west ham.svg'

// const Recentmatches = () => {
//   return (
//     <>
//     <div className='flex items-center gap-10'>
//         <div className='pt-3'>
//             <div className='flex items-center gap-10 p-2'>
//                 <img src={arsenal} alt="" />
//                 <p className='text-[2rem]'>2</p>
//             </div>
//             <div className='flex items-center gap-10 p-2'>
//                 <img src={everton} alt="" />
//                 <p className='text-[2rem]'>1</p>
//             </div>
//         </div>
//         <div className='text-center text-xl'>
//             <p>FT</p>
//             <p>19 May</p>
//         </div>
//     </div>
//     </>
//   )
// }

// export default Recentmatches




//use this for backend data api

// import React from 'react'

// const Recentmatches = ({ match }) => {
//   return (
//     <>
//       <div className='flex items-center gap-10'>
//         <div className='pt-3'>
//           <div className='flex items-center gap-10 p-2'>
//             <img src={match.teamLogo} alt={match.teamName} />
//             <p className='text-[2rem]'>{match.score}</p>
//           </div>
//           <div className='flex items-center gap-10 p-2'>
//             <img src={match.opponentLogo} alt={match.opponentName} />
//             <p className='text-[2rem]'>{match.opponentScore}</p>
//           </div>
//         </div>
//         <div className='text-center text-xl'>
//           <p>FT</p>
//           <p>{match.date}</p>
//         </div>
//       </div>
//     </>
//   )
// }

// export default Recentmatches




// use this for testing data using json file

import React, { useState, useEffect } from 'react';

const Recentmatches = ({ match }) => {
  const [teamLogo, setTeamLogo] = useState(null);
  const [opponentLogo, setOpponentLogo] = useState(null);

  useEffect(() => {
    // Dynamically import team logos
    import(`../resources/team-logos/${match.teamLogo}`)
      .then(module => setTeamLogo(module.default))
      .catch(err => console.error(`Error loading team logo: ${err}`));

    import(`../resources/team-logos/${match.opponentLogo}`)
      .then(module => setOpponentLogo(module.default))
      .catch(err => console.error(`Error loading opponent logo: ${err}`));
  }, [match.teamLogo, match.opponentLogo]);

  if (!teamLogo || !opponentLogo) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className='flex items-center gap-10'>
        <div className='pt-3'>
          <div className='flex items-center gap-10 p-2'>
            <img src={teamLogo} alt={match.teamName} />
            <p className='text-[2rem]'>{match.score}</p>
          </div>
          <div className='flex items-center gap-10 p-2'>
            <img src={opponentLogo} alt={match.opponentName} />
            <p className='text-[2rem]'>{match.opponentScore}</p>
          </div>
        </div>
        <div className='text-center text-xl md:ml-0 ml-[0.69rem]'>
          <p>FT</p>
          <p>{match.date}</p>
        </div>
      </div>
    </>
  )
}

export default Recentmatches;





// import React, { useState, useEffect } from 'react';

// const Recentmatches = ({ match }) => {
//   const [teamLogo, setTeamLogo] = useState(null);
//   const [opponentLogo, setOpponentLogo] = useState(null);

//   useEffect(() => {
//     // Dynamically import team logos
//     import(`../resources/team-logos/${match.teamLogo}`)
//       .then(module => setTeamLogo(module.default))
//       .catch(err => console.error(`Error loading team logo: ${err}`));

//     import(`../resources/team-logos/${match.opponentLogo}`)
//       .then(module => setOpponentLogo(module.default))
//       .catch(err => console.error(`Error loading opponent logo: ${err}`));
//   }, [match.teamLogo, match.opponentLogo]);

//   if (!teamLogo || !opponentLogo) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className='flex flex-col sm:flex-row items-center gap-5 p-4'>
//       <div className='flex flex-col sm:flex-row items-center gap-5'>
//         <div className='flex items-center gap-5'>
//           <img src={teamLogo} alt={match.teamName} className='w-16 sm:w-20' />
//           <p className='text-lg sm:text-2xl'>{match.score}</p>
//         </div>
//         <div className='flex items-center gap-5'>
//           <img src={opponentLogo} alt={match.opponentName} className='w-16 sm:w-20' />
//           <p className='text-lg sm:text-2xl'>{match.opponentScore}</p>
//         </div>
//       </div>
//       <div className='text-center text-sm sm:text-xl'>
//         <p>FT</p>
//         <p>{match.date}</p>
//       </div>
//     </div>
//   );
// }

// export default Recentmatches;
