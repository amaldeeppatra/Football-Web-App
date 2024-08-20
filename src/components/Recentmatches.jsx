import React from 'react';

const Recentmatches = ({ match }) => {
  const { teamLogo, opponentLogo, teamName, score, opponentName, opponentScore, date } = match;

  return (
    <>
      <div className='flex items-center gap-10 pl-14'>
        <div className='pt-3'>
          <div className='flex items-center gap-10 p-2'>
            <img src={teamLogo} alt={teamName} />
            <p className='text-[2rem]'>{score}</p>
          </div>
          <div className='flex items-center gap-10 p-2'>
            <img src={opponentLogo} alt={opponentName} />
            <p className='text-[2rem]'>{opponentScore}</p>
          </div>
        </div>
        <div className='text-center text-xl md:ml-0 ml-[0.69rem]'>
          <p>FT</p>
          <p>{date}</p>
        </div>
      </div>
    </>
  );
};

export default Recentmatches;
