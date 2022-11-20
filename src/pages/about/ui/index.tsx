import React from 'react';
import cn from 'classnames';
import { useAppSelector } from 'shared/lib';
import { headerModel } from 'widgets/header';
import styles from './styles.module.scss';

export const About = () => {
  const { scroll } = useAppSelector(headerModel.selectHeader);
  return (
    <div className={cn('_container', styles.container, scroll >= 48 && styles.with__scroll)}>
      <div className={styles.title}>
        <h2 className={styles.header}>All about Comforty</h2>
        <h4 className={styles.subtitle}>Welcome to the world of Design</h4>
      </div>

      <div className={styles.text}>
        <span>We are design pioneers in the online world. </span> For Comforty is Germany’s
        <span> first online shop of the design trade</span>. As early as 1998, our company launched
        as a retailer of design furniture, lighting, and accessories. Ever since we have grown
        continually into a medium-sized enterprise. The proud number of
        <span> over 400,000 satisfied customers</span> agrees with our pioneer work. We ship
        exclusive products to design enthusiasts in many European countries every day. We are
        continually working on our performance and offer our services in many different languages to
        guarantee our customers the best shopping experience. In our state-of-the-art logistics
        center in Laatzen, Germany, we have a permanent stock of <span>25,000 products</span> to
        guarantee <span>quick delivery times</span>.
      </div>
    </div>
  );
};
