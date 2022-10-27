import React from 'react';
import { MainSlider } from 'widgets/main-slider';
import { Header } from 'widgets/header';
import { FeaturesBlock } from 'widgets/features-block';
import { CompaniesLogo } from 'widgets/companies-logo';
import { ProductCard } from 'entities/product-card';
import { TopCategories } from 'entities/top-categories';
import { OurProducts } from 'entities/our-products';
import AboutUs from 'entities/about-us/ui';
import styles from './styles.module.scss';

export const HomePage = () => {
  return (
    <div className={styles.homepage}>
      <div className={styles.header}>
        <Header />
      </div>
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
