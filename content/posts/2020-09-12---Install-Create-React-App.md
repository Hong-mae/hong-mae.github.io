---
title: CRA(Create React App)으로 시작하는 React.
date: "2020-09-12T13:15:19.000Z"
template: "post"
draft: false
slug: "install-create-react-app"
category: "React"
tags:
  - "React"
  - "CRA"
  - "Create React App"
description: "페이스북에서 제공해주는 프론트엔드 라이브러리 React 사용해보기."
socialImage: "/media/reactjs_logo.png"
---

- [React는 무엇인가?](#react는-무엇인가)
- [Node JS 설치하기](#1-node-js-설치하기)
- [NPM 버전확인](#2-npm-버전확인)
- [React 라이브러리 설치 - CRA](#3-react-라이브러리-설치---cra)
- [설치 확인](#4-설치-확인)


## React는 무엇인가?

리액트는 페이스북에서 제공해주는 **프론트엔드 라이브러리**이다.

리액트와 같은 프론트엔드 라이브러리가 없어도 웹페이지는 만들 수 있다!

웹 페이지를 단순히 보여주기 식으로 만든다면 상관 없지만

일반 사용자들과 이 포스팅을 보는 여러분은 웹 페이지에서 버튼을 클릭하는 등 많은 **이벤트(상호작용)**을 발생시킨다.

물론 JQuery같은 라이브러리로 해당 이벤트들을 처리할 수 있지만 사용자들이 많아지거나 하나의 페이지에서 많은 이벤트를 발생시켜야한다면

이 모든 이벤트들을 관리하기가 쉽지 않을 것이다.

이 모든 상호작용을 **컴포넌트**로 쪼개서 관리할 수 있게 만들어주는 것이 바로 **리액트**이다.

부가 설명은 구글링만 해도 다 나오니 그냥 무작정 시작해보자.

1\. Node JS 설치하기
----------------

[https://nodejs.org/en](https://nodejs.org/en)

위 사이트에 들어가서 Node JS 를 설치해준다. LTS 버전과 Current 버전이 있는데. LTS 버전이 안정성이 좋다고 한다.

따라서 LTS 버전을 설치해준다.

2\. NPM 버전확인
------------

Window + R을 누르고 cmd 를 쳐서 실행시키면 명령프롬프트가 뜬다.

그리고 npm -v 를 쳐서 숫자가 뜨면 컴퓨터에 설치된 npm 버전이 뜬다.

무반응이거나 오류가 난다면 Node JS 설치시 NPM 설치가 실패한 것이다. 재설치를 하자.

3\. React 라이브러리(?) 설치 - CRA
---------------------

npm install -g create-react-app를 입력해서 React 라이브러리를 설치하자.

\* Mac OS 의 경우 권한 오류가 생길 수 있다. 그 경우

sudo npm install -g create-react-app 로 입력해서 설치한다.

4\. 설치 확인
---------

create-react-app 을 쳐서 다음과 같이 나온다면 설치완료!

![create-react-app 설치 확인](/media/reactjs_install_check.png) *create-react-app 설치 확인*