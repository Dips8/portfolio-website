// import React from 'react';
// import './featurework.css'; // We'll use this for plain CSS
// import './AboutUs.css'; // We'll use this for plain CSS

// function Featurework() {
//   return (
//    <div className="aboutus-container">
//       {/* Left Column - Sticky */}
//       <div className="left-column">
//         <button className="skill-btn">Our Services</button>
//         <h3 className='services-heading'>Customized & creative marketing solutions for businesses</h3>
//         <div className="image-box">
//   <img
//     src="/images/aboutus-img.jpg"
//     alt="Section Visual"
//     className="image"
//   />
//   <div className="content-overlay">
//     <h2>Leaside Blvd</h2>
//     <button className="overlay-btn">Read Our Case</button>
//   </div>

// </div>
// <div>
// <button className="btn btn-primary request">Request a Proposal</button>
// </div>
// <div>
//         <button className="skill-btn">Contact Us</button>
// </div>
// </div>
//       <div className="right-column">


//            <div className="image-overlay-container">
//       <img
//         src="/images/work-1.webp"
//         alt="Section Visual"
//         className="background-image"
//       />
//       <div className="overlay-content">
//         <div className="left-side">
//           <h2>Your Heading Here</h2>
//           <p>Your short description or text goes here.</p>
//           <button className="left-button">Learn More</button>
//         </div>
//         <div className="right-side">
//           <button className="right-button">Action</button>
//         </div>
//       </div> 
//       </div>

//      <div className="image-overlay-container">
//       <img
//         src="/images/work-1.webp"
//         alt="Section Visual"
//         className="background-image"
//       />
//       <div className="overlay-content">
//         <div className="left-side">
//           <h2>Your Heading Here</h2>
//           <p>Your short description or text goes here.</p>
//           <button className="left-button">Learn More</button>
//         </div>
//         <div className="right-side">
//           <button className="right-button">Action</button>
//         </div>
//       </div> 
//       </div>
//   <div className="image-overlay-container">
//       <img
//         src="/images/work-1.webp"
//         alt="Section Visual"
//         className="background-image"
//       />
//       <div className="overlay-content">
//         <div className="left-side">
//           <h2>Your Heading Here</h2>
//           <p>Your short description or text goes here.</p>
//           <button className="left-button">Learn More</button>
//         </div>
//         <div className="right-side">
//           <button className="right-button">Action</button>
//         </div>
//       </div> 
//       </div>
//         <div className="image-overlay-container">
//       <img
//         src="/images/work-1.webp"
//         alt="Section Visual"
//         className="background-image"
//       />
//       <div className="overlay-content">
//         <div className="left-side">
//           <h2>Your Heading Here</h2>
//           <p>Your short description or text goes here.</p>
//           <button className="left-button">Learn More</button>
//         </div>
//         <div className="right-side">
//           <button className="right-button">Action</button>
//         </div>
//       </div> 
//       </div>
//         <div className="image-overlay-container">
//       <img
//         src="/images/work-1.webp"
//         alt="Section Visual"
//         className="background-image"
//       />
//       <div className="overlay-content">
//         <div className="left-side">
//           <h2>Your Heading Here</h2>
//           <p>Your short description or text goes here.</p>
//           <button className="left-button">Learn More</button>
//         </div>
//         <div className="right-side">
//           <button className="right-button">Action</button>
//         </div>
//       </div> 
//       </div>
//         <div className="image-overlay-container">
//       <img
//         src="/images/work-1.webp"
//         alt="Section Visual"
//         className="background-image"
//       />
//       <div className="overlay-content">
//         <div className="left-side">
//           <h2>Your Heading Here</h2>
//           <p>Your short description or text goes here.</p>
//           <button className="left-button">Learn More</button>
//         </div>
//         <div className="right-side">
//           <button className="right-button">Action</button>
//         </div>
//       </div> 
//       </div>



//       </div>
       
//         </div>


   
//   );
// }

// export default Featurework;

import React, { useEffect, useRef } from 'react';
import './featurework.css';
import './AboutUs.css';

function Featurework() {
  const containersRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          } else {
            entry.target.classList.remove('active');
          }
        });
      },
      { threshold: 0.2 }
    );

    containersRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      containersRef.current.forEach((el) => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  return (
    <div className="aboutus-container">
      {/* Left Column - Sticky */}
      <div className="left-column">
        <button className="skill-btn">Our Services</button>
        <h3 className="services-heading">
          Customized & creative marketing solutions for businesses
        </h3>
        <div className="image-box">
          <img
            src="/images/aboutus-img.jpg"
            alt="Section Visual"
            className="image"
          />
          <div className="content-overlay">
            <h2>Leaside Blvd</h2>
            <button className="overlay-btn">Read Our Case</button>
          </div>
        </div>
        <div>
          <button className="btn btn-primary request">Request a Proposal</button>
        </div>
        <div>
          <button className="skill-btn">Contact Us</button>
        </div>
      </div>

      <div className="right-column">
        {Array.from({ length: 6 }).map((_, idx) => (
          <div
            key={idx}
            className="image-overlay-container"
            ref={(el) => (containersRef.current[idx] = el)}
          >
            <img
              src="/images/work-1.webp"
              alt="Section Visual"
              className="background-image"
            />
            <div className="overlay-content">
              <div className="left-side">
                <h2>Your Heading Here</h2>
                <p>Your short description or text goes here.</p>
                <button className="left-button">Learn More</button>
              </div>
              <div className="right-side">
                <button className="right-button">Action</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Featurework;
