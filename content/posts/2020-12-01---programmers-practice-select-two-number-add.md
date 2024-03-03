---
title: '프로그래머스 - 두 개 뽑아서 더하기'
date: '2020-12-02 01:05:29 GMT+0900'
template: 'post'
draft: false
slug: 'programmers-select-two-number-add'
category: 'Algorithm'
tags:
    - 'Programmers'
    - '월간 코드 챌린지 시즌 1'
    - 'Coding Test'
description: '프로그래머스에 있는 두 개 뽑아서 더하기를 풀어보자.'
socialImage: '/media/programmers_select_two_number_add.png'
---

### 문제 설명

정수 배열 numbers가 주어집니다. numbers에서 서로 다른 인덱스에 있는 두 개의 수를 뽑아 더해서 만들 수 있는 모든 수를 배열에 오름차순으로 담아 return 하도록 solution 함수를 완성해주세요.

### 제한 사항

-   numbers의 길이는 2 이상 100 이하
-   numbers의 모든 수는 0 이상 100 이하

### 입출력 예

| numbers     | results       |
| ----------- | ------------- |
| [2,1,3,4,1] | [2,3,4,5,6,7] |
| [5,0,2,7]   | [2,5,7,9,12]  |

### 설명

입출력 예 #1

-   2 = 1 + 1 입니다. (1이 numbers에 두 개 있습니다.)
-   3 = 2 + 1 입니다.
-   4 = 1 + 3 입니다.
-   5 = 1 + 4 = 2 + 3 입니다.
-   6 = 2 + 4 입니다.
-   7 = 3 + 4 입니다.
-   따라서 [2,3,4,5,6,7] 을 return 해야 합니다.

입출력 예 #2

-   2 = 0 + 2 입니다.
-   5 = 5 + 0 입니다.
-   7 = 0 + 7 = 5 + 2 입니다.
-   9 = 2 + 7 입니다.
-   12 = 5 + 7 입니다.
-   따라서 [2,5,7,9,12] 를 return 해야 합니다.

### 나의 풀이

`gist:Hong-mae/da3a093f172f915963346c187e99a2e1#calc.js?highlights=10`

그냥 간단히 처음 수 부터 순차적으로 탐색하여 다음 수를 더해 배열에 저장하고 혹시 모를 중복을 대비해서 중복을 제거했다(10번째 줄).
