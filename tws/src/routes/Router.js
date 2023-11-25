// routes.js
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../components/Home';
import AboutUs from '../components/AboutUs';
import ProductContainer from '../components/Main-Component/MainContainer';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<ProductContainer />} />
      <Route path="/about-us" element={<AboutUs />} />
    </Routes>
  );
};

export default AppRoutes;