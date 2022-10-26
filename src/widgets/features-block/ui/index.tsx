import React from 'react';
import cn from 'classnames';
import box from './assets/box.svg';
import deliveryTruck from './assets/delivery-truck.svg';
import hours from './assets/24-hours.svg';
import shield from './assets/shield.svg';
import { FeatureCard } from 'entities/feature-card';
import styles from './styles.module.scss';

const FeaturesBlock = () => {
  const cardItems = [
    {
      imagePath: box,
      title: 'Discount',
      subtitle: 'Every week new sales',
    },
    {
      imagePath: deliveryTruck,
      title: 'Free Delivery',
      subtitle: '100% Free for all orders',
    },
    {
      imagePath: hours,
      title: 'Great Support 24/7',
      subtitle: 'We care your experiences',
    },
    {
      imagePath: shield,
      title: 'Secure Payment',
      subtitle: '100% Secure Payment Method',
    },
  ];

  return (
    <div className={cn(styles.container, '_container')}>
      <ul className={styles.list}>
        {cardItems.map((item, index) => (
          <li key={index}>
            <FeatureCard imagePath={item.imagePath} title={item.title} subtitle={item.subtitle} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FeaturesBlock;
