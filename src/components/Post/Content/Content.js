// @flow strict
import React from 'react';
import styles from './Content.module.scss';
import Adsense from 'react-adsense';

type Props = {
  body: string,
  title: string
};

const Content = ({ body, title }: Props) => (
  <div className={styles['content']}>
    <h1 className={styles['content__title']}>{title}</h1>
    <Adsense.Google
      client="ca-pub-8178483925350112"
      slot="8096397157"
      format='auto'
      style={{ display: 'block' }}
      responsive='true'
      className={styles['content__adsense']}
    />
    <div className={styles['content__body']} dangerouslySetInnerHTML={{ __html: body }} />
  </div>
);

export default Content;
