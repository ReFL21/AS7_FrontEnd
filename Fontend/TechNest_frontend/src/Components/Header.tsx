// src/components/Header.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // optional: if you want to isolate nav styles

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="logo">Tech Store</div>
      <nav className="nav">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/products">Products</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
          <li><Link to="/cart">Cart</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
