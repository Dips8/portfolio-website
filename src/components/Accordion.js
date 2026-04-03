import React, { useState } from 'react';
import './AccordionColumns.css';
import { FaChevronDown } from 'react-icons/fa';

const data = [
  {
    title: 'Not-For-Profit',
    shortText: 'All NFPs receive 10% discount as a token of our support',
    fullText: 'Brand Vision proudly supports impactful organizations by offering discounts to nonprofits. Our tailored assistance enhances their reach and impact. Our team of developers and designers works with each client to create a website that truly represents their goals, fostering pride in global sharing.',
    link: '/not-for-profit-details'
  },
  {
    title: 'Small Businesses',
    shortText: 'Custom solutions to help small businesses grow',
    fullText: 'We collaborate with small businesses to deliver solutions that are scalable, affordable, and visually appealing. Our creative process is designed to suit your business goals.',
    link: '/small-business-details'
  },
  {
    title: 'Startups',
    shortText: 'Empowering startups with affordable branding',
    fullText: 'Our startup plans are built to offer fast and lean digital branding so you can launch your ideas with confidence and clarity in a competitive market.',
    link: '/startup-details'
  },
  {
    title: 'Educational Institutions',
    shortText: 'Support for learning-driven organizations',
    fullText: 'We provide websites and branding for schools, colleges, and ed-tech companies to help them communicate and grow their educational impact.',
    link: '/education-details'
  },
  {
    title: 'E-commerce',
    shortText: 'Solutions to boost online sales and brand reach',
    fullText: 'From beautiful storefronts to optimized checkout experiences, we craft complete e-commerce platforms tailored to your products and customers.',
    link: '/ecommerce-details'
  },
  {
    title: 'Healthcare',
    shortText: 'Digital transformation for clinics and hospitals',
    fullText: 'We help healthcare providers build trust and increase patient engagement through informative, accessible, and secure digital experiences.',
    link: '/healthcare-details'
  },
  {
    title: 'Personal Brands',
    shortText: 'Helping individuals build their digital presence',
    fullText: 'From influencers to authors and speakers, we design personal websites that express your story, style, and offerings in a compelling way.',
    link: '/personal-brand-details'
  },
  {
    title: 'Agencies',
    shortText: 'Design and dev support for growing agencies',
    fullText: 'We partner with agencies to deliver white-label services and scalable design/development solutions with quick turnaround.',
    link: '/agency-details'
  },
  {
    title: 'Corporate',
    shortText: 'Professional websites to strengthen brand image',
    fullText: 'We create corporate websites that reflect professionalism, trust, and innovation—enhancing brand perception and stakeholder confidence.',
    link: '/corporate-details'
  },
];

const AccordionGrid = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="grid-container">
      {data.map((item, index) => (
        <div className="grid-block" key={index}>
          <div className="block-header" onClick={() => toggle(index)}>
            <h3>{item.title}</h3>
            <FaChevronDown
              className={`chevron-icon ${activeIndex === index ? 'rotate' : ''}`}
            />
          </div>
          <p className="short-text">{item.shortText}</p>
          {activeIndex === index && (
            <div className="expanded-section">
              <p className="full-text">{item.fullText}</p>
              <a
                href={item.link}
                className="learn-more-btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                Read More
              </a>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default AccordionGrid;
