import React from 'react';

const Category = ({ category, onSelectCategory, isActive }) => {
  return (
    <div onClick={() => onSelectCategory(category)} className={`category ${isActive ? 'active' : ''}`}>
      {category}
    </div>
  );
};

export default Category;