import React from 'react';
import { Link } from 'react-router-dom';

const Cardnews = ({ title, imageUrl }) => {
  const encodedTitle = encodeURIComponent(title); // Encode the title for use in the URL

  return (
    <Link to={`/news/${encodedTitle}`} className='no-underline'>
      <div className='cursor-pointer bg-gray-600 p-[1rem] rounded-[20px] flex flex-col items-center font-poppins h-full'> {/* Set fixed height */}
        <img className='h-52 w-full rounded-[20px] object-cover' src={imageUrl} alt={title} />
        <div className='mt-2 flex-grow flex items-center justify-center'> {/* Center text vertically */}
          <h2 className='text-white text-[1rem] font-semibold text-justify'>{title}</h2>
        </div>
      </div>
    </Link>
  );
};

export default Cardnews;
