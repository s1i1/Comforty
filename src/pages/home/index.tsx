import React from 'react';
import cn from 'classnames';
import { useAppSelector } from 'shared/lib';
import { MainSlider } from 'widgets/main-slider';
import { FeaturesBlock } from 'widgets/features-block';
import { CompaniesLogo } from 'widgets/companies-logo';
import { ProductCard } from 'features/product-card';
import { TopCategories } from 'entities/top-categories';
import { OurProducts } from 'entities/our-products';
import { AboutUs } from 'widgets/about-us';
import { headerModel } from 'widgets/header';

import styles from './styles.module.scss';

export const HomePage = () => {
  const { scroll } = useAppSelector(headerModel.selectHeader);

  return (
    <div className={cn(styles.homepage, scroll >= 48 && styles.with__scroll)}>
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
