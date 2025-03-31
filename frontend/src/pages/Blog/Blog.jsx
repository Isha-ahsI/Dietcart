import React, { useState } from 'react';
import './Blog.css';
import { blogPosts } from '../../assets/assets';

function Blog() {
  const [visibleDescription, setVisibleDescription] = useState(null);

  const toggleDescription = (index) => {
    setVisibleDescription(visibleDescription === index ? null : index);
  };

  return (
    <div className='blog-container'>
      {blogPosts.map((item, index) => (
        <div key={index} className='blog-cart'>
          <img src={item.image} alt={item.title} />
          <div className='blog-info'>
            <h2>{item.title}</h2>
            <p className='blog-date'>{item.date}</p>
            <button 
              className='show-description-btn' 
              onClick={() => toggleDescription(index)}
            >
              {visibleDescription === index ? "Read Less" : "Read More"}
            </button>
            {visibleDescription === index && <p className="blog-description">{item.description}</p>}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Blog;
