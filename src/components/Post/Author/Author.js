// @flow strict
import React from 'react';
import { getContactHref } from '../../../utils';
import styles from './Author.module.scss';
import { useSiteMetadata } from '../../../hooks';

const Author = () => {
  const { author } = useSiteMetadata();

  return (
    <div className={styles['author']}>
      <div className={styles['author__adfit']}>
        <ins
          key={'author_adfit'}
          className="kakao_ad_area"
          style={{ display: 'none' }}
          data-ad-unit="DAN-de34DVhFQLvzGVdF"
          data-ad-width="728"
          data-ad-height="90"
        ></ins>
      </div>
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
