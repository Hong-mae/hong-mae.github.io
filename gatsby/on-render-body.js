'use strict';

const React = require('react');
const siteConfig = require('../config.js');

// eslint-disable-next-line import/no-webpack-loader-syntax, import/no-unresolved
const katexStylesheet = require('!css-loader!../static/css/katex/katex.min.css');
const { set } = require('lodash-es');

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
    // google adsense
    React.createElement('script', {
      key: 'google_adsense_script',
      'data-ad-client': 'ca-pub-8178483925350112',
      async: true,
      src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js',
    }),
    // naver search advisor
    React.createElement('meta', {
      name: 'naver-site-verification',
      content: '337f0d438d887f8221aafd251f606ba243f53b85',
    }),
  ]);
};

module.exports = onRenderBody;
