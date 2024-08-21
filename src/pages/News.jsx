import React, { useState, useEffect } from 'react';
import Cardnews from './Cardnews.jsx';
import valverde from '../resources/valverde.jpg';

const News = () => {
  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    fetch('https://fieldfuse-backend.onrender.com/api/news')
      .then(response => response.json())
      .then(data => setNewsData(data.slice(0, 16))) // Fetch and slice to get only the first 16 records
      .catch(error => console.error('Error fetching news data:', error));
  }, []);

  return (
    <div className='bg-[#161616] min-h-screen'>
      <div className='text-white bg-slate-900 mx-4 sm:mx-11'>
        <div className='text-white bg-gray-800'>
          <div className='flex flex-col sm:flex-row mt-20 font-bold text-3xl sm:text-5xl p-5 sm:p-10'>
            <div className='flex-1'>TRENDING NEWS</div>
          </div>
          <div className='flex flex-col sm:flex-row items-center sm:items-start'>
            <img className='opacity-70 z-10 rounded-[30px] w-full sm:w-[650px] p-4 sm:p-8' src={valverde} alt="Trending" />
            <div className='mt-6 sm:mt-32 text-xl sm:text-3xl text-center sm:text-left px-4 sm:px-0'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic voluptate nihil omnis minima id pariatur.
            </div>
          </div>
        </div>
        <div className='mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 px-4 sm:px-7 pb-7 mb-10'>
          {newsData.map((news, index) => (
            <Cardnews
              key={index}
              title={news.title}
              imageUrl={news.imgUrl}
              linkUrl={news.linkUrl} // Ensure linkUrl is correctly provided
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default News;
