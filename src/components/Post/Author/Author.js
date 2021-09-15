// @flow strict
import React from 'react';
import { getContactHref } from '../../../utils';
import styles from './Author.module.scss';
import { useSiteMetadata, useWindowDimensions } from '../../../hooks';
import Adfit from '../../Adfit';

const Author = () => {
  const { author } = useSiteMetadata();
  const { width } = useWindowDimensions();

  return (
    <div className={styles['author']}>
      {width >= 754 && (
        <Adfit name={'author_adfit'} unit={'DAN-nQ9OyLuoBFL7XJ73'} />
      )}
      {width < 754 && (
        <Adfit name={'author_adfit'} unit={'DAN-rcEzBYw0dKctf70y'} />
      )}
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
