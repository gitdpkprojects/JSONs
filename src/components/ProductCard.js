import React, { useState } from 'react';
import { motion } from 'framer-motion';
import '../styles/ProductCard.css';

const ProductCard = ({ product }) => {
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = () => {
    setIsAdded(true);
    
    // Show notification (you can implement a proper notification system)
    console.log(`${product.name} added to cart ($${product.price})`);
    
    // Reset button after 2 seconds
    setTimeout(() => {
      setIsAdded(false);
    }, 2000);
  };

  return (
    <motion.div 
      className="product-card"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <div className="product-image">
        <div className="product-placeholder">
          <i className={product.icon}></i>
        </div>
        {product.badge && (
          <div className="product-badge">{product.badge}</div>
        )}
      </div>
      
      <div className="product-info">
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        
        <div className="product-features">
          {product.features.map((feature, index) => (
            <span key={index}>{feature}</span>
          ))}
        </div>
        
        <div className="product-price">
          <span className="price">${product.price}</span>
          {product.oldPrice && (
            <span className="price-old">${product.oldPrice}</span>
          )}
        </div>
        
        <motion.button 
          className={`btn btn-primary btn-small ${isAdded ? 'added' : ''}`}
          onClick={handleAddToCart}
          whileTap={{ scale: 0.95 }}
          style={{
            backgroundColor: isAdded ? '#32CD32' : undefined
          }}
        >
          {isAdded ? 'Added!' : 'Add to Cart'}
        </motion.button>
      </div>
    </motion.div>
  );
};

export default ProductCard;