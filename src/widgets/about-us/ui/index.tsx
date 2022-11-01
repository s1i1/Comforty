import React from 'react';
import cn from 'classnames';
import imagePath from './assets/test-image.svg';
import CardAbout from 'shared/ui/card-about';
import { Heading } from 'entities/heading';

import styles from './styles.module.scss';

const AboutUs = () => {
  const testData = [
    {
      imagePath: imagePath,
      name: 'Kristin Watson',
      profession: 'Fashion Designer',
      text: '“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sit amet mi nec massa tincidunt blandit et eu sem. Maecenas laoreet ultrices diam dignissim posuere. Aenean ultrices dui at ipsum sagittis, pharetra lacinia dui faucibus. In ac bibendum ex. Aenean dolor massa, euismod sit amet suscipit et“',
    },
    {
      imagePath: imagePath,
      name: 'Kristin Watson',
      profession: 'Fashion Designer',
      text: '“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sit amet mi nec massa tincidunt blandit et eu sem. Maecenas laoreet ultrices diam dignissim posuere. Aenean ultrices dui at ipsum sagittis, pharetra lacinia dui faucibus. In ac bibendum ex. Aenean dolor massa, euismod sit amet suscipit et“',
    },
  ];

  return (
    <div className={styles.about}>
      <div className={cn('_container', styles.container)}>
        <Heading title="What Client Says About Us" />

        <ul className={styles.list}>
          {testData.map((obj, index) => (
            <li key={index}>
              <CardAbout
                text={obj.text}
                imageUrl={obj.imagePath}
                name={obj.name}
                profession={obj.profession}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AboutUs;
