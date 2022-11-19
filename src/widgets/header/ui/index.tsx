import React from 'react';
import cn from 'classnames';
import { useAppDispatch, useAppSelector } from 'shared/lib';
import { headerModel } from 'widgets/header';
import Top from './top';
import Middle from './middle';
import Bottom from './bottom';
import styles from './styles.module.scss';

const Header = () => {
  const dispatch = useAppDispatch();

  const refHeader = React.useRef<HTMLElement>(null);

  const { setScroll, selectHeader } = headerModel;

  const { scroll } = useAppSelector(selectHeader);

  const handleScroll = () => dispatch(setScroll(window.scrollY));

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header ref={refHeader} className={cn(styles.header, scroll >= 48 && styles.header__fixed)}>
      <Top />
      <div className={cn(scroll >= 48 && styles.fixed__block)}>
        <Middle />
        <Bottom />
      </div>
    </header>
  );
};

export default Header;
