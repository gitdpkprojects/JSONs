import React from 'react';
import { services } from '../data/products';

const ServicesSection = () => {
  return (
    <section className="services" id="services" style={{ padding: '4rem 0', backgroundColor: '#fff' }}>
      <div className="container">
        <div className="section-header">
          <h2>Our Services</h2>
          <p>Professional installation and maintenance services</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem' }}>
          {services.map(service => (
            <div key={service.id} style={{ 
              backgroundColor: '#F8F9FA', 
              padding: '2rem', 
              borderRadius: '0.75rem', 
              textAlign: 'center' 
            }}>
              <div style={{ 
                width: '80px', 
                height: '80px', 
                background: 'linear-gradient(135deg, #2E8B57 0%, #20B2AA 100%)',
                borderRadius: '50%', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                margin: '0 auto 1rem' 
              }}>
                <i className={service.icon} style={{ fontSize: '1.5rem', color: 'white' }}></i>
              </div>
              <h3>{service.title}</h3>
              <p style={{ color: '#6C757D' }}>{service.description}</p>
              <ul style={{ listStyle: 'none', textAlign: 'left', paddingLeft: 0 }}>
                {service.features.map((feature, index) => (
                  <li key={index} style={{ padding: '0.25rem 0', color: '#6C757D', position: 'relative', paddingLeft: '1.5rem' }}>
                    <span style={{ position: 'absolute', left: 0, color: '#32CD32', fontWeight: 'bold' }}>✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;