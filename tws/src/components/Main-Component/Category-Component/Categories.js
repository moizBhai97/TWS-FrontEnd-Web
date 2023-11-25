import React, { useEffect, useState, useRef } from 'react';
import Category from './Category';

import './Category-Component.css';

const Categories = ({ categories, onSelectCategory}) => {

  const [isScrolled, setIsScrolled] = useState(false);
  const [isFixed, setIsFixed] = useState(false);
  const [activeCategory, setActiveCategory] = useState(null);
  const categoriesRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (categoriesRef.current) {
        const categoriesTop = categoriesRef.current.offsetTop;
        setIsScrolled(scrollTop > categoriesTop - 80); 
        setIsFixed(scrollTop > categoriesTop - 80);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleSelectCategory = (category) => {
    setActiveCategory(category);
    onSelectCategory(category);
  }

  return (
    <div ref={categoriesRef} className={`categories ${isScrolled && 'scrolled'} ${isFixed && 'fixed'}`}>
      <div className="category-scroll">
        {categories.map((category) => (
          <Category key={category} category={category} onSelectCategory={handleSelectCategory} isActive={activeCategory === category} />
        ))}
      </div>
    </div>
  );
};

export default Categories;
