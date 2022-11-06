import React from 'react';
import cn from 'classnames';
import { Card } from 'shared/ui';
import { Heading } from 'entities/heading';
import { useGetItemsQuery } from 'shared/api/mock.api';
import styles from './styles.module.scss';

type ProductCardProps = {
  headerTitle: string;
  searchTag: string;
};

const ProductCard: React.FC<ProductCardProps> = ({ headerTitle, searchTag }) => {
  const { data: FeaturedItems } = useGetItemsQuery({ limit: 4, pageNumber: 1, tag: searchTag });

  return (
    <div className={cn('_container', styles.container)}>
      <Heading title={headerTitle} />
      <ul className={styles.list}>
        {FeaturedItems?.map((item, index) => (
          <li key={index}>
            <Card title={item.title} price={item.price} imagePath={item.image} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductCard;
