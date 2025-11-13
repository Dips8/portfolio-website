import React from 'react';
import './BlogPage.css';

function BlogPage() {
  const posts = [
    {
      id: 1,
      title: 'Boost Your Online Presence',
      description: 'Discover strategies to improve your website visibility and attract more customers.',
      image: '/images/feature-img.webp',
      date: 'July 3, 2025',
      time: '2 min read',
    },
    {
      id: 2,
      title: 'Creative Marketing Tips',
      image: '/images/blog.webp',
      date: 'July 2, 2025',
    },
    {
      id: 3,
      title: 'Social Media Growth Hacks',
      image: '/images/blog.webp',
      date: 'July 1, 2025',
    },
    {
      id: 4,
      title: 'Social Media Growth Hacks',
      image: '/images/blog.webp',
      date: 'July 1, 2025',
    },
  ];

  return (
    <section className="blog-page-section">
          <div className="blog-header">
    <div className="logo">
  <img src="/images/logo.png" alt="Logo" className="logo-img" />
</div>
    <button className="insights-btn">View Insights</button>
  </div>
  
  {/* Separator Line */}
  <div className="separator-line"></div>
      <div className="blog-content">
        {/* Left Side - Only One Blog */}
        <div className="main-blog">
          <img src={posts[0].image} alt={posts[0].title} className="feature-image" />
          <p className="blog-date">{posts[0].date} • {posts[0].time}</p>
          <h2 className="blog-title">{posts[0].title}</h2>
          <p className="blog-description">{posts[0].description}</p>
        </div>

        {/* Right Side - Sidebar */}
        <div className="sidebar">
          <h3 className="sidebar-title">More Posts</h3>
          {posts.slice(1).map((post) => (
            <div className="sidebar-post" key={post.id}>
              <img src={post.image} alt={post.title} className="sidebar-thumbnail" />
              <div>
                <h4 className="sidebar-post-title">{post.title}</h4>
                <p className="sidebar-post-time">{post.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BlogPage;
