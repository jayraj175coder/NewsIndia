// NewsBoard.js
import React, { useState, useEffect } from 'react';
import NewsInfo from './NewsInfo';

const NewsBoard = ({ category }) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch(
          `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=e0538afb210640e48124a482c3476ca2`
        );
        if (!response.ok) {
          throw new Error('Failed to fetch news');
        }
        const data = await response.json();
        setArticles(data.articles);
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };
    fetchNews();
  }, [category]);

  
  return (
    <div className="container-fluid">
      <div className="row">
        {articles.map((article, index) => (
          <NewsInfo
            key={index}
            title={article.title}
            description={article.description}
            src={article.urlToImage}
            url={article.url}
          />
        ))}
      </div>
    </div>
  );
};




export default NewsBoard;
