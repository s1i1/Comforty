import React from 'react';
import cn from 'classnames';
import { CategoriesButton } from 'shared/ui/buttons';
import { Contact } from 'entities/contact';
import { CategoriesModal } from 'features/categories';
import { Navbar } from 'features/navbar';

import styles from './styles.module.scss';

const Bottom = () => {
  const [currentCategory, setCurrentCategory] = React.useState('All Categories');
  const [showModal, setShowModal] = React.useState(false);

  const refCategoriesBlock = React.useRef<HTMLDivElement>(null);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  React.useEffect(() => {
    const closePopup = (e: MouseEvent) => {
      if (e.target instanceof Element) {
        const refCurrent = refCategoriesBlock.current;
        const target = e.target.closest(`.${refCurrent?.getAttribute('class')}`);

        if (target !== refCurrent) {
          setShowModal(false);
        }
      }
    };

    document.body.addEventListener('click', closePopup);

    return () => {
      document.body.removeEventListener('click', closePopup);
    };
  }, []);

  return (
    <div className={styles.header__bottom}>
      <div className={cn('_container', styles.container)}>
        <div className={styles.categories}>
          <div ref={refCategoriesBlock} className={styles.categories__block} onClick={toggleModal}>
            <CategoriesButton currentCategory={currentCategory} isActive={showModal} />
            <div className={styles.modal}>
              {showModal && (
                <CategoriesModal
                  currentCategory={currentCategory}
                  setCurrentCategory={setCurrentCategory}
                />
              )}
            </div>
          </div>
          <Navbar />
        </div>
        <div className={styles.contact}>
          <Contact />
        </div>
      </div>
    </div>
  );
};

export default Bottom;
