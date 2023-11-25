import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleCart } from '../reduxes/CartRedux';
import Cart from '../components/Cart-Component/Cart';
import './Nav.css';

const Nav = () => {
  const dispatch = useDispatch();
  const isCartOpen = useSelector(state => state.cart.isOpen);
  const cartNumber = useSelector(
    state => state.cart.items.reduce((total, item) => total + item.quantity, 0)
  );

  const handleCartClick = () => {
    document.body.style.overflow = 'hidden';
    dispatch(toggleCart());
  };

  return (
    <div>
      <nav className="nav">
        <img src="/assets/images/wrapspot.png" alt="Logo" className='logo' />
        <div className="delivery">
          <img src="/assets/images/location.png" alt="Location" className='image' />
          <span>Deliver to</span>
        </div>
        <div className="user-cart">
          <img src="/assets/images/user.png" alt="User" className='image' />
          <div className="cart-icon" onClick={handleCartClick}>
            <img src="/assets/images/cart.png" alt="Cart" className='image'/>
            <div className="cart-number">{cartNumber}</div>
          </div>
        </div>
      </nav>
      {isCartOpen && <div className="cart-back" ><Cart /></div>}
    </div>
  );
};

export default Nav;