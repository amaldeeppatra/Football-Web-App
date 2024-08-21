// import React from 'react';

// const Cardnews = ({ title, imageUrl }) => {
//   return (
//     <div className='bg-gray-600 p-[1rem] rounded-[20px] flex flex-col items-center font-poppins'>
//       <img className='h-64 w-full rounded-[20px] object-cover' src={imageUrl} alt={title} />
//       <div className='w-fit mt-2'>
//         <h2 className='text-white text-[1rem] font-semibold text-justify'>{title}</h2>
//       </div>
//     </div>
//   );
// }

// export default Cardnews;


import React from 'react';

const Cardnews = ({ title, imageUrl }) => {
  return (
    <div className='bg-gray-600 p-[1rem] rounded-[20px] flex flex-col items-center font-poppins'>
      <div className='w-full h-64 overflow-hidden rounded-[20px]'>
        <img className='w-full h-full object-cover' src={imageUrl} alt={title} />
      </div>
      <div className='w-fit mt-2'>
        <h2 className='text-white text-[1rem] font-semibold text-justify'>{title}</h2>
      </div>
    </div>
  );
}

export default Cardnews;
