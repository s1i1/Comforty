import React from 'react';
import cn from 'classnames';
import CardAbout from 'shared/ui/card-about';
import { Heading } from 'entities/heading';
import { useGetAboutUsQuery } from 'shared/api';

import styles from './styles.module.scss';

const AboutUs = () => {
  const { data: aboutUsItems } = useGetAboutUsQuery({ limit: 2, pageNumber: 1 });

  return (
    <div className={styles.about}>
      <div className={cn('_container', styles.container)}>
        <Heading title="What Client Says About Us" />

        <ul className={styles.list}>
          {aboutUsItems?.map((obj, index) => (
            <li key={index}>
              <CardAbout {...obj} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AboutUs;
