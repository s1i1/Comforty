import React from 'react';
import cn from 'classnames';
import { useAppSelector } from 'shared/lib';
import { Card } from 'shared/ui';
import { Button, BackToButton } from 'shared/ui/buttons';
import { headerModel } from 'widgets/header';

import styles from './styles.module.scss';

type productsItems = {
  image: string;
  price: number;
  title: string;
};

type CardBlockProps = {
  header: string;
  products: productsItems[];
  isHideBuyButton?: boolean;
};

//Поменять key в testArr
const CardBlock: React.FC<CardBlockProps> = ({ header, products, isHideBuyButton }) => {
  const { scroll } = useAppSelector(headerModel.selectHeader);

  return (
    <div className={cn('_container', styles.container, scroll >= 48 && styles.with__scroll)}>
      <div className={styles.header}>
        <h2 className={styles.title}>{header}</h2>
        <div className={styles.to__shop}>
          <BackToButton title="Back To Shop" />
        </div>
      </div>

      <ul className={styles.list}>
        {products.map((item, index) => (
          <li key={index} className={styles.items}>
            <Card image={item.image} price={item.price} title={item.title} />
          </li>
        ))}
      </ul>

      {!isHideBuyButton && (
        <div className={styles.purchase_button}>
          <div className={styles.button}>
            <Button title="buy now" isTitleCenter />
          </div>
        </div>
      )}
    </div>
  );
};

export default CardBlock;
