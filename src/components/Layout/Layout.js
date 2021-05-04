// @flow strict
import React from 'react';
import Helmet from 'react-helmet';
import type { Node as ReactNode } from 'react';
import { useSiteMetadata } from '../../hooks';
import styles from './Layout.module.scss';

type Props = {
  children: ReactNode,
  title: string,
  description?: string,
  socialImage?: string
};

const Layout = ({
  children,
  title,
  description,
  socialImage
}: Props) => {
  const { author, url } = useSiteMetadata();
  const metaImage = typeof socialImage !== 'undefined' ? socialImage : author.socialDefaultImg;
  const metaImageUrl = url + metaImage;

  return (
    <div className={styles.layout}>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:site_name" content={title} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={metaImageUrl} />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={metaImageUrl} />
        <meta name="naver-site-verification" content="e4c037e41efdac1f43a38f583a8afdcab956bce0" />
        <meta name="google-site-verification" content="K5Cd2j5bPI-TSMjDNzgqDHTWc0Eatkp71NxQOtJa1FA" />
        <link href="https://Moong-bee.com" rel="canonical" />
        <meta name="NaverBot" content="All" />
        <meta name="NaverBot" content="index,follow" />
        <meta name="Yeti" content="All" />
        <meta name="Yeti" content="index,follow" />
      </Helmet>

      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
      {children}
    </div>
  );
};

export default Layout;
