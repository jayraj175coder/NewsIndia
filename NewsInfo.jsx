import React from 'react';
import './Styles.css';
import Image from './assets/news.jpg';

const NewsInfo = ({ title, description, src, url }) => {
  return (
    <div className="col-lg-3 col-md-6 mb-4">
      <div className="card bg-dark text-light">
        <img src={src ? src : Image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <a href={url} className="btn btn-primary">READ More</a>
        </div>
      </div>
    </div>
  );
};

export default NewsInfo;