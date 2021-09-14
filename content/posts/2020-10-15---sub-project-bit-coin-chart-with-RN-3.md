---
title: 개인 프로젝트 - Bit Coin Chart App 만들기_#3
date: "2020-10-15 04:19:51 GTM+0900"
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

- [개인 프로젝트 - Bit Coin Chart App 만들기\_#1](/posts/bit-coin-chart-with-react-native-1)
- [개인 프로젝트 - Bit Coin Chart App 만들기\_#2](/posts/bit-coin-chart-with-react-native-2)
- [개인 프로젝트 - Bit Coin Chart App 만들기\_#3](/posts/bit-coin-chart-with-react-native-3)

앱 / 웹을 개발할 시 UI 디자인은 빠지면 안돼는 존재이다.

리액트 네이티브에 적용할 수 있는 UI 컴포넌트는 여러가지가 있다.

그 중 가장 편하게 사용할 수 있는 Native Base를 사용해서 앱을 만들기로 했다.

### Native Base (네이티브 베이스)

네이티브 베이스는 React Native 와 Vue Native를 위한 오픈소스 UI 컴포넌트 라이브러리이다. 동일한 코딩으로 Android와 iOS에 유사한 스타일로 표현할 수 있는게 장점입니다.

### 설치하기

네이티브 베이스 설치는 다음 명령어를 통해 설치 할 수 있다.

```bash
// npm
npm install native-base --save

// yarn
yarn add native-base
```

**주의**: 리액트 버전이 0.60 이하의 경우 다음 명령어를 실행한다.

```bash
react-native link
```

### 예제 코드

![native_base_code.png](/media/native_base_code.png) _Native Base 기본 코드_

---

이제 이전에 비트코인 리스트를 가져왔던 코드에 네이티브 베이스를 접목시켜 디자인(?)을 해보자.

우선 앱의 헤더부분과 바디부분으로 나누어 헤더부분에는 앱의 이름, 현제 뷰의 명칭(메인 화면인 경우 메인) 등을 표시해서 보여주지만... 딱히 표시할 내용이 없어서 현재 시간을 보여주기로 했다.

직접 시간 변환하는 건 너무 귀찮으니 moment.js 날짜/시간 관련 라이브러리를 사용해서 간편하게 표시한다.

비트코인 정보를 가져오는 API 통신은 Redux에서 관리 할 수 있도록 작성 했다.
`gist:Moong-bee/7208e24adb4f7002c20717dc69e4e498#MainScreen.js?lines=10-31`

추후 Redux에 관련된 포스트를 작성하겠다.

디자인은 네이티브 베이스의 [Card List](https://docs.nativebase.io/Components.html#card-list-headref)를 사용했다.

`gist:Moong-bee/7208e24adb4f7002c20717dc69e4e498#MainScreen.js?lines=73-91&highlights=84`

`gist:Moong-bee/e5b97239cb06ec1103b2bbc9921fad2b#ChartItem.js?lines=19-41`

ChartItem.js의 37번째 줄 ChartItemDetail은 상세정보를 볼 수 있게 만든 컴포넌트이다.

### 실행 화면

![bit_chart_run.png](/media/bit_chart_run.png)

### Github

해당 프로젝트의 Github 주소는 다음과 같다.

[https://github.com/Moong-bee/bit_chart](https://github.com/Moong-bee/bit_chart)

디자인 조금 더 수정하고... 다음 프로젝트는 뭐하지?
