// src/components/ProductList.tsx
import React from 'react';
import ProductCard from './ProductCard';
import products from '../data/product';
import { Product } from '../types';
import './ProductList.css';

const ProductList: React.FC = () => {
  return (
    <section className="product-list">
      {products.map((product: Product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </section>
  );
};

export default ProductList;
