---
title: 'C로 자료구조 Stack 만들기 (정적/동적 구현)'
date: '2021-09-21 01:37:33 GMT+0900'
template: 'post'
draft: false
slug: 'c-stack-programming'
category: 'C/C++'
tags:
    - 'C/C++'
    - 'Data Structure'
    - '자료구조'
    - 'Stack'
description: '아는 동생이 알려달라고 한 C언어로 스택 구현하기'
socialImage: ''
---

오늘은 아는 동생이 학교에서 배운 자료구조를 C언어를 통해 만들고 싶다고 하여 작성해보는 시간을 가져보자. 맥에서 C 프로그래밍 하는 방법은 [여기](/posts/c-cpp-use-vscode-in-mac)를 통해 확인하자!

### Stack

우선 Stack(스택)이 무엇이냐 하면. LIFO(Last-In-First-Out)의 성질을 가지고 있는 자료구조이다. ~~늦게 들어온 놈이 처음 나간다!~~

<div class='picture'>

![stack_img.png](/media/stack_img.png) _스택 기본 설명_

</div>

### Static Stack - 정적 구조 스택

#### 구조체

간단하게 int형을 기반으로한 Stack 구조체를 생성했다. Stack 구조체는 데이터를 담아두는 배열 `int arr[]`, 인덱스 역할을 하는 `int top`으로 구성되어 있다.

`gist:Moong-bee/c59c91508854350e63e1c98b6c61eca3#static_stack.c?lines=1-8`

#### 데이터 초기화

top 데이터는 가장 최신 데이터의 인덱스를 저장해야하며, 처음에는 데이터가 없기 때문에 -1로 초기화 한다.

`gist:Moong-bee/c59c91508854350e63e1c98b6c61eca3#static_stack.c?lines=10-14`

#### 상태 체크

스택에 값을 넣거나 빼거나 할때 스택이 꽉 찼는지 비워져있는지 확인해야한다.

`gist:Moong-bee/c59c91508854350e63e1c98b6c61eca3#static_stack.c?lines=16-22`

#### 값 추가

우선 스택이 꽉 찼는지 체크하고 괜찮으면 데이터를 arr에 추가하고 top을 +1 한다.

`gist:Moong-bee/c59c91508854350e63e1c98b6c61eca3#static_stack.c?lines=24-27`

#### 값 제거

스택이 비워져있는지 체크하고 괜찮으면 데이터를 top을 -1 하고 arr에서 데이터를 빼고 그 데이터를 반환한다.

`gist:Moong-bee/c59c91508854350e63e1c98b6c61eca3#static_stack.c?lines=29-32`

#### 마지막 값 출력

스택이 비워져있는지 체크하고 괜찮으면 top이 가리키는 arr 요소를 반환한다.

`gist:Moong-bee/c59c91508854350e63e1c98b6c61eca3#static_stack.c?lines=34-37`

#### 테스트

스택을 s로 선언하고 데이터를 1,2,3,4,5를 순서대로 저장하고 마지막 데이터를 출력, 제거를 반복한다.

`gist:Moong-bee/c59c91508854350e63e1c98b6c61eca3#static_stack.c?lines=39-62`

<div class='picture'>

![static_stack_result.png](/media/static_stack_result.png) _정적 스택 결과_

</div>

#### 코드

`gist:Moong-bee/c59c91508854350e63e1c98b6c61eca3#static_stack.c`

### Dynamic Stack - 동적 구조 스택

정적 구현은 arr을 배열로 선언하고 그 크기를 제한했다. 동적 구현의 경우 arr을 단순한 변수 형태로 동적 메모리를 선언해서 사용한다. 기본적인 구조는 정적 구조 스택과 비슷하므로 변경된 사항만 작성하도록 하겠다. ~~여기서는 arr을 data로 변경~~

#### 구조체

`gist:Moong-bee/c59c91508854350e63e1c98b6c61eca3#dynamic_stack.c?lines=1-8`

배열이 사라지고 capacity, 즉 최대 용량을 뜻하는 변수가 추가되었다.

#### 데이터 초기화

`gist:Moong-bee/c59c91508854350e63e1c98b6c61eca3#dynamic_stack.c?lines=10-14`

top은 기존과 같이 -1, capacity는 1, data는 capacity 크기 만큼 동적 메모리를 할당한다.

#### 상태 체크 - isFull

`gist:Moong-bee/c59c91508854350e63e1c98b6c61eca3#dynamic_stack.c?lines=20-22`

최대 용량인 capacity랑 top이 같을 경우 스택이 꽉 찼다고 설정함.

#### 값 추가

`gist:Moong-bee/c59c91508854350e63e1c98b6c61eca3#dynamic_stack.c?lines=24-30`

동적 구조이므로 스택이 꽉 차면 현재 최대 용량을 2배로 늘리고 data의 정보는 그대로 유지한 체 data의 크기를 늘려준다.

#### 코드

`gist:Moong-bee/c59c91508854350e63e1c98b6c61eca3#dynamic_stack.c`

### 마치며

오랜만에 대학교 1학년때 배웠던 내용을 다시 복습하는 시간을 가졌다. 옛날로 돌아간거 같고 기분이 좋았다. 그때 배웠던 내용을 다시한번 되세기는 시간을 가져야겠다.
