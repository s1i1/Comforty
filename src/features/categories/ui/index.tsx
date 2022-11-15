import React from 'react';
import { baseRoutes } from 'shared/lib';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from 'shared/lib';
import { CategoriesModalItem } from 'shared/ui';
import { CategoriesButton } from 'shared/ui/buttons';
import { CategoryItems } from 'features/categories/model';
import { categoriesModel } from 'features/categories';
import { ourProductsModel } from 'entities/our-products';
import styles from './styles.module.scss';

const Categories: React.FC = () => {
  const dispatch = useAppDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  const { currentCategory } = useAppSelector(categoriesModel.selectCategories);
  const { linkTag } = useAppSelector(ourProductsModel.selectOurProducts);

  const [showModal, setShowModal] = React.useState(false);

  const refContainer = React.useRef<HTMLDivElement>(null);

  const handlerClick = (categoryObj: CategoryItems) => {
    if (location.pathname !== baseRoutes.SHOP) {
      navigate(baseRoutes.SHOP);
    }

    dispatch(categoriesModel.setCurrentCategory(categoryObj));
  };

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

  React.useEffect(() => {
    const categoryLinks = ourProductsModel.categoryNames.map((item, index) => {
      return index !== 0 && item.link;
    });

    if (!categoryLinks.includes(linkTag)) {
      dispatch(ourProductsModel.setLinkTag(currentCategory.category));
    }
  }, [dispatch, linkTag, currentCategory]);

  return (
    <div ref={refContainer} className={styles.container} onClick={toggleModal}>
      <CategoriesButton currentCategory={currentCategory.title} isActive={showModal} />
      <div className={styles.modal}>
        {showModal && (
          <ul className={styles.modal__list}>
            {categoriesModel.categoryNames.map((obj, index) => (
              <li key={index} onClick={() => handlerClick(obj)}>
                <CategoriesModalItem
                  title={obj.title}
                  isActive={obj.title === currentCategory.title && true}
                />
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Categories;
