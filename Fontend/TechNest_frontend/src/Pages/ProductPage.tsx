import React, { useState } from 'react';
import ProductCard from '../Components/ProductCard';
import products from '../data/product';
import { Product } from '../types';
import './ProductPage.css';

const ProductsPage: React.FC = () => {
  const [nameFilter, setNameFilter] = useState<string>('');
  const [priceFilter, setPriceFilter] = useState<number | ''>('');

  const handleNameFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNameFilter(e.target.value);
  };

  const handlePriceFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPriceFilter(value === '' ? '' : Number(value));
  };

  // Filter products based on name and price
  const filteredProducts = products.filter((product: Product) => {
    const matchesName = product.name.toLowerCase().includes(nameFilter.toLowerCase());
    const matchesPrice = priceFilter === '' || product.price <= priceFilter;
    return matchesName && matchesPrice;
  });

  return (
    <div className="products-page">
      <h1>Products</h1>
      <div className="filters">
        <div className="filter">
          <label htmlFor="nameFilter">Filter by name:</label>
          <input
            type="text"
            id="nameFilter"
            value={nameFilter}
            onChange={handleNameFilterChange}
            placeholder="Search by name..."
          />
        </div>
        <div className="filter">
          <label htmlFor="priceFilter">Max price:</label>
          <input
            type="number"
            id="priceFilter"
            value={priceFilter}
            onChange={handlePriceFilterChange}
            placeholder="Enter maximum price..."
          />
        </div>
      </div>
      <div className="products-list">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product: Product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <p>No products match your filter criteria.</p>
        )}
      </div>
    </div>
  );
};

export default ProductsPage;
