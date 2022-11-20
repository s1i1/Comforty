import React from 'react';
import cn from 'classnames';
import { Link } from 'react-router-dom';
import { CartItem } from 'shared/ui';
import { baseRoutes, useAppSelector } from 'shared/lib';
import { BackToButton, Button } from 'shared/ui/buttons';
import { headerModel } from 'widgets/header';
import styles from './styles.module.scss';

type productsItems = {
  image: string;
  price: number;
  title: string;
};

type CartBlockProps = {
  header: string;
  products: productsItems[];
};

//Заменить key в products
const CartBlock: React.FC<CartBlockProps> = ({ header, products }) => {
  const { scroll } = useAppSelector(headerModel.selectHeader);

  return (
    <div className={cn('_container', styles.container, scroll >= 48 && styles.with__scroll)}>
      <div className={styles.header}>
        <h2 className={styles.title}>{header}</h2>
      </div>

      <ul className={styles.list}>
        <div className={styles.clear}>
          <div className={styles.image}>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M2.5 5H4.16667H17.5"
                stroke="#272343"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M6.66663 5.00001V3.33334C6.66663 2.89131 6.84222 2.46739 7.15478 2.15483C7.46734 1.84227 7.89127 1.66667 8.33329 1.66667H11.6666C12.1087 1.66667 12.5326 1.84227 12.8451 2.15483C13.1577 2.46739 13.3333 2.89131 13.3333 3.33334V5.00001M15.8333 5.00001V16.6667C15.8333 17.1087 15.6577 17.5326 15.3451 17.8452C15.0326 18.1577 14.6087 18.3333 14.1666 18.3333H5.83329C5.39127 18.3333 4.96734 18.1577 4.65478 17.8452C4.34222 17.5326 4.16663 17.1087 4.16663 16.6667V5.00001H15.8333Z"
                stroke="#272343"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M8.33337 9.16667V14.1667"
                stroke="#272343"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M11.6666 9.16667V14.1667"
                stroke="#272343"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <p className={styles.title}>Remove All</p>
        </div>
        {products?.map((obj, index) => (
          <li key={index} className={styles.items}>
            <CartItem {...obj} />
          </li>
        ))}
      </ul>

      <div className={styles.total__block}>
        <div className={styles.quantity}>
          quantity: <span>1</span>
        </div>
        <div className={styles.total__price}>
          total price: <span>$1120</span>
        </div>
      </div>

      <div className={styles.buttons}>
        <Link to={baseRoutes.SHOP} className={styles.to__shop}>
          <BackToButton title="Back To Shop" />
        </Link>
        <div className={styles.purchase__button}>
          <Button title="checkout" isTitleCenter />
        </div>
      </div>
    </div>
  );
};

export default CartBlock;
