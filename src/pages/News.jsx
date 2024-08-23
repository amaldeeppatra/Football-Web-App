// import React, { useState, useEffect } from 'react';
// import Cardnews from './Cardnews.jsx';
// import valverde from '../resources/valverde.jpg';

// const News = () => {
//   const [newsData, setNewsData] = useState([]);

//   useEffect(() => {
//     fetch('https://fieldfuse-backend.onrender.com/api/news')
//       .then(response => response.json())
//       .then(data => setNewsData(data.slice(0, 16))) // Fetch and slice to get only the first 16 records
//       .catch(error => console.error('Error fetching news data:', error));
//   }, []);

//   return (
//     <div className='bg-[#161616] min-h-screen'>
//       <div className='text-white bg-slate-900 mx-4 sm:mx-11'>
//         <div className='text-white bg-gray-800'>
//           <div className='flex flex-col sm:flex-row mt-20 font-bold text-3xl sm:text-5xl p-5 sm:p-10'>
//             <div className='flex-1'>TRENDING NEWS</div>
//           </div>
//           <div className='flex flex-col sm:flex-row items-center sm:items-start'>
//             <img className='opacity-70 z-10 rounded-[30px] w-full sm:w-[650px] p-4 sm:p-8' src={valverde} alt="Trending" />
//             <div className='mt-6 sm:mt-32 text-xl sm:text-3xl text-center sm:text-left px-4 sm:px-0'>
//               Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic voluptate nihil omnis minima id pariatur.
//             </div>
//           </div>
//         </div>
//         <div className='mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 px-4 sm:px-7 pb-7 mb-10'>
//           {newsData.map((news, index) => (
//             <Cardnews
//               key={index}
//               title={news.title}
//               imageUrl={news.imgUrl}
//               linkUrl={news.linkUrl} // Ensure linkUrl is correctly provided
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default News;



import React, { useState, useEffect } from 'react';
import Cardnews from './Cardnews.jsx';
import valverde from '../resources/valverde.jpg';

const News = () => {
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://fieldfuse-backend.onrender.com/api/news')
      .then(response => response.json())
      .then(data => {
        setNewsData(data.slice(0, 16)); // Fetch and slice to get only the first 16 records
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching news data:', error);
        setLoading(false);
      });
  }, []);

  const renderSkeletons = () => {
    return Array.from({ length: 16 }).map((_, index) => (
      <div key={index} className="animate-pulse p-4">
        <div className="bg-gray-700 h-40 sm:h-52 rounded-lg mb-4"></div>
        <div className="h-4 bg-gray-700 rounded w-3/4 mx-auto mb-2"></div>
        <div className="h-4 bg-gray-700 rounded w-1/2 mx-auto"></div>
      </div>
    ));
  };

  return (
    <div className='bg-[#161616] min-h-screen'>
      <div className='text-white bg-slate-900 mx-4 sm:mx-11'>
        <div className='text-white bg-gray-800'>
          <div className='flex flex-col sm:flex-row mt-20 font-bold text-3xl sm:text-5xl p-5 sm:p-10'>
            <div className='flex-1'>TRENDING NEWS</div>
          </div>
          <div className='flex flex-col sm:flex-row items-center sm:items-start'>
            <img className='opacity-70 z-10 rounded-[30px] w-full sm:w-[650px] p-4 sm:p-8' src="https://res.cloudinary.com/dxj6xhcpe/image/upload/v1724408851/valverde_k3djwc.jpg" alt="Trending" />
            <div className='mt-6 sm:mt-32 text-xl sm:text-3xl text-center sm:text-left px-4 sm:px-0'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic voluptate nihil omnis minima id pariatur.
            </div>
          </div>
        </div>
        <div className='mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 px-4 sm:px-7 pb-7 mb-10'>
          {loading ? renderSkeletons() : 
            newsData.map((news, index) => (
              <Cardnews
                key={index}
                title={news.title}
                imageUrl={news.imgUrl}
                linkUrl={news.linkUrl} // Ensure linkUrl is correctly provided
              />
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default News;