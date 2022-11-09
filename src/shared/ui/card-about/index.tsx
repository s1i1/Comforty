import React from 'react';
import quotesImage from './assets/quotes.svg';
import styles from './styles.module.scss';

type CardAboutProps = {
  image: string;
  name: string;
  profession: string;
  text: string;
};

const CardAbout: React.FC<CardAboutProps> = ({ image, name, profession, text }) => {
  return (
    <div className={styles.container}>
      <p className={styles.text}>{text}</p>

      <div className={styles.user}>
        <div className={styles.image}>
          <img src={image} alt="userImage" />
        </div>
        <div className={styles.user__info}>
          <p className={styles.name}>{name}</p>
          <p className={styles.profession}>{profession}</p>
        </div>
      </div>

      <div className={styles.quotes__image}>
        <img src={quotesImage} alt="quotesImage" />
      </div>
    </div>
  );
};

export default CardAbout;
