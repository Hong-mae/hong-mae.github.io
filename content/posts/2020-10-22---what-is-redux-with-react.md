---
title: "Redux(리덕스)란 무엇인가? (feat. React and React Native)"
date: "2020-10-22 23:38:21 GMT+0900"
template: "post"
draft: false
slug: "what-is-redux-with-feat-react-and-react-native"
category: "Redux"
tags:
  - "Redux"
  - "React"
  - "React Native"
  - "React Redux"
  - "Redux Saga"
description: "React의 상태관리를 위해 Redux(리덕스)에 대해 알아보고 리액트에서 사용하는 법을 알아보자"
socialImage: "/media/react_redux_logo.png"
---

- [Redux(리덕스)란 무엇인가? (feat. React and React Native)](/posts/what-is-redux-with-feat-react-and-react-native)
- [Redux(리덕스) 사용법 (with. Redux-Saga)](/posts/how-to-use-redux-with-redux-saga)

리액트에는 state(상태)라는 것이 존재한다. 동적인 데이터를 사용할때 state를 통해 사용한다.

`gist:Moong-bee/625d6e1c8128623aef51a06cee53116c#Counter.js`

이렇게 아주 간단한 컴포넌트의 state는 다루기가 엄청 쉽다. 허나 여러 컴포넌트가 이용된다면, 또 글로벌한 state가 필요하다면 위와 같은 방식으로는 사용하기 힘들다.

그래서 사용하는 것이 Redux(리덕스)이다.

### Redux(리덕스)란 무엇인가?

리덕스란 클라이언트 state를 관리하는 라이브러리이다. <del>_비슷한 방법으로 ContextAPI라는 것이 있다._</del>

리덕스는 React에서 사용률이 가장 높다. 그리고 state관련 로직들을 각각 파일로 나눠서 효율적으로 관리할 수 있다. 또한 컴포넌트에서 state에 손쉽게 접근 가능하다.

### 리덕스를 왜 사용하는 걸까?

다음과 같은 컴포넌트들이 존재한다고 하자.

![state_1.png](/media/state_1.png)

F에서 어떠한 값(state)을 변경 하고 그 값을 H에게 전달하려면 Root -> B -> F, Root -> A -> D -> G -> H 이런 절차를 거쳐서 값을 전달해야한다.

![state_2.png](/media/state_2.png)

이 방법은 완전히 비효율 적이다. 해결방법으로 Redux를 사용한다면 F가 Redux Store에게 어떠한 값 변경에 대한 이벤트를 던지고 H는 Redux Store에서 변경된 어떠한 값을 가지고 올 수 있다.

![state_3.png](/media/state_3.png)

---

이것으로 리덕스에 대해 간략하게 알아봤다.

### 출처 및 참조

- [책 - 리엑트를 다루는 기술(VELOPERT)](http://www.yes24.com/Product/Goods/78233628?OzSrank=1)
- [Github - 리액트를 다루는 기술 코드(VELOPERT)](https://github.com/velopert/learning-react)
- [Blog - Minjun Kim(VELOPERT) : Redux (1) 소개 및 개념정리](https://velog.io/@velopert/Redux-1-%EC%86%8C%EA%B0%9C-%EB%B0%8F-%EA%B0%9C%EB%85%90%EC%A0%95%EB%A6%AC-zxjlta8ywt)
- [Blog - Jaden : 리덕스란?](https://blog.naver.com/yjdev/222123299620)
