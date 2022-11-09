import React from 'react';
import cn from 'classnames';
import { FooterList } from 'entities/footer-list';
import { Logo } from 'shared/ui';
import { FooterLinkList } from 'entities/footer-link-list';
import { Newsletter } from 'entities/newsletter';
import styles from './styles.module.scss';

const Footer = () => {
  const categoryTestArr = [
    'Sofa',
    'Armchair',
    'Wing Chair',
    'Desk Chair',
    'Wooden Chair',
    'Park Bench',
  ];
  const supportTestArr = ['Help & Support', 'Tearms & Conditions', 'Privacy Policy', 'Help'];

  return (
    <footer className={styles.footer}>
      <div className={cn('_container', styles.container)}>
        <div className={styles.info}>
          <div className={styles.logo}>
            <Logo />
          </div>
          <p className={styles.info__text}>
            At Comforty, we want you to do great things. That’s why we make problem-solving designs
            that are as beautiful as they are useful.
          </p>
          <div className={styles.links}>
            <FooterLinkList />
          </div>
        </div>

        <div className={styles.category}>
          <FooterList header="Category" titles={categoryTestArr} />
        </div>

        <div className={styles.support}>
          <FooterList header="Support" titles={supportTestArr} />
        </div>

        <div className={styles.newsletter}>
          <Newsletter />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
