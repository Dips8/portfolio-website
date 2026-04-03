import React from 'react';
import Slider from 'react-slick';
import './ClientsSection.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function ClientsSection() {
  const sliderClients = [
    '/images/client1.png',
    '/images/client2.png',
    '/images/client3.png',
    '/images/client4.png',
    '/images/client5.png',
  ];

  return (
    <section className="clients-section">
      <div className="clients-columns">
        {/* Left Column */}
        <div className="left-column">
          <h2>Our Recent Clients</h2>
          <button className="see-all-btn">See All</button>
          <div className="client-grid small-grid">
            <img src="/images/client1.png" alt="Client 1" />
            <img src="/images/client2.png" alt="Client 2" />
            <img src="/images/client3.png" alt="Client 3" />
            <img src="/images/client4.png" alt="Client 4" />
          </div>
        </div>

        {/* Right Column */}
        <div className="right-column">
          <div className="client-grid large-grid">
            {[...Array(8)].map((_, i) => (
              <img src={`/images/client${(i % 4) + 1}.png`} alt={`Client ${i + 1}`} key={i} />
            ))}
          </div>
        </div>
      </div>

      {/* Client Logos Slider */}
      <Slider
        dots={false}
        infinite={true}
        speed={500}
        slidesToShow={4}
        slidesToScroll={1}
        autoplay={true}
        autoplaySpeed={2000}
      >
        {sliderClients.map((client, index) => (
          <div key={index} className="slider-client">
            <img src={client} alt={`Client ${index + 1}`} />
          </div>
        ))}
      </Slider>
    </section>
  );
}

export default ClientsSection;
