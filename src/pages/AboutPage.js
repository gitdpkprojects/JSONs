import React from 'react';
import AboutSection from '../components/AboutSection';

const AboutPage = () => {
  return (
    <div style={{ paddingTop: '2rem' }}>
      <div className="container">
        <div className="section-header">
          <h1>About AquaFlow Irrigation</h1>
          <p>Learn more about our company and commitment to quality irrigation solutions</p>
        </div>
      </div>
      <AboutSection />
    </div>
  );
};

export default AboutPage;