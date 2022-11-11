import React from 'react';
import { CategoriesModalItem } from 'shared/ui';
import { CategoriesButton } from 'shared/ui/buttons';
import styles from './styles.module.scss';

const Categories: React.FC = () => {
  const categoryNames = [
    'All Categories',
    'Sofa',
    'Armchair',
    'Wing Chair',
    'Desk Chair',
    'Wooden Chair',
    'Park Bench',
  ];

  const handlerClick = (categoryName: string) => {
    setCurrentCategory(categoryName);
  };

  const [currentCategory, setCurrentCategory] = React.useState('All Categories');
  const [showModal, setShowModal] = React.useState(false);

  const refContainer = React.useRef<HTMLDivElement>(null);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  React.useEffect(() => {
    const closePopup = (e: MouseEvent) => {
      if (e.target instanceof Element) {
        const refCurrent = refContainer.current;
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
    <div ref={refContainer} className={styles.container} onClick={toggleModal}>
      <CategoriesButton currentCategory={currentCategory} isActive={showModal} />
      <div className={styles.modal}>
        {showModal && (
          <ul className={styles.modal__list}>
            {categoryNames.map((name, index) => (
              <li key={index} onClick={() => handlerClick(name)}>
                <CategoriesModalItem title={name} isActive={name === currentCategory && true} />
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Categories;
