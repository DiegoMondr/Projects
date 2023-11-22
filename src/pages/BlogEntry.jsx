import React from 'react';

const BlogEntry = ({ title, content, points }) => {
  return (
    <div className="blog-entry">
      <h2>{title}</h2>
      <p>{content}</p>
      <p>{points}</p>
      
    </div>
  );
};

export default BlogEntry;