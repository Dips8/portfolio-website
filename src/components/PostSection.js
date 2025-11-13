import React from 'react';
import './PostSection.css';

function PostSection() {
  const posts = [
    {
      id: 1,
      image: '/images/blog.webp',
      date: 'July 1, 2025',
      category: 'Marketing',
      readingTime: '5 min',
      title: '10 Richest Female Tennis Players in the World: (A 2025 Net‑Worth Break Down)',
    },
    {
      id: 2,
      image: '/images/blog.webp',
      date: 'June 28, 2025',
      category: 'Business',
      readingTime: '3 min read',
      title: '10 Richest Female Tennis Players in the World: (A 2025 Net‑Worth Break Down)',

    },
    {
      id: 3,
      image: '/images/blog.webp',
      date: 'June 25, 2025',
      category: 'Social Media',
      readingTime: '4 min read',
      title: '10 Richest Female Tennis Players in the World: (A 2025 Net‑Worth Break Down)',

    },
    {
      id: 4,
      image: '/images/blog.webp',
      date: 'June 22, 2025',
      category: 'SEO',
      readingTime: '6 min read',
      title: '10 Richest Female Tennis Players in the World: (A 2025 Net‑Worth Break Down)',

    },
  ];

  return (
    <section className="post-section">
      {/* <h2 className="section-title">Latest Posts</h2> */}
      <div className="posts-container">
        {posts.map((post) => (
          <div className="post-card" key={post.id}>
            <img src={post.image} alt={post.title} className="post-image" />
            <div className="post-meta">
                <div>
              <span className="post-category">{post.category}</span>
              <span className="post-reading-time">{post.readingTime}</span>
              </div>
              <span className="post-date">{post.date}</span>

              <h3 className="post-title">{post.title}</h3>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default PostSection;
