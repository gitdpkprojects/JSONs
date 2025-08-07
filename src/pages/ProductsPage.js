import React from 'react';
import ProductsSection from '../components/ProductsSection';

const ProductsPage = () => {
  return (
    <div style={{ paddingTop: '2rem' }}>
      <div className="container">
        <div className="section-header">
          <h1>Our Products</h1>
          <p>Browse our complete range of professional irrigation products</p>
        </div>
      </div>
      <ProductsSection />
    </div>
  );
};

export default ProductsPage;