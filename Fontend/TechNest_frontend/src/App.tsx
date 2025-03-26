// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Home from './Pages/Home';
import ProductsPage from './Pages/ProductPage';
import Footer from './Components/Footer';
import About from './Pages/AboutPage';
import { CartProvider } from './Components/CartContext';
import ShoppingCart from './Pages/ShoppingCart';
import ProductDetail from './Pages/ProductDetail';
import './App.css';


const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/products/:id" element={<ProductDetail />} />
            <Route path="/about" element={<About />} />
            <Route path="/cart" element={<ShoppingCart />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
