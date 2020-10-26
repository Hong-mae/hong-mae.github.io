---
title: "기본 정렬 알고리즘 #1"
date: "2020-10-27T09:15:07.000Z"
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

![selection_sorting_anime.gif](/media/selection_sorting_anime.gif) *선택 정렬(Selection Sort)*

- 주어진 리스트 중에 최소값을 찾는다.
- 그 값을 맨 앞에 위치한 값과 교체한다(패스(pass)).
- 맨 처음 위치를 뺀 나머지 리스트를 같은 방법으로 교체한다.

`gist:Chill-bi/7925d91a2d1ab2ebbf9093ff2ce5494d#selection_sorting.cpp`

### 삽입 정렬(Insertion Sort)

![insertion_sorting.gif](/media/insertion_sorting.gif) *삽입 정렬(Insertion sort)*

`gist:Chill-bi/7925d91a2d1ab2ebbf9093ff2ce5494d#insertion_sorting.cpp`

### 버블 정렬(Bubble Sort)

![bubble_sorting.gif](/media/bubble_sorting.gif) *버블 정렬(Bubble sort);*

`gist:Chill-bi/7925d91a2d1ab2ebbf9093ff2ce5494d#bubble_sorting.cpp`