import React from 'react';
import { addToCart } from '../../../reduxes/CartRedux';
import { useDispatch } from 'react-redux';

const Product = ({ product }) => {
    const dispatch = useDispatch();

    const { id, image, description, price } = product;

    const onAddToCart = (product) => {
        dispatch(addToCart(product));
    }

    return (
        <div className="product">
            <div className="heart-icon">❤️</div>
            <img src={image} alt={description} className="product-image" />
            <h3 className="product-name">{description}</h3>
            <p className="product-description">{description}</p>
            <div className="line"></div>
            <p className="product-price">${price}</p>
            <button onClick={() => onAddToCart(product)} className="add-to-cart-btn">
                Add to Cart
            </button>
        </div>
    );
};

export default Product;
