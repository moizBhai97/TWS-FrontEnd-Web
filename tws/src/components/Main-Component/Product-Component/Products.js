import React from 'react';
import Product from './Product';

import './Product-Component.css';

const ProductList = ({ products }) => {
    return (
      <div className="product-list">
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    );
};

export default ProductList;
