

// Cart.js
import React, { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, removeFromCart, toggleCart, clearCart, removeItemFromCart } from '../../reduxes/CartRedux';
import './Cart.css';

const Cart = () => {
  const dispatch = useDispatch();
  const items = useSelector(state => state.cart.items);

  const cartRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (cartRef.current && !cartRef.current.contains(event.target)) {
        document.body.style.overflow = 'auto';
        dispatch(toggleCart());
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dispatch]);


  const handleAddClick = (item) => {
    dispatch(addToCart(item));
  };

  const handleRemoveClick = (item) => {
    dispatch(removeFromCart(item));
  };

  const handleRemoveItem = (item) => {
    dispatch(removeItemFromCart(item));
  }

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const roundOff = (num) => {
    return Math.round((num + Number.EPSILON) * 100) / 100;
  }
  const subtotal = roundOff(items.reduce((total, item) => total + item.price * item.quantity, 0));
  const deliveryCharges = 10; // set your delivery charges
  const grandTotal = roundOff(subtotal + deliveryCharges);

  if (items.length === 0) {
    return (
      <div className="cart" ref={cartRef}>
        <h2>Your Cart</h2>
        <p>No items in cart</p>
      </div>
    );
  }

  return (
    <div className="cart" ref={cartRef}>
      <div className="cart-header">
        <h2>Your Cart</h2>
        <span className="clear-cart" onClick={handleClearCart}>Clear Cart</span>
      </div>
      {items.map(item => (
        <div key={item.id} className="cart-item">
          <img className="cart-item-image" src={item.image} alt={item.name} />
          <div className="cart-item-info">
            <div className="cart-item-name">{item.name}</div>
            <div className="cart-item-description">{item.description}</div>
            <div className="cart-item-price">{item.price}</div>
            <div className="cart-item-actions">
              <button className="cart-item-button" onClick={() => handleRemoveClick(item)}>-</button>
              <span className="cart-item-quantity">{item.quantity}</span>
              <button className="cart-item-button" onClick={() => handleAddClick(item)}>+</button>
            </div>
          </div>
          <img className="cart-item-delete" src="/assets/images/delete.jpg" alt="Delete" onClick={() => handleRemoveItem(item)} />
        </div>
      ))}
      <div className="cart-summary">
        <div>Subtotal: {subtotal}</div>
        <div>Delivery Charges: {deliveryCharges}</div>
        <div>Grand Total: {grandTotal}</div>
      </div>
      <button>Checkout</button>
    </div>
  );
};

export default Cart;