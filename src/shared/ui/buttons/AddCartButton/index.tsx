import React from 'react';
import cn from 'classnames';
import styles from './AddCartButton.module.scss';

type AddCartProps = {
  isActive?: boolean;
};

export const AddCartButton: React.FC<AddCartProps> = ({ isActive }) => {
  return (
    <div className={cn(styles.button, isActive ? styles.active : styles.notActive)}>
      <svg
        width="44"
        height="45"
        viewBox="0 0 44 45"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <rect y="0.5" width="44" height="44" rx="8" fill="#F0F2F3" />
        <path
          d="M13.5208 14.9792L15.4275 15.3092L16.3102 25.8261C16.3442 26.24 16.5329 26.6258 16.8387 26.9067C17.1445 27.1875 17.545 27.3427 17.9602 27.3414H27.9611C28.3587 27.3418 28.743 27.1987 29.0435 26.9383C29.344 26.6779 29.5403 26.3178 29.5964 25.9242L30.4672 19.9127C30.4905 19.7528 30.4819 19.5899 30.4422 19.4334C30.4024 19.2768 30.3321 19.1296 30.2354 19.0002C30.1387 18.8708 30.0174 18.7617 29.8785 18.6792C29.7396 18.5967 29.5858 18.5424 29.4259 18.5194C29.3672 18.5129 15.7337 18.5084 15.7337 18.5084"
          stroke="#272343"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M23.9479 21.8954H26.4898"
          stroke="#272343"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          className={styles.basket__bottom}
          fillRule="evenodd"
          clipRule="evenodd"
          d="M17.5578 30.5194C17.6251 30.5166 17.6922 30.5273 17.7551 30.551C17.8181 30.5748 17.8756 30.611 17.9242 30.6576C17.9728 30.7041 18.0114 30.76 18.0378 30.8219C18.0643 30.8838 18.0779 30.9504 18.0779 31.0177C18.0779 31.0849 18.0643 31.1515 18.0378 31.2134C18.0114 31.2753 17.9728 31.3312 17.9242 31.3777C17.8756 31.4243 17.8181 31.4605 17.7551 31.4843C17.6922 31.508 17.6251 31.5187 17.5578 31.5159C17.4294 31.5104 17.3081 31.4555 17.2191 31.3626C17.1302 31.2698 17.0805 31.1462 17.0805 31.0177C17.0805 30.8891 17.1302 30.7655 17.2191 30.6727C17.3081 30.5799 17.4294 30.525 17.5578 30.5194Z"
          fill="#272343"
          stroke="#272343"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          className={styles.basket__bottom}
          fillRule="evenodd"
          clipRule="evenodd"
          d="M27.8987 30.5194C28.0312 30.5194 28.1583 30.572 28.252 30.6657C28.3457 30.7594 28.3983 30.8865 28.3983 31.019C28.3983 31.1515 28.3457 31.2786 28.252 31.3723C28.1583 31.4659 28.0312 31.5186 27.8987 31.5186C27.7662 31.5186 27.6392 31.4659 27.5455 31.3723C27.4518 31.2786 27.3992 31.1515 27.3992 31.019C27.3992 30.8865 27.4518 30.7594 27.5455 30.6657C27.6392 30.572 27.7662 30.5194 27.8987 30.5194Z"
          fill="#272343"
          stroke="#272343"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};
