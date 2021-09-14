'use strict';

const React = require('react');
const siteConfig = require('../config.js');

// eslint-disable-next-line import/no-webpack-loader-syntax, import/no-unresolved
const katexStylesheet = require('!css-loader!../static/css/katex/katex.min.css');

const onRenderBody = ({ setHeadComponents }) => {
  const { useKatex } = siteConfig;

  if (useKatex) {
    setHeadComponents([
      React.createElement('style', {
        key: 'katex-inline-stylesheet',
        dangerouslySetInnerHTML: { __html: katexStylesheet.toString() },
      }),
    ]);
  }

  setHeadComponents([
    React.createElement('script', {
      key: 'kakao_adfit_script',
      async: true,
      src: '//t1.daumcdn.net/kas/static/ba.min.js',
    }),
    React.createElement('script', {
      key: 'kakao_adfit_script',
      'data-ad-client': 'ca-pub-8178483925350112',
      async: true,
      src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js',
    }),
  ]);
};

module.exports = onRenderBody;
