// @flow strict
import React, { useEffect } from 'react';
import styles from './Content.module.scss';
import type { Node as ReactNode } from 'react';
import { useSiteMetadata, useWindowDimensions } from '../../../hooks';
import Adfit from '../../Adfit';

type Props = {
  body: string,
  title: string,
  date: string,
};

const Content = ({ body, title, date }: Props) => {
  const { author } = useSiteMetadata();
  const { width } = useWindowDimensions();

  return (
    <div className={styles['content']}>
      <div className={styles['content__header']}>
        <h1 className={styles['content__title']}>{title}</h1>
        <div className={styles['content__author']}>
          {author.name}
          <span className={styles['content__bar']} />
          {new Date(date).toLocaleDateString('ko-KR', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
          })}
        </div>
      </div>
      {width >= 754 && (
        <Adfit name={'content_adfit'} unit={'DAN-ecKceu8n4NKFPXSU'} />
      )}
      {width < 754 && (
        <Adfit name={'content_adfit'} unit={'DAN-Y4cOusGMi5DnNrRB'} />
      )}
      <div
        className={styles['content__body']}
        dangerouslySetInnerHTML={{ __html: body }}
      />
    </div>
  );
};

export default Content;
