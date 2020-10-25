---
title: "Generator Function(제네레이션 함수)란 무엇인가?"
date: "2020-10-25T23:11:14.000Z"
template: "post"
draft: false
slug: "what-is-generator-function"
category: "JavaScript"
tags:
  - "JavaScript"
  - "ES6"
  - "Generator Function"
  - "제네레이션 함수"
description: "ES6 문법 중 Generator Function(제네레이션 함수)에 대해 무엇인지 그리고 사용법을 알아보자"
socialImage: "/media/generator_js_logo.png"
---

### Generator 함수란
제네레이터 함수는 사용자의 요구에 따라 특정 구간에서 함수를 멈춰 놓을 수 있고(yield), 다시 시작(next) 할 수도 있다.

아래와 같은 함수가 있다고 생각해보자

`gist:Chill-bi/7a8227577987890fd7644042b0aef0c1#GeneratorFunction.js?lines=1-6`

위의 코드를 실행하면 당연히 1이 반환된다. 우리가 배운 코딩에서는 말이다. 하지만 위의 함수를 통해 순차적으로 1, 2, 3 ... 을 받고 싶을 경우는 어떻게 처리해야할까? 바로 제네레이터 함수를 이용하면 된다.

`gist:Chill-bi/7a8227577987890fd7644042b0aef0c1#GeneratorFunction.js?lines=8-16`

제네레이터 함수는 function* 키워드를 사용한다. 위의 코드를 실행하면 다음과 같은 결과를 얻는다.

`gist:Chill-bi/7a8227577987890fd7644042b0aef0c1#GeneratorFunction.js?lines=19-33`

함수가 처음 생성되었을 경우 함수는 멈춰있는 상태이다. next()를 호출할 경우 다음 yield가 있는 곳 까지 이동하고 다시 멈춘다. next() 파라미터를 넣으면 yield를 통해 값을 확인 할 수 있다.

`gist:Chill-bi/7a8227577987890fd7644042b0aef0c1#GeneratorFunction.js?lines=36-53`

### 이해가 안되는 것..
하지만 이해가 안된다. yield를 만나면 멈추는데 next(100)을 넣으면 yield에 값이 전달된다는데 value는 undefined다. 그럼 제일 처음 next(100)을 넣으면 어떻게 되는 걸까? 결과는 undefined 다

`gist:Chill-bi/df6fecb2f9249998e3e35d95707e17c5#GeneratorTest.js`

이건 필자의 생각이지만 제일 처음 next()는 아무리 값을 넣어도 yield에 값이 들어가지 않고 그 자리에서 멈추는 것 같다.

다음 next(200);을 실행하면 멈춘 자리 yield에 100을 넣고 다음 yield까지 이동하고 멈추는 것 같고

그 다음 next(300);을 넣으면 똑같이 멈춘 yield에 200을 넣고 다음 yield까지 이동하는데 **마지막으로 넣은 yield 다음에는 a + b 라는 것이 있어 200 + 300을 더한 500이란 값이 value에 들어오는 것 같다.**

`gist:Chill-bi/c6cc0e89c68c824d96b0159b26e5bb87#GeneratorTest_solve.js`

참 신가한 함수인 것 같다.