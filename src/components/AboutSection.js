import React from 'react';

const AboutSection = () => {
  const stats = [
    { value: '5000+', label: 'Systems Installed' },
    { value: '15+', label: 'Years Experience' },
    { value: '98%', label: 'Customer Satisfaction' }
  ];

  const features = [
    { icon: 'fas fa-medal', title: 'Premium Quality', desc: 'Only the highest quality components from trusted manufacturers' },
    { icon: 'fas fa-leaf', title: 'Water Efficient', desc: 'Eco-friendly systems that conserve water while maintaining beautiful landscapes' },
    { icon: 'fas fa-headset', title: 'Expert Support', desc: 'Professional installation and ongoing support from certified technicians' }
  ];

  return (
    <section className="about" id="about" style={{ padding: '4rem 0', backgroundColor: '#F8F9FA' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
          <div>
            <h2>Why Choose AquaFlow Irrigation?</h2>
            <p style={{ color: '#6C757D', marginBottom: '2rem' }}>
              With over 15 years of experience in the irrigation industry, we provide top-quality sprinkler systems and components that ensure your landscape stays healthy and beautiful year-round.
            </p>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem', margin: '2rem 0' }}>
              {stats.map((stat, index) => (
                <div key={index} style={{ textAlign: 'center' }}>
                  <h3 style={{ fontSize: '1.875rem', color: '#2E8B57', marginBottom: '0.5rem' }}>{stat.value}</h3>
                  <p style={{ color: '#6C757D', fontWeight: 500, margin: 0 }}>{stat.label}</p>
                </div>
              ))}
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {features.map((feature, index) => (
                <div key={index} style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                  <i className={feature.icon} style={{ fontSize: '1.25rem', color: '#2E8B57', marginTop: '0.5rem' }}></i>
                  <div>
                    <h4 style={{ marginBottom: '0.5rem', color: '#212529' }}>{feature.title}</h4>
                    <p style={{ margin: 0, fontSize: '0.875rem', color: '#6C757D' }}>{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ 
              width: '100%', 
              height: '400px', 
              background: 'linear-gradient(135deg, #2E8B57 0%, #20B2AA 100%)',
              borderRadius: '0.75rem', 
              display: 'flex', 
              flexDirection: 'column', 
              alignItems: 'center', 
              justifyContent: 'center', 
              color: 'white', 
              textAlign: 'center' 
            }}>
              <i className="fas fa-seedling" style={{ fontSize: '4rem', marginBottom: '1rem' }}></i>
              <p style={{ fontSize: '1.125rem', fontWeight: 500, margin: 0 }}>Beautiful landscapes start with proper irrigation</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;