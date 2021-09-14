---
title: 리액트 + Gatsby 를 이용한 블로그 만들기_#1
date: "2020-10-02 00:37:37 GTM+0900"
template: "post"
draft: false
slug: "create-react-blog-with-gatsby-template-1"
category: "React"
tags:
  - "Web Development"
  - "Blog"
  - "React"
  - "SEO"
  - "SSR"
  - "Server Side Rendering"
  - "Gatsby"
description: "SEO를 지원하는 블로그를 위해 리액트 + Gatsby 이용하여 블로그를 만들자. #1, Gatsby를 쓰는 이유!"
socialImage: "/media/gatsby_react.png"
---

- [리액트 + Gatsby 를 이용한 블로그 만들기\_#0](/posts/create-react-blog-with-gatsby-template-0)
- [리액트 + Gatsby 를 이용한 블로그 만들기\_#1](/posts/create-react-blog-with-gatsby-template-1)
- [리액트 + Gatsby 를 이용한 블로그 만들기\_#2](/posts/create-react-blog-with-gatsby-template-2)
- [리액트 + Gatsby 를 이용한 블로그 만들기\_#3](/posts/create-react-blog-with-gatsby-template-3)
- [리액트 + Gatsby 를 이용한 블로그 만들기\_final](/posts/create-react-blog-with-gatsby-template-final)

React에 검색엔진 최적화(이하 SEO)와 SNS 공유를 위한 meta 태그 설정하는 방법 중 필자가 편하게 이용한 방법(Pre-render) 및 현재 블로그를 만들 수 있게 된 Gatsby 등(SSR - Server Side Rendering)에 대해 설명하겠다.

설명에 앞서 SPA, Pre-render 와 SSR(Server-Side-Rendering)은 무엇일까?

## SPA

React는 SPA(Single Page Application)을 지향한다.

SPA는 Single Page Application의 줄임말이며, 라우팅을 클라이언트에서 담당한다.

기존의 경우 사용자가 라우팅을 요청할 때 마다 서버측에 새로운 페이지를 받아와야해서 서버측 자원이 많이 이용된다. 그에 따른 불필요한 트래픽이 빈번히 발생한다. 따라서 SPA를 이용할 시 앞서 말한 문제점들이 개선된다.

하지만 SPA도 문제점은 존재한다.

1. 앱의 규모가 커지면 JS 파일의 크기가 너무 커질 수 있다.
   - 코드 스플리팅(Code Splitting)을 통해 해결 가능하다.
2. 브라우저에서 Javascript를 지원하지 않는 경우 구동되지 않아 UI를 볼 수 없다. 따라서 검색엔진에서 크롤링이 불가능하다.
   - Pre-render, SSR(Server Side Rendering)으로 해결 가능하다.
   - 구글은 js엔진이 내장되어있어 SPA에도 SEO가 잘 적용된다.

## Pre-render

웹 크롤러가 볼 수 있도록 페이지의 모든 요소를 사전에 미리 로드하는 프로세스를 의미한다.
SEO를 위해 SSR을 이용하기 힘드신 분들을 위해 추천하는 기능이다.

구글링 하다보면 많은 prereder 라이브러리 등이 존재한다. 그 중 필자가 추천하는 방법은 다음과 같다.

1. [react-snap](https://github.com/stereobooster/react-snap)
   - 해당 라이브러리는 React에서 랜더링되는 페이지를 html파일로 미리 저장하여 제공한다.
   - 앱을 빌드 후에 snap을 찍어야한다.
     ```json
     // package.json
     "scripts": {
       "build": ...생략,
       "postbuild": "react-snap"
     }
     ```
2. [prerender.io](https://prerender.io/)
   - 해당 사이트는 리액트 코드를 문자열 형태로 변환을 하는게 아니라, 아예 자바스크립트 렌더링 엔진을 가지고 있어서, 자바스크립트 코드를 실행시켜 뷰를 렌더링한 결과값을 반환한다. 렌더링 속도는 그렇게 빠르지 않기 때문에, 이 서비스는 오직 SEO를 위해서만 사용된다. 크롤러 봇일 경우에만 대신 렌더링을 해줘서 반환을 해준다.

## SSR (Server Side Rendering)

서버사이드 렌더링을 통하여 얻을 수 있는 가장 큰 이점은 SEO이다. 리액트, 혹은 다른 자바스크립트 라이브러리/프레임워크로 만들어져 뷰 렌더링이 자바스크립트 위주로 돌아가는 프로젝트는, 자바스크립트 엔진이 돌아가지 않으면 원하는 정보를 표시해주지 않는다.

SSR은 첫 렌더링된 html 을 클라이언트에게 전달을 해주기때문에 초기로딩속도를 많이 줄여줄 수 있다. 자바스크립트 파일을 불러오고, 렌더링 작업이 완료되기 전에도, 유저가 사이트의 컨텐츠를 이용 할 수 있게 된다.

SSR은 다양한 서버 프레임워크로 동작 가능하다. 예를 들면 Koa, Next 그리고 필자가 사용하는 Gatsby(?)가 있다.

## [Getsby.js](https://gatsbyjs.org)

Gatsby.js는 React 기반에 GraphQL에 사이트 정보를 저장하며 정적 사이트 생성기이다.

Gatsby.js는 React, Webpack, react-router, GraphQL 등 프론트 엔드 도구를 종합적으로 제공한다.

그리고 gatsby에 특화된 plugin들이 많아 어려운 설정 없이 손쉽게 plugin들을 사용할 수 있다.

## Gatsby.js 설치

Gatsby.js는 npm을 통해 설치 가능하다.

```bash
npm install --save gatsby-cli
```

프로젝트 생성은 다음 명령어를 사용하면 된다.

```bash
gatsby new [프로젝트명] [템플릿]
gatsby new gatsby-site https://github.com/gatsbyjs/gatsby-starter-hello-world
```

템플릿 정보는 있어도 되고 없어도 된다.

현재 블로그의 템플릿은 https://github.com/alxshelepenok/gatsby-starter-lumen 이다.

기초적인 Gatsby.js의 사용법은 다음 포스트에서 계속...

##### 출처 및 참조

- [SEO 관련 정보 - yjdev(Naver Blog)](https://blog.naver.com/yjdev/222087089670)
- [prerender.io, SSR 관련 정보 - velopert(VELOPERT.LOG)](https://velopert.com/3425)
- [SSR, Next.js 관련 정보 - emessell(Blog)](https://emessell.github.io/react/2019/10/30/SSR,CSR/)
