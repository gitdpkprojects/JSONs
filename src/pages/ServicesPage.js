import React from 'react';
import ServicesSection from '../components/ServicesSection';

const ServicesPage = () => {
  return (
    <div style={{ paddingTop: '2rem' }}>
      <div className="container">
        <div className="section-header">
          <h1>Our Services</h1>
          <p>Professional irrigation services for every need</p>
        </div>
      </div>
      <ServicesSection />
    </div>
  );
};

export default ServicesPage;