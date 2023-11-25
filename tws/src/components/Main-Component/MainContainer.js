import React, { useState, useRef, useEffect } from 'react';
import ProductList from './Product-Component/Products';
import ImageSlider from './ImageSlider';
import Categories from './Category-Component/Categories';

import './Main-Component.css';

const ProductContainer = () => {
    const categoryRefs = useRef({});

    const products = [
      { id: 1, image: '/assets/images/image.jpg', description: 'Product 1', price: 4.99, category: 'Category 1' },
      { id: 2, image: '/assets/images/image.jpg', description: 'Product 2', price: 9.99, category: 'Category 1' },
      { id: 3, image: '/assets/images/image.jpg', description: 'Product 3', price: 14.99, category: 'Category 1' },
      { id: 4, image: '/assets/images/image.jpg', description: 'Product 4', price: 19.99, category: 'Category 1' },
      { id: 5, image: '/assets/images/image.jpg', description: 'Product 5', price: 24.99, category: 'Category 1' },
      { id: 6, image: '/assets/images/image.jpg', description: 'Product 6', price: 29.99, category: 'Category 1' },
      { id: 6, image: '/assets/images/image.jpg', description: 'Product 6', price: 29.99, category: 'Category 2' },
      { id: 7, image: '/assets/images/image.jpg', description: 'Product 7', price: 34.99, category: 'Category 2' },
      { id: 8, image: '/assets/images/image.jpg', description: 'Product 8', price: 39.99, category: 'Category 2' },
      { id: 9, image: '/assets/images/image.jpg', description: 'Product 9', price: 44.99, category: 'Category 3' },
      { id: 10, image: '/assets/images/image.jpg', description: 'Product 10', price: 49.99, category: 'Category 3' },
      { id: 11, image: '/assets/images/image.jpg', description: 'Product 11', price: 54.99, category: 'Category 3' },
      { id: 12, image: '/assets/images/image.jpg', description: 'Product 12', price: 59.99, category: 'Category 3' },
      { id: 13, image: '/assets/images/image.jpg', description: 'Product 13', price: 64.99, category: 'Category 4'},
      { id: 14, image: '/assets/images/image.jpg', description: 'Product 14', price: 69.99, category: 'Category 5' },
      { id: 15, image: '/assets/images/image.jpg', description: 'Product 15', price: 74.99, category: 'Category 6' },
      { id: 16, image: '/assets/images/image.jpg', description: 'Product 16', price: 79.99, category: 'Category 7'},
      { id: 17, image: '/assets/images/image.jpg', description: 'Product 17', price: 84.99, category: 'Category 8' },
      { id: 18, image: '/assets/images/image.jpg', description: 'Product 18', price: 89.99, category: 'Category 9'},
      { id: 19, image: '/assets/images/image.jpg', description: 'Product 19', price: 94.99, category: 'Category 10' },
      { id: 20, image: '/assets/images/image.jpg', description: 'Product 20', price: 99.99, category: 'Category 11'},
      { id: 21, image: '/assets/images/image.jpg', description: 'Product 21', price: 104.99, category: 'Category 12' },
      { id: 22, image: '/assets/images/image.jpg', description: 'Product 22', price: 109.99, category: 'Category 13' },
      { id: 23, image: '/assets/images/image.jpg', description: 'Product 23', price: 114.99, category: 'Category 14' },
    ];


    const categories = [...new Set(products.map((product) => product.category))];

    const handleSelectCategory = (category) => {
      if (categoryRefs.current[category]) {
        window.scrollTo({
          top: categoryRefs.current[category].offsetTop - 200,
          behavior: 'smooth',
        });
      }
    };

    return (
      <div className="main-container">
        <ImageSlider />
        <Categories categories={categories} onSelectCategory={handleSelectCategory} />
        <h2>Our Products</h2>
        {categories.map((category) => (
          <div key={category} ref={(ref) => (categoryRefs.current[category] = ref)}>
            <h3>{category}</h3>
            <ProductList
              products={products.filter((product) => product.category === category)}
            />
          </div>
        ))}
      </div>
    );
};

export default ProductContainer;