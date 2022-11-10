import { Routes, Route } from 'react-router-dom';
import { HomePage } from './home';
import { ShopPage } from './shop';

export const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="shop" element={<ShopPage />} />
    </Routes>
  );
};
