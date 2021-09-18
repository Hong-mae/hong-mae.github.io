// @flow strict
import React, { useEffect } from 'react';
import { getContactHref } from '../../../utils';
import styles from './Author.module.scss';
import { useSiteMetadata, useWindowDimensions } from '../../../hooks';
import Adfit from '../../Adfit';

const Author = () => {
  const { author } = useSiteMetadata();

  return (
    <div className={styles['author']}>
      <Adfit
        name={'author_adfit_1'}
        pc={'DAN-nQ9OyLuoBFL7XJ73'}
        mobile={'DAN-lW6d77IqDsJ5Gpnf'}
      />
      <p className={styles['author__bio']}>
        {author.bio}
        <a
          className={styles['author__bio-twitter']}
          href={getContactHref('github', author.contacts.github)}
          rel="noopener noreferrer"
          target="_blank"
        >
          <strong>{author.name}</strong> on Github
        </a>
      </p>
    </div>
  );
};

export default Author;
