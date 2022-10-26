import React from 'react';
import styles from './styles.module.scss';

const ProfileButton = () => {
  return (
    <div className={styles.button}>
      <svg
        width="44"
        height="44"
        viewBox="0 0 44 44"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <rect width="44" height="44" rx="8" fill="white" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M21.9863 25.0671C18.4406 25.0671 15.4138 25.6034 15.4138 27.7502C15.4138 29.8971 18.4213 30.4526 21.9863 30.4526C25.531 30.4526 28.5588 29.9154 28.5588 27.7695C28.5588 25.6236 25.5503 25.0671 21.9863 25.0671V25.0671Z"
          stroke="#272343"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M21.9863 22.0056C22.8195 22.0056 23.6341 21.7585 24.3269 21.2956C25.0197 20.8326 25.5597 20.1747 25.8786 19.4048C26.1975 18.635 26.2809 17.7879 26.1183 16.9707C25.9558 16.1534 25.5545 15.4027 24.9653 14.8136C24.3761 14.2244 23.6254 13.8231 22.8082 13.6605C21.991 13.498 21.1439 13.5814 20.374 13.9003C19.6042 14.2192 18.9462 14.7592 18.4833 15.452C18.0204 16.1448 17.7733 16.9593 17.7733 17.7926C17.7694 18.9059 18.2078 19.9752 18.9922 20.7652C19.7766 21.5553 20.8427 22.0015 21.956 22.0056H21.9863Z"
          stroke="#272343"
          strokeWidth="1.429"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

export default ProfileButton;
