import React from 'react';
import cn from 'classnames';
import { Card } from 'shared/ui';
import { Heading } from 'entities/heading';
import { useGetItemsQuery } from 'shared/api';
import ContentLoader from 'react-content-loader';

import styles from './styles.module.scss';

type ProductCardProps = {
  headerTitle: string;
  searchTag: string;
};

const ProductCard: React.FC<ProductCardProps> = ({ headerTitle, searchTag }) => {
  const [pageNum, setPageNum] = React.useState(1);

  const { data: FeaturedItems, isFetching } = useGetItemsQuery({
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
            {isFetching ? (
              <ContentLoader
                speed={1}
                width={312}
                height={422}
                viewBox="0 0 312 422"
                backgroundColor="#f3f3f3"
                foregroundColor="#ecebeb">
                <rect x="0" y="0" rx="6" ry="6" width="312" height="312" />
                <rect x="0" y="333" rx="6" ry="6" width="267" height="20" />
                <rect x="0" y="395" rx="6" ry="6" width="75" height="24" />
                <rect x="265" y="375" rx="6" ry="6" width="44" height="45" />
              </ContentLoader>
            ) : (
              <Card {...obj} searchTag={searchTag} />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductCard;
