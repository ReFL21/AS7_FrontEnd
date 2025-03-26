// src/Pages/ShoppingCart.tsx
import React, { useContext } from 'react';
import { CartContext } from '../Components/CartContext';
import './ShoppingCart.css';

const ShoppingCart: React.FC = () => {  
  const cartContext = useContext(CartContext);

  if (!cartContext) {
    return <div>Cart context is not available.</div>;
  }

  const { cartItems, removeFromCart, clearCart } = cartContext;

  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="shopping-cart">
      <h1>Your Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your shopping cart is empty.</p>
      ) : (
        <>
          <ul className="cart-items">
            {cartItems.map(item => (
              <li key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} className="cart-item-image" />
                <div className="cart-item-info">
                  <h2>{item.name}</h2>
                  <p>Price: ${item.price}</p>
                  <p>Quantity: {item.quantity}</p>
                  <button onClick={() => removeFromCart(item.id)} className="remove-btn">
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <div className="cart-summary">
            <h2>Total: ${totalPrice.toFixed(2)}</h2>
            <button onClick={clearCart} className="clear-btn">
              Clear Cart
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default ShoppingCart;
