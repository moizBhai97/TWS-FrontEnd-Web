

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
      <h2>Your Cart</h2>
      <button onClick={handleClearCart}>Clear Cart</button>
      {items.map(item => (
        <div key={item.id} className="cart-item">
          <img src={item.image} alt={item.name} />
          <div>{item.description}</div>
          <div>{item.price}</div>
          <div>
            <button onClick={() => handleRemoveClick(item)}>-</button>
            <span>{item.quantity}</span>
            <button onClick={() => handleAddClick(item)}>+</button>
          </div>
          <img src="/assets/images/delete.jpg" alt="Delete" onClick={() => handleRemoveItem(item)} />
        </div>
      ))}
      <div>Subtotal: {subtotal}</div>
      <div>Delivery Charges: {deliveryCharges}</div>
      <div>Grand Total: {grandTotal}</div>
      <button>Checkout</button>
    </div>
  );
};

export default Cart;