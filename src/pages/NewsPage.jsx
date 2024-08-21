import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const NewsPage = () => {
  const { title } = useParams();
  const [news, setNews] = useState(null);

  useEffect(() => {
    console.log('Fetching news for:', title); // Debugging
    if (!title) return;

    const fetchNews = async () => {
      try {
        const response = await fetch(`https://fieldfuse-backend.onrender.com/api/news/${encodeURIComponent(title)}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setNews(data);
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };

    fetchNews();
  }, [title]);

  if (!news) {
    return <div className="text-center text-gray-500 py-20">Loading...</div>;
  }

  return (
    <div className="bg-slate-900 min-h-screen pt-20 pb-24"> {/* Adjusted background color */}
      <div className="container mx-auto px-4">
        <div className="bg-gray-800 shadow-lg rounded-lg p-6">
          <h1 className="text-4xl font-extrabold mb-6 text-slate-200">{news.title}</h1>
          <div className="flex justify-center mb-6"> {/* Centering the image */}
            <img className="object-contain rounded-lg" src={news.imgUrl} alt={news.title} /> {/* No cropping */}
          </div>
          <div className="prose lg:prose-xl max-w-none text-gray-200 leading-relaxed">
            <p>{news.content}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsPage;
