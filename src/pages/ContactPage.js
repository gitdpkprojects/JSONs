import React from 'react';
import ContactSection from '../components/ContactSection';

const ContactPage = () => {
  return (
    <div style={{ paddingTop: '2rem' }}>
      <div className="container">
        <div className="section-header">
          <h1>Contact Us</h1>
          <p>Get in touch for a free consultation and quote</p>
        </div>
      </div>
      <ContactSection />
    </div>
  );
};

export default ContactPage;