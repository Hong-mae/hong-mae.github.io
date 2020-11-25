// @flow strict
import React, { useEffect } from 'react';
import Author from './Author';
import Contacts from './Contacts';
import Copyright from './Copyright';
import Menu from './Menu';
import styles from './Sidebar.module.scss';
import { useSiteMetadata } from '../../hooks';
import AdSense from 'react-adsense';

type Props = {
  isIndex?: boolean,
};

const Sidebar = ({ isIndex }: Props) => {
  const { author, copyright, menu } = useSiteMetadata();

  return (
    <div className={styles['sidebar']}>
      <div className={styles['sidebar__inner']}>
        <Author author={author} isIndex={isIndex} />
        <Menu menu={menu} />
        <Contacts contacts={author.contacts} />
        <Copyright copyright={copyright} />

        <AdSense.Google
          key={Math.random()}
          style={{ display: 'block' }}
          client="ca-pub-8178483925350112"
          slot="1404903243"
          format="auto"
          responsive="true"
        />
      </div>
    </div>
  );
};

export default Sidebar;
