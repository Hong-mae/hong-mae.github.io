---
title: 개인 프로젝트 - Bit Coin Chart App 만들기_#2
date: "2020-10-13T03:01:52.000Z"
template: "post"
draft: false
slug: "bit-coin-chart-with-react-native-2"
category: "React Native"
tags:
  - "React Native"
  - "Bit Coin"
  - "List View"
description: "리액트 네이티브 프로젝트 생성과 비트코인 정보 가져오기."
socialImage: "/media/rn_bit_coin_logo.png"
---

- [개인 프로젝트 - Bit Coin Chart App 만들기_#1](/posts/bit-coin-chart-with-react-native-1)
- [개인 프로젝트 - Bit Coin Chart App 만들기_#2](/posts/bit-coin-chart-with-react-native-2)
- [개인 프로젝트 - Bit Coin Chart App 만들기_#3](/posts/bit-coin-chart-with-react-native-3)

우선 리액트 네이티브부터 설치해보자.

### 설치하기
사실 내가 잘 못찾는건지 모르겠는데 공식 홈페이지에서 설치하는 법을 찾기 어려웠다. 그래서 구글링을 통해 알아본 결과 다음 명령어를 통해 설치 할 수 있다.

``` bash
// npm
npm i -g react-native-cli

// yarn
yarn global add react-native-cli
```

### 프로젝트 생성하기
react-native-cli를 설치 후 다음 명령어를 이용해 프로젝트를 생성 할 수 있다.

``` bash
react-native init . // 해당 디렉토리에 바로 생성

react-native init [프로젝트 명]
```

다음과 같은 콘솔이 뜨면 완료!

![rn_project_init_complete.png](/media/rn_project_init_complete.png) *프로젝트 생성 완료*

### 실행하기
프로젝트를 생성하고 생성된 폴더로 이동(디렉토리에 바로 생성했을 경우 제외)후 다음 명령어를 통해 실행 할 수 있다.

``` bash
// npm
npm run android | ios

// yarn
yarn android | ios
```

Mac OS의 환경이 아닌 곳에서 ios 명령어를 실행하면 안됀다. <del>*필자의 경우 맥을 이용하기 때문에 사용중.*</del>

해당 명령어를 사용하면 에뮬레이터가 실행되고 앱이 설치 및 실행이 진행된다.

![run_project.png](/media/run_project.png) *앱 실행 화면*

### 비트코인 정보 가져오기
[빗썸에서 제공해주는 API](https://api.bithumb.com/public/ticker/ALL)를 가져오기 위해 axios라는 http 통신 라이브러리를 사용하고, 컴포넌트가 실행 되었을때 정보를 가져와야하기 때문에 react Hook 시스템 중 useEffect와 비트코인 정보를 저장하기 위해 useState를 사용했다.

![get_bitcoin_data.png](/media/get_bitcoin_data.png) *빗썸 API 정보 가져오기*

위의 코드를 실행하면 아래와 같은 화면이 출력된다.

![get_bitcoin_data_screen.png](/media/get_bitcoin_data_screen.png) *코드 실행 화면*