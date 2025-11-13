import React from 'react';
import Slider from 'react-slick';
import './BlogSlider.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function BlogSlider() {
  const posts = [
    { id: 1, title: 'Boost Your Online Presence', timeAgo: '20 hr ago' },
    { id: 2, title: 'Creative Marketing Tips', timeAgo: '2 days ago' },
    { id: 3, title: 'Social Media Growth Hacks', timeAgo: '5 hr ago' },
    { id: 4, title: 'SEO Best Practices', timeAgo: '1 week ago' },
    { id: 5, title: 'Content Writing Tips', timeAgo: '3 days ago' },
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
  <section className="blog-slider-section">
  <div className="slider-header">
    <button className="breaking-news-btn">Breaking News</button>
    <a href="#" className="view-all-link">
      View All <span className="arrow-icon">→</span>
    </a>
  </div>

  <Slider {...sliderSettings}>
    {posts.map((post) => (
      <div key={post.id} className="blog-slide">
        <p className="blog-time">{post.timeAgo}</p>
        <h3 className="blog-title">{post.title}</h3>
      </div>
    ))}
  </Slider>
</section>
  );
}

export default BlogSlider;
