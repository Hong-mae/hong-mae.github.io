---
title: "기본 정렬 알고리즘 #1"
date: "2020-10-27 09:15:07 GMT+0900"
template: "post"
draft: false
slug: "basic-sorting-algorithm-1"
category: "Algorithm"
tags:
  - "Sort"
  - "Algorithm"
  - "Selection Sort"
description: "n개의 숫자가 입력 되었을 때 그 수를 여러가지 방식으로 정렬해보자. #1"
socialImage: "/media/sorting_banner.jpg"
---

정렬 알고리즘(sorting algorithm)이란 원소들을 번호순이나 사전 순서와 같이 일정한 순서대로 열거하는 알고리즘이다.

프로그래밍을 배우기 시작하고 또 배열과 반복문을 배우고 나서 우리가 할 수 있는 것이 바로 정렬 알고리즘의 기초인 선택 정렬(Selection Sort), 삽입 정렬(Insertion Sort) 그리고 버블 정렬(Bubble Sort)이다.

### 선택 정렬(Selection Sort)

![selection_sorting_anime.gif](/media/selection_sorting_anime.gif) _선택 정렬(Selection Sort)_

- 주어진 리스트 중에 최소값을 찾는다.
- 그 값을 맨 앞에 위치한 값과 교체한다(패스(pass)).
- 맨 처음 위치를 뺀 나머지 리스트를 같은 방법으로 교체한다.

`gist:Moong-bee/7925d91a2d1ab2ebbf9093ff2ce5494d#selection_sorting.cpp`

### 삽입 정렬(Insertion Sort)

![insertion_sorting.gif](/media/insertion_sorting.gif) _삽입 정렬(Insertion sort)_

- 순차적으로 원소를 선택한다.
- 선택된 원소의 이전 원소들을 순차적으로 비교한다.
- 만약 선택된 원소가 이전 원소보다 작으면 교체한다.

`gist:Moong-bee/7925d91a2d1ab2ebbf9093ff2ce5494d#insertion_sorting.cpp`

### 버블 정렬(Bubble Sort)

![bubble_sorting.gif](/media/bubble_sorting.gif) _버블 정렬(Bubble sort)_

- n번째 원소와 n+1번째 원소를 비교한다.(단, n+1은 배열의 최대 크기 - 1)
- n+1번째 원소가 작으면 서로 교체한다.

`gist:Moong-bee/7925d91a2d1ab2ebbf9093ff2ce5494d#bubble_sorting.cpp`

### 정리하면서

보통 어떤 알고리즘이 좋은지를 판단할때는 시간복잡도로 판단한다. 위의 3개의 정렬 알고리즘 중 **선택 정렬**과 **버블 정렬**은 보통 n^2의 시간복잡도를 가진다. **삽입 정렬**의 경우 보통은 n^2의 시간복잡도를 가지지만 정렬되어진 배열을 삽입 정렬시 n의 시간 복잡도를 가진다.

<table class='sort_algorithm'>
  <tr>
    <th>정렬 알고리즘</th>
    <th>최적</th>
    <th>평균</th>
    <th>최악</th>
  </tr>
  <tr>
    <td>Selection Sort</td>
    <td>n^2</td>
    <td>n^2</td>
    <td>n^2</td>
  </tr>
  <tr>
    <td>Bubble Sort</td>
    <td>n^2</td>
    <td>n^2</td>
    <td>n^2</td>
  </tr>
  <tr>
    <td>Insertion Sort</td>
    <td>n</td>
    <td>n^2</td>
    <td>n^2</td>
  </tr>
</table>

이외에도 많은 정렬 알고리즘이 있다. 퀵 정렬, 힙 정렬, 병합 정렬 등 많은 정렬 알고리즘들이 존재하며 이것들에 대해서는 추후 포스팅할 예정이다.
