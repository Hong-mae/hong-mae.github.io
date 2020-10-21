---
title: 개인 프로젝트 - Bit Coin Chart App 만들기_#3
date: "2020-10-15T04:19:51.000Z"
template: "post"
draft: false
slug: "bit-coin-chart-with-react-native-3"
category: "React Native"
tags:
  - "React Native"
  - "Bit Coin"
  - "List View"
description: "Native Base를 통해 UI 컴포넌트 활용하기."
socialImage: "/media/rn_bit_coin_logo.png"
---

- [개인 프로젝트 - Bit Coin Chart App 만들기_#1](/posts/bit-coin-chart-with-react-native-1)
- [개인 프로젝트 - Bit Coin Chart App 만들기_#2](/posts/bit-coin-chart-with-react-native-2)
- [개인 프로젝트 - Bit Coin Chart App 만들기_#3](/posts/bit-coin-chart-with-react-native-3)

앱 / 웹을 개발할 시 UI 디자인은 빠지면 안돼는 존재이다.

리액트 네이티브에 적용할 수 있는 UI 컴포넌트는 여러가지가 있다.

그 중 가장 편하게 사용할 수 있는 Native Base를 사용해서 앱을 만들기로 했다.

### Native Base (네이티브 베이스)
네이티브 베이스는 React Native 와 Vue Native를 위한 오픈소스 UI 컴포넌트 라이브러리이다. 동일한 코딩으로 Android와 iOS에 유사한 스타일로 표현할 수 있는게 장점입니다.

### 설치하기
네이티브 베이스 설치는 다음 명령어를 통해 설치 할 수 있다.

``` bash
// npm
npm install native-base --save

// yarn
yarn add native-base
```

**주의**: 리액트 버전이 0.60 이하의 경우 다음 명령어를 실행한다.

``` bash
react-native link
```


