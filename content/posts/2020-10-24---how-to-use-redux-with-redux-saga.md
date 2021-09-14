---
title: "Redux(리덕스) 사용법 (with. Redux-Saga)"
date: "2020-10-24 13:57:29 GMT+0900"
template: "post"
draft: false
slug: "how-to-use-redux-with-redux-saga"
category: "Redux"
tags:
  - "Redux"
  - "Redux Saga"
  - "React"
description: "상태 관리 라이브러리인 Redux를 Redux Saga라는 것을 통해 사용하는 법!"
socialImage: "/media/redux_saga_logo.png"
---

- [Redux(리덕스)란 무엇인가? (feat. React and React Native)](/posts/what-is-redux-with-feat-react-and-react-native)
- [Redux(리덕스) 사용법 (with. Redux-Saga)](/posts/how-to-use-redux-with-redux-saga)

React에서 Redux를 사용하는 방법은 여러가지가 존재한다. 그중 필자는 Redux Saga를 사용한다. 물론 Redux Saga를 중점으로 공부했기 때문이다. [리액트를 다루는 기술](#출처-및-참조)에서 나온 방법을 추로 사용하고 있다.

우선 Redux Saga를 왜 사용해야하는 것일까?

### Redux Saga 사용하는 이유

Redux Saga는 다음과 같은 상황에서 유리하게 작용된다.

- 불필요한 중복요청 방지
- 특정 액선이 발생했을 때 다른 액션을 발생시키거나, API 요청 등 리덕스와 관계없는 코드를 실행할 때
- 웹 소켓을 사용할 때
- API 요청 실패 시 재요청해야 할 때

Redux Saga를 사용하기 위해서는 ES6의 제네레이터(Generator) 함수라는 문법을 알고 있어야 한다. 일반적인 상황에서는 사용되지 않음으로 이해하기 너무 어렵다. <del>_필자도 마찬가지로 이해하기가 너무 힘들다._</del>

제네레이터 함수에 대해서는 [Generator Function(제네레이터 함수)란 무엇인가?](/posts/what-is-generator-function)에서 정리되어 있다.

### Redux Saga 사용법

[개인 프로젝트](https://github.com/Moong-bee/bit_chart)에서 사용했던 방법으로 설명하겠다. 우선 이 프로젝트는 비트코인의 정보들을 실시간으로 가져오는 프로젝트이기 때문에 API 요청을 해야한다.

`gist:Moong-bee/768fc65d066933180b49e547628fb534#client.js`

axios에서 추가로 header나 무엇인가를 넣어야한다면 *export default client*위에 _client.default.~~~_ 로 작업하면 된다.

그 다음 비트코인 거래소인 빗썸의 API를 불러올 코드를 작성한다.

`gist:Moong-bee/768fc65d066933180b49e547628fb534#bitcoins.js`

이제 Redux와 Redux Saga를 가지고 Actions를 작성한다

`gist:Moong-bee/768fc65d066933180b49e547628fb534#bitCoinCharts.js`

추가로 Actions에 대해 캡슐화와 API 호출 / 종료에 대한 로직을 확인하기 위해 아래의 2개의 파일을 추가로 작업했다.

`gist:Moong-bee/768fc65d066933180b49e547628fb534#createRequestSaga.js`

`gist:Moong-bee/768fc65d066933180b49e547628fb534#loading.js`

그 다음 이 Redux들을 통합으로 관리할 RootReducer를 작성한다

`gist:Moong-bee/768fc65d066933180b49e547628fb534#index.js?highlights=7`

7번째 줄의 takeLatest가 Redux Saga를 이용하는 첫번째 이유의 역할을 한다.

takeLatest는 가장 마지막에 호출된 요청만 처리한다. 그 외에도 takeEvery도 있는데 이건 여러번의 호출 전부다 처리한다. 처리량이 많으면 안될 경우 takeLatest를 사용하길 바란다.

마지막으로 Redux는 Store라는 것을 통해 state를 관리한다. 그에 관련된 코드는 App.js에서 작업한다.

`gist:Moong-bee/768fc65d066933180b49e547628fb534#App.js`

API를 호출하고 state 값을 가지고 올때는 dispatch를 통해 호출하고 useSelector를 통해 state 값을 가지고 온다.

`gist:Moong-bee/768fc65d066933180b49e547628fb534#MainScreen.js?highlights=12-13,17`

### 출처 및 참조

- [책 - 리엑트를 다루는 기술(VELOPERT)](http://www.yes24.com/Product/Goods/78233628?OzSrank=1)
- [Github - 리액트를 다루는 기술 코드(VELOPERT)](https://github.com/velopert/learning-react)
- [Github - bit_coin(Moong-bee)](https://github.com/Moong-bee/bit_chart)
