"use strict";

const React = require("react");
const siteConfig = require("../config.js");

// eslint-disable-next-line import/no-webpack-loader-syntax, import/no-unresolved
const katexStylesheet = require("!css-loader!../static/css/katex/katex.min.css");

const onRenderBody = (
  { setHeadComponents, setPostBodyComponents },
  pluginOptions
) => {
  const { useKatex } = siteConfig;

  if (useKatex) {
    setHeadComponents([
      React.createElement("style", {
        key: "katex-inline-stylesheet",
        dangerouslySetInnerHTML: { __html: katexStylesheet.toString() },
      }),
    ]);
  }

  setPostBodyComponents([
    <script
      key={"kakao_adfit_script"}
      type="text/javascript"
      async
      src="//t1.daumcdn.net/kas/static/ba.min.js"
    />,
  ]);
};

module.exports = onRenderBody;
