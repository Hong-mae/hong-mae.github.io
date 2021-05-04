---
title: "프로그래머스 - 3진법 뒤집기"
date: "2020-12-08T14:09:14.000Z"
template: "post"
draft: false
slug: "programmers-practice-reverse-ternary-numeral-system"
category: "Algorithm"
tags:
  - "Programmers"
  - "월간 코드 챌린지 시즌 1"
  - "Coding Test"
description: "프로그래머스 3진법 뒤집기를 풀어보자."
socialImage: "/media/reverse_ternary_numeral.png"
---

### 문제 설명

자연수 n이 매개변수로 주어집니다. n을 3진법 상에서 앞뒤로 뒤집은 후, 이를 다시 10진법으로 표현한 수를 return 하도록 solution 함수를 완성해주세요.

### 제한 사항

- n은 1 이상 100,000,000 이하인 자연수입니다

### 입출력 예

|n|results|
|-|-|
|45|7|
|125|299|

### 설명

입출력 예 #1

- 답을 도출하는 과정은 다음과 같습니다.

|10진법|3진법|앞 뒤 반전|10진법 변환|
|-|-|-|-|
|45|1200|0021|7|

입출력 예 #2

- 답을 도출하는 과정은 다음과 같습니다.

|10진법|3진법|앞 뒤 반전|10진법 변환|
|-|-|-|-|
|125|11122|22111|299|

### 나의 풀이

`gist:Moong-bee/be6b3e0585e1932c483541a5ecf20ca5#calc.js`

1. n을 3진수 문자열로 변경 = n.toString(3)
2. 문자열을 각각 자름 (배열로 변경) = ~.split("")
3. 2번을 뒤집기 = ~.reverse()
4. 3번을 합치기 = ~.join("")
5. 3진수를 10진수로 변경 = parseInt(~, 3)


추가로 parseInt(문자열, [문자열의 진법 // default 10진법])