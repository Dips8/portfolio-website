import React, { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import './FAQThreeColumnFlex.css';

const faqData = {
  General: [
    { question: 'What services do you offer?', answer: 'We offer web design, branding, and digital marketing services.' },
    { question: 'Where is your team located?', answer: 'We are a remote-first company with global talent.' },
    { question: 'Do you provide SEO?', answer: 'Yes, we offer technical and content SEO services.' },
    { question: 'Can you handle eCommerce?', answer: 'Yes, we work with Shopify and WooCommerce.' },
     { question: 'What services do you offer?', answer: 'We offer web design, branding, and digital marketing services.' },
    { question: 'Where is your team located?', answer: 'We are a remote-first company with global talent.' },
    { question: 'Do you provide SEO?', answer: 'Yes, we offer technical and content SEO services.' },
    { question: 'Can you handle eCommerce?', answer: 'Yes, we work with Shopify and WooCommerce.' },
        { question: 'Can you handle eCommerce?', answer: 'Yes, we work with Shopify and WooCommerce.' },
            { question: 'What tech stacks do you use?', answer: 'We work with React, Node.js, WordPress, and more.' },


  ],
  Pricing: [
    { question: 'Do you offer fixed pricing?', answer: 'Yes, we offer both fixed packages and custom quotes.' },
    { question: 'Is there a nonprofit discount?', answer: 'Yes, 10% off for nonprofits.' },
    { question: 'Do you charge hourly?', answer: 'We prefer fixed cost but hourly is available.' },
    { question: 'Are there any hidden fees?', answer: 'No, all costs are upfront and transparent.' },
       { question: 'Do you offer fixed pricing?', answer: 'Yes, we offer both fixed packages and custom quotes.' },
    { question: 'Is there a nonprofit discount?', answer: 'Yes, 10% off for nonprofits.' },
    { question: 'Do you charge hourly?', answer: 'We prefer fixed cost but hourly is available.' },
    { question: 'Are there any hidden fees?', answer: 'No, all costs are upfront and transparent.' },
        { question: 'Can you handle eCommerce?', answer: 'Yes, we work with Shopify and WooCommerce.' },
            { question: 'What tech stacks do you use?', answer: 'We work with React, Node.js, WordPress, and more.' },



  ],
  Technical: [
    { question: 'Do you provide hosting?', answer: 'We help set up reliable hosting via third-party providers.' },
    { question: 'Can I update the site myself?', answer: 'Yes, we use CMS platforms that are easy to manage.' },
    { question: 'Do you offer maintenance?', answer: 'Yes, monthly maintenance plans are available.' },
    { question: 'What tech stacks do you use?', answer: 'We work with React, Node.js, WordPress, and more.' },
     { question: 'Do you provide hosting?', answer: 'We help set up reliable hosting via third-party providers.' },
    { question: 'Can I update the site myself?', answer: 'Yes, we use CMS platforms that are easy to manage.' },
    { question: 'Do you offer maintenance?', answer: 'Yes, monthly maintenance plans are available.' },
    { question: 'What tech stacks do you use?', answer: 'We work with React, Node.js, WordPress, and more.' },
        { question: 'Can you handle eCommerce?', answer: 'Yes, we work with Shopify and WooCommerce.' },
            { question: 'What tech stacks do you use?', answer: 'We work with React, Node.js, WordPress, and more.' },


  ],
};

const FAQThreeColumnFlex = () => {
  const [activeTab, setActiveTab] = useState('General');
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = faqData[activeTab];
  const mid = Math.ceil(faqs.length / 2);
  const firstHalf = faqs.slice(0, mid);
  const secondHalf = faqs.slice(mid);

  return (
    <div className="faq-flex-wrapper">
      {/* Column 1 */}
      <div className="faq-section left-section">
        <h2>FAQs</h2>
        <p>
          Explore answers to common questions about our services, pricing, and technical support.
        </p>
        <button className="faq-button">Contact Support</button>
      </div>

      {/* Column 2 */}
      <div className="faq-section middle-section">
        <div className="faq-tabs">
          {Object.keys(faqData).map((tab) => (
            <button
              key={tab}
              className={`tab-btn ${tab === activeTab ? 'active' : ''}`}
              onClick={() => {
                setActiveTab(tab);
                setOpenIndex(null);
              }}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="faq-accordion">
          {firstHalf.map((item, index) => (
            <div className="accordion-item" key={index}>
              <div className="accordion-question" onClick={() => toggleAccordion(index)}>
                <h4>{item.question}</h4>
                <FaChevronDown
                  className={`chevron-icon ${openIndex === index ? 'rotate' : ''}`}
                />
              </div>
              {openIndex === index && <p className="accordion-answer">{item.answer}</p>}
            </div>
          ))}
        </div>
      </div>

      {/* Column 3 */}
      <div className="faq-section right-section">
        <div className="faq-accordion">
          {secondHalf.map((item, index) => {
            const actualIndex = index + firstHalf.length;
            return (
              <div className="accordion-item" key={actualIndex}>
                <div className="accordion-question" onClick={() => toggleAccordion(actualIndex)}>
                  <h4>{item.question}</h4>
                  <FaChevronDown
                    className={`chevron-icon ${openIndex === actualIndex ? 'rotate' : ''}`}
                  />
                </div>
                {openIndex === actualIndex && (
                  <p className="accordion-answer">{item.answer}</p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FAQThreeColumnFlex;
