import React from 'react';
import { MainSlider } from 'widgets/main-slider';
import { FeaturesBlock } from 'widgets/features-block';
import { CompaniesLogo } from 'widgets/companies-logo';
import { ProductCard } from 'entities/product-card';
import { TopCategories } from 'entities/top-categories';
import { OurProducts } from 'entities/our-products';
import { AboutUs } from 'widgets/about-us';

import styles from './styles.module.scss';

export const HomePage = () => {
  return (
    <div className={styles.homepage}>
      <MainSlider />

      <FeaturesBlock />

      <CompaniesLogo />

      <ProductCard headerTitle="Featured Products" />

      <TopCategories />

      <OurProducts />

      <AboutUs />

      <ProductCard headerTitle="Recently Added" />
    </div>
  );
};
