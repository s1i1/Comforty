import React from 'react';
import { MainSlider } from 'widgets/main-slider';
import { Header } from 'widgets/header';
import { FeaturesBlock } from 'widgets/features-block';
import styles from './styles.module.scss';
import { CompaniesLogo } from 'widgets/companies-logo';
import { ProductCard } from 'entities/product-card';
import { TopCategories } from 'entities/top-categories';

export const HomePage = () => {
  return (
    <div className={styles.homepage}>
      <div className={styles.header}>
        <Header />
      </div>
      <MainSlider />

      <FeaturesBlock />

      <CompaniesLogo />

      <ProductCard />

      <TopCategories />
    </div>
  );
};
