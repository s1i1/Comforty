import React from 'react';
import cn from 'classnames';
import { Shipping } from 'entities/shipping';
import { Language, LanguageModal } from 'features/language';
import { Help } from 'entities/help';
import styles from './styles.module.scss';

const Top = () => {
  const [showModal, setShowModal] = React.useState(false);

  const refLanguage = React.useRef<HTMLLIElement>(null);

  React.useEffect(() => {
    const closePopup = (e: MouseEvent) => {
      if (e.target instanceof Element) {
        const target = e.target.parentElement?.parentElement;

        const refCurrent = refLanguage.current;

        if (refCurrent && target !== refCurrent) {
          setShowModal(false);
        }
      }
    };

    document.body.addEventListener('click', closePopup);

    return () => {
      document.body.removeEventListener('click', closePopup);
    };
  }, []);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div className={styles.header__top}>
      <div className={cn('_container', styles.container)}>
        <div className={styles.shipping}>
          <Shipping />
        </div>
        <ul>
          <li ref={refLanguage} className={styles.language} onClick={toggleModal}>
            <Language />
            <div className={styles.modal}>{showModal && <LanguageModal />}</div>
          </li>
          <li className={styles.faq}>Faqs</li>
          <li>
            <Help />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Top;
