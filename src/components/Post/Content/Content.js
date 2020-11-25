// @flow strict
import React, { useEffect } from 'react';
import styles from './Content.module.scss';
import AdSense from 'react-adsense';

type Props = {
  body: string,
  title: string
};

const Content = ({ body, title }: Props) => {

  return (
    <div className={styles['content']}>
      <h1 className={styles['content__title']}>{title}</h1>

      <AdSense.Google
        key={Math.random()}
        client="ca-pub-8178483925350112"
        slot="9831022320"
        style={{ display: "block" }}
        format='auto'
        responsive='true'
        className={styles['content__adsense']}
      />

      <div className={styles['content__body']} dangerouslySetInnerHTML={{ __html: body }} />

      <AdSense.Google
        key={Math.random()}
        client="ca-pub-8178483925350112"
        slot="4028849540"
        format='auto'
        style={{ display: 'block', textAlign: "center" }}
        responsive='true'
      />
      <AdSense.Google
        client="ca-pub-8178483925350112"
        slot="3457185660"
        format='auto'
        style={{ display: 'block', textAlign: "center" }}
        responsive='true'
      />
    </div>
  )
};

export default Content;
