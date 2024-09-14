import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <h1>About Smart Patient Card</h1>
      <div className="about-content">
        <p>
          The Smart Patient Card is a modern solution that allows patients to manage and access their health data seamlessly. With a user-friendly interface and robust security measures, our platform ensures that medical records are always available, while maintaining the privacy and integrity of your information.
        </p>
        <h2>Our Mission</h2>
        <p>
          To provide patients and healthcare providers with a unified platform that enhances medical data accessibility, improves communication, and ensures that essential health information is always at your fingertips.
        </p>
        <h2>Why Choose Us?</h2>
        <ul>
          <li>Secure and easy-to-access health records</li>
          <li>Real-time updates of patient data</li>
          <li>Modern, responsive, and user-friendly interface</li>
          <li>24/7 access to your personal health information</li>
        </ul>
      </div>
    </div>
  );
};

export default About;
