import React, { Dispatch, SetStateAction } from 'react';
import { ArrowButton } from 'shared/ui/buttons';
import styles from './styles.module.scss';

type HeadingProps = {
  title: string;
  pageNum?: number;
  setPageNum?: Dispatch<SetStateAction<number>>;
};

const Heading: React.FC<HeadingProps> = ({ title, pageNum, setPageNum }) => {
  const onClickIncrementPage = () => {
    if (pageNum && pageNum < 2) {
      setPageNum && setPageNum(pageNum + 1);
    }
  };

  const onClickDecrementPage = () => {
    if (pageNum && pageNum > 1) {
      setPageNum && setPageNum(pageNum - 1);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h2>{title}</h2>
        <div className={styles.base__arrows}>
          <span className={styles.left} onClick={onClickDecrementPage}>
            <ArrowButton rotate />
          </span>
          <span className={styles.right} onClick={onClickIncrementPage}>
            <ArrowButton />
          </span>
        </div>
      </div>
      <div className={styles.alternative__arrows}>
        <span className={styles.left}>
          <ArrowButton rotate />
        </span>
        <span className={styles.right}>
          <ArrowButton />
        </span>
      </div>
    </div>
  );
};

export default Heading;
