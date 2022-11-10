import React from 'react';
import cn from 'classnames';
import { Link } from 'react-router-dom';
import { CategoriesButton } from 'shared/ui/buttons';
import { Contact } from 'entities/contact';
import { Navbar } from 'entities/navbar';
import { CategoriesModal } from 'features/categories';
import { baseRoutes } from 'shared/lib';

import styles from './styles.module.scss';

const Bottom = () => {
  const [currentCategory, setCurrentCategory] = React.useState('All Categories');
  const [showModal, setShowModal] = React.useState(false);
  const [isActiveNav, setIsActiveNav] = React.useState(0);

  const refCategoriesBlock = React.useRef<HTMLDivElement>(null);

  const navigation = [
    { title: 'Home', link: baseRoutes.HOME },
    { title: 'Shop', link: baseRoutes.SHOP },
    { title: 'Product', link: '' },
    { title: 'Pages', link: '' },
    { title: 'About', link: '' },
  ];

  const onClickSetActive = (index: number) => {
    setIsActiveNav(index);
  };

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
          <nav>
            <ul>
              {navigation.map((obj, index) => {
                return (
                  <li key={index} onClick={() => onClickSetActive(index)}>
                    <Link to={obj.link}>
                      <Navbar title={obj.title} isActive={index === isActiveNav} />
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
        <div className={styles.contact}>
          <Contact />
        </div>
      </div>
    </div>
  );
};

export default Bottom;
