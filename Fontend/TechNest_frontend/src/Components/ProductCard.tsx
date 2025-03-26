import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../types';
import './ProductCard.css';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} className="product-image" />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <div className="price-add">
        <span className="price">${product.price}</span>
        <Link to={`/products/${product.id}`} className="details-btn">
          View Details
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
