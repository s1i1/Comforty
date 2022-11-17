import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { HomePage } from './home';
import { ShopPage } from './shop';
import { ProductPage } from './product';

export const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/shop" element={<ShopPage />} />
      <Route path="/product" element={<ProductPage />} />
    </Routes>
  );
};
