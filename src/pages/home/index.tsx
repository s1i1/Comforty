import React from 'react';
import { MainSlider } from 'widgets/main-slider';
import { FeaturesBlock } from 'widgets/features-block';
import { CompaniesLogo } from 'widgets/companies-logo';
import { ProductCard } from 'features/product-card';
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

      <ProductCard headerTitle="Featured Products" searchTag="featured" />

      <TopCategories />
      <div className={styles.our__products}>
        <OurProducts />
      </div>

      <AboutUs />

      <ProductCard headerTitle="Recently Added" searchTag="newest" />
    </div>
  );
};
