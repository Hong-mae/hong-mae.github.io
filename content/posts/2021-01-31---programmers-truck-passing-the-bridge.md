---
title: "프로그래머스 - 다리를 지나는 트럭"
date: "2021-01-31T01:33:04.000Z"
template: "post"
draft: false
slug: "programmers-truck-passing-the-bridge"
category: "Algorithm"
tags:
  - "Progammers lv.2"
  - "Stack/Queue"
description: "프로그래머스 level 2 다리를 지나는 트럭을 풀어보자."
socialImage: "/media/truck_passing_the_bridge.png"
---

### 문제 설명

트럭 여러 대가 강을 가로지르는 일 차선 다리를 정해진 순으로 건너려 합니다. 모든 트럭이 다리를 건너려면 최소 몇 초가 걸리는지 알아내야 합니다. 트럭은 1초에 1만큼 움직이며, 다리 길이는 bridge_length이고 다리는 무게 weight까지 견딥니다.
※ 트럭이 다리에 완전히 오르지 않은 경우, 이 트럭의 무게는 고려하지 않습니다.

예를 들어, 길이가 2이고 10kg 무게를 견디는 다리가 있습니다. 무게가 [7, 4, 5, 6]kg인 트럭이 순서대로 최단 시간 안에 다리를 건너려면 다음과 같이 건너야 합니다.

|경과 시간|	다리를 지난 트럭|	다리를 건너는 트럭|	대기 트럭|
|-|-|-|-|
|0|	[]|	[]|	[7,4,5,6]|
|1~2|	[]|	[7]|	[4,5,6]|
|3|	[7]|	[4]|	[5,6]|
|4|	[7]|	[4,5]|	[6]|
|5|	[7,4]|	[5]|	[6]|
|6~7|	[7,4,5]|	[6]|	[]|
|8|	[7,4,5,6]|	[]|	[]|

따라서, 모든 트럭이 다리를 지나려면 최소 8초가 걸립니다.

solution 함수의 매개변수로 다리 길이 bridge\_length, 다리가 견딜 수 있는 무게 weight, 트럭별 무게 truck\_weights가 주어집니다. 이때 모든 트럭이 다리를 건너려면 최소 몇 초가 걸리는지 return 하도록 solution 함수를 완성하세요.

### 제한 사항

- bridge_length는 1 이상 10,000 이하입니다.
- weight는 1 이상 10,000 이하입니다.
- truck_weights의 길이는 1 이상 10,000 이하입니다.
- 모든 트럭의 무게는 1 이상 weight 이하입니다.

### 입출력 예

| bridge_length |	weight |	truck_weights |	return|
|-|-|-|-|
| 2 |	10 |	[7,4,5,6] |	8|
| 100 |	100 |	[10] |	101|
| 100 |	100 |	[10,10,10,10,10,10,10,10,10,10] |	110|

### 설명

입출력 예 #1

- 문제 설명에 포함.

### 나의 풀이

`gist:Moong-bee/059b099bf35bc57f6d80e7f1b5cd381c#move_truck.js`

0. 움직이는 트럭의 번호(weight)와 움직임(move)를 하나의 트럭으로 취급하기로 함.
``` js
  const truck = {
      weight: String,
      move: Number
  }
```
1. 기다리는 트럭도 없고 움직이는 트럭이 없으면 현재 순차를 반환
2. 이미 움직이는 트럭들(moving)이 있을 경우 순차적으로 트럭들의 움직임(move)을 +1
3. 만약 다리 길이(bridge_length) 보다 크면 다리를 건넌 트럭(complete)에 추가
4. 움직이는 트럭들(moving)에서 한 트럭이 빠졌기 때문에 이전 트럭 차례로 다시 돌림.
5. 움직이는 트럭들(moving)의 무게의 총합을 구함(moving_weight)
6. 다리가 견딜수 있는 무게(weight)가 5번의 값 + 대기중인 트럭들(truck\_weights)의 첫번째 트럭의 무게보다 크거나 같으면 움직이는 트럭들(moving)에 대기중인 트럭들(truck\_weights)의 첫번째 트럭을 추가한다.
7. 이를 무한반복 시킨다. *1번에 의해 종료조건이 맞춰지면 종료됨*