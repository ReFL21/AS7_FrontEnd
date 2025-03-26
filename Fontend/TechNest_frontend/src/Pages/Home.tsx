import React from 'react';
import ProductList from '../Components/ProductList';
import './Home.css';

const Home: React.FC = () => {
  return (
    <div className="home">
      <section className="hero">
        <h1>Welcome to Tech Store</h1>
        <p>Your one-stop shop for the latest tech products!</p>
        <button className="shop-btn">Shop Now</button>
      </section>
      <section className="featured-products">
        <h2>Featured Products</h2>
        <ProductList />
      </section>
    </div>
  );
};

export default Home;
