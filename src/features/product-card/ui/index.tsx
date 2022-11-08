import React from 'react';
import cn from 'classnames';
import { Card } from 'shared/ui';
import { Heading } from 'entities/heading';
import { useGetItemsQuery } from 'shared/api';
import styles from './styles.module.scss';

type ProductCardProps = {
  headerTitle: string;
  searchTag: string;
};

const ProductCard: React.FC<ProductCardProps> = ({ headerTitle, searchTag }) => {
  const [pageNum, setPageNum] = React.useState(1);

  const { data: FeaturedItems } = useGetItemsQuery({
    limit: 4,
    pageNumber: pageNum,
    tag: searchTag,
  });

  return (
    <div className={cn('_container', styles.container)}>
      <Heading title={headerTitle} pageNum={pageNum} setPageNum={setPageNum} />
      <ul className={styles.list}>
        {FeaturedItems?.map((obj, index) => (
          <li key={index}>
            <Card {...obj} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductCard;
