import React, { useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import products from '../data/product';
import { Product } from '../types';
import { CartContext } from '../Components/CartContext';
import './ProductDetail.css';

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const product = products.find((p: Product) => p.id === Number(id));
  const cartContext = useContext(CartContext);

  if (!product) {
    return (
      <div className="product-detail">
        <h2>Product not found.</h2>
        <button onClick={() => navigate(-1)} className="back-btn">Back</button>
      </div>
    );
  }

  const handleAddToCart = () => {
    if (cartContext) {
      cartContext.addToCart(product);
      alert(`${product.name} added to cart!`);
    }
  };

  return (
    <div className="product-detail">
      <button onClick={() => navigate(-1)} className="back-btn">← Back</button>
      <div className="detail-container">
        <img src={product.image} alt={product.name} className="detail-image" />
        <div className="detail-info">
          <h1 className="product-title">{product.name}</h1>
          <p className="product-description">{product.description}</p>
          <p className="product-price">${product.price}</p>
          <button onClick={handleAddToCart} className="add-to-cart-btn">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
