import React, { useState } from 'react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    propertyType: '',
    service: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you! Your quote request has been submitted. We\'ll contact you within 24 hours.');
    setFormData({ name: '', email: '', phone: '', propertyType: '', service: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className="contact" id="contact" style={{ padding: '4rem 0', backgroundColor: '#fff' }}>
      <div className="container">
        <div className="section-header">
          <h2>Get Your Free Quote Today</h2>
          <p>Contact us for a personalized irrigation solution</p>
        </div>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem' }}>
          <div>
            <h3 style={{ marginBottom: '2rem' }}>Contact Information</h3>
            
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', marginBottom: '2rem' }}>
              <i className="fas fa-map-marker-alt" style={{ fontSize: '1.25rem', color: '#2E8B57', marginTop: '0.5rem' }}></i>
              <div>
                <h4 style={{ marginBottom: '0.5rem' }}>Address</h4>
                <p style={{ margin: 0, color: '#6C757D' }}>123 Irrigation Way<br />Garden City, ST 12345</p>
              </div>
            </div>
            
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', marginBottom: '2rem' }}>
              <i className="fas fa-phone" style={{ fontSize: '1.25rem', color: '#2E8B57', marginTop: '0.5rem' }}></i>
              <div>
                <h4 style={{ marginBottom: '0.5rem' }}>Phone</h4>
                <p style={{ margin: 0, color: '#6C757D' }}>(555) 123-FLOW<br />(555) 123-3569</p>
              </div>
            </div>
            
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', marginBottom: '2rem' }}>
              <i className="fas fa-envelope" style={{ fontSize: '1.25rem', color: '#2E8B57', marginTop: '0.5rem' }}></i>
              <div>
                <h4 style={{ marginBottom: '0.5rem' }}>Email</h4>
                <p style={{ margin: 0, color: '#6C757D' }}>info@aquaflowirrigation.com<br />support@aquaflowirrigation.com</p>
              </div>
            </div>
            
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
              <i className="fas fa-clock" style={{ fontSize: '1.25rem', color: '#2E8B57', marginTop: '0.5rem' }}></i>
              <div>
                <h4 style={{ marginBottom: '0.5rem' }}>Business Hours</h4>
                <p style={{ margin: 0, color: '#6C757D' }}>Mon-Fri: 7:00 AM - 6:00 PM<br />Sat: 8:00 AM - 4:00 PM</p>
              </div>
            </div>
          </div>
          
          <div style={{ backgroundColor: '#F8F9FA', padding: '2rem', borderRadius: '0.75rem' }}>
            <form onSubmit={handleSubmit}>
              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Full Name</label>
                <input 
                  type="text" 
                  name="name" 
                  value={formData.name}
                  onChange={handleChange}
                  required
                  style={{ 
                    width: '100%', 
                    padding: '0.75rem 1rem', 
                    border: '2px solid #DEE2E6', 
                    borderRadius: '0.5rem',
                    fontSize: '1rem'
                  }}
                />
              </div>
              
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.5rem' }}>
                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Email</label>
                  <input 
                    type="email" 
                    name="email" 
                    value={formData.email}
                    onChange={handleChange}
                    required
                    style={{ 
                      width: '100%', 
                      padding: '0.75rem 1rem', 
                      border: '2px solid #DEE2E6', 
                      borderRadius: '0.5rem',
                      fontSize: '1rem'
                    }}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Phone</label>
                  <input 
                    type="tel" 
                    name="phone" 
                    value={formData.phone}
                    onChange={handleChange}
                    style={{ 
                      width: '100%', 
                      padding: '0.75rem 1rem', 
                      border: '2px solid #DEE2E6', 
                      borderRadius: '0.5rem',
                      fontSize: '1rem'
                    }}
                  />
                </div>
              </div>
              
              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Property Type</label>
                <select 
                  name="propertyType" 
                  value={formData.propertyType}
                  onChange={handleChange}
                  required
                  style={{ 
                    width: '100%', 
                    padding: '0.75rem 1rem', 
                    border: '2px solid #DEE2E6', 
                    borderRadius: '0.5rem',
                    fontSize: '1rem'
                  }}
                >
                  <option value="">Select Property Type</option>
                  <option value="residential">Residential</option>
                  <option value="commercial">Commercial</option>
                  <option value="municipal">Municipal</option>
                </select>
              </div>
              
              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Service Needed</label>
                <select 
                  name="service" 
                  value={formData.service}
                  onChange={handleChange}
                  required
                  style={{ 
                    width: '100%', 
                    padding: '0.75rem 1rem', 
                    border: '2px solid #DEE2E6', 
                    borderRadius: '0.5rem',
                    fontSize: '1rem'
                  }}
                >
                  <option value="">Select Service</option>
                  <option value="new-installation">New Installation</option>
                  <option value="repair">Repair Service</option>
                  <option value="maintenance">Maintenance</option>
                  <option value="upgrade">System Upgrade</option>
                  <option value="consultation">Consultation</option>
                </select>
              </div>
              
              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Project Details</label>
                <textarea 
                  name="message" 
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  placeholder="Tell us about your irrigation needs..."
                  style={{ 
                    width: '100%', 
                    padding: '0.75rem 1rem', 
                    border: '2px solid #DEE2E6', 
                    borderRadius: '0.5rem',
                    fontSize: '1rem',
                    resize: 'vertical'
                  }}
                />
              </div>
              
              <button 
                type="submit" 
                className="btn btn-primary"
                style={{ width: '100%' }}
              >
                Get Free Quote
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;