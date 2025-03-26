// src/data/products.ts
import { Product } from '../types';

const products: Product[] = [
  {
    id: 1,
    name: 'Smartphone X',
    description: 'The latest smartphone with cutting-edge features.',
    price: 999,
    image: 'https://via.placeholder.com/300?text=Smartphone+X',
  },
  {
    id: 2,
    name: 'Laptop Pro',
    description: 'High performance laptop designed for professionals.',
    price: 1499,
    image: 'https://via.placeholder.com/300?text=Laptop+Pro',
  },
  {
    id: 3,
    name: 'Wireless Earbuds',
    description: 'Experience true wireless freedom with superior sound.',
    price: 199,
    image: 'https://via.placeholder.com/300?text=Wireless+Earbuds',
  },
];

export default products;
