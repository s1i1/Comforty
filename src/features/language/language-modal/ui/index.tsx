import React, { Dispatch, SetStateAction } from 'react';
import cn from 'classnames';
import styles from './styles.module.scss';

type LanguageModalProps = {
  currentLanguage: string;
  setCurrentLanguage: Dispatch<SetStateAction<string>>;
};

const LanguageModal: React.FC<LanguageModalProps> = ({ currentLanguage, setCurrentLanguage }) => {
  const languages = ['Eng', 'Ru'];

  const handlerClick = (language: string) => {
    setCurrentLanguage(language);
  };

  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        {languages.map((language, index) => (
          <li
            key={index}
            className={cn(language === currentLanguage && styles.active)}
            onClick={() => handlerClick(language)}>
            {language}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LanguageModal;
