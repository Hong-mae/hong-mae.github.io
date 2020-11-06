---
title: "개인 프로젝트 - React로 Drag and Drop List 만들기(Swap) #2"
date: "2020-11-05T00:09:28.000Z"
template: "post"
draft: false
slug: "react-drag-and-drop-list-2"
category: "React"
tags:
  - "React"
  - "Drag and Drop"
  - "List"
description: "드래그 앤 드롭이 가능한 리스트를 라이브러리 없이 만들어보자."
socialImage: "/media/drag_and_drop_list.png"
---

- [React로 Drag and Drop List 만들기 #1](/posts/react-drag-and-drop-list)
- [React로 Drag and Drop List 만들기(Swap) #2](/posts/react-drag-and-drop-list-2)

지난 포스트에서 state를 이용해 리스트를 보여줬다.

Drag and Drop API를 이용해서 Drag 한 요소와 Drop 한 위치의 요소를 서로 변경(Swap)하는 코드를 먼저 작성해보기로 했다.

<iframe width="100%" height="500" style="display:block" src="//jsfiddle.net/Chill_bi/vt3c802w/62/embedded/js,result/dark/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

`gist:Chill-bi/fe59b01412daea0807dd39c45cf52fd8#drag_and_drop_list_swap.js?lines=13,15-40`

### 설명
우선 함수는 다음과 같다

1. _onDragOver
2. _onDragStart
3. _onDragEnd
4. _onDrop

함수의 호출 순서는 (1), 2, 4, 3 순으로 호출된다. 1번의 경우 밀리초 단위로 실행되기 때문에 순서에 영향이 없다.

코드의 설명은 다음과 같다. 

- [13] grab, setGrab : 현재 drag를 위해 선택된 요소를 저장하기 위해 state를 하나 더 추가했다.
- [14-17] _onDragOver :  ondrop이벤트를 활성화 하기 위해 ondragover에 e.preventDefault() 설정을 했다.
- [19-24] _onDragStart : drag를 위해 요소를 선택하면 발생하는 함수. 여기서는 선택된 요소를 state에 저장하고, 선택된 요소에 grabbing 커서를 주는 css class를 추가한다. 그 외 e.dataTransfer에 대해서는 [여기](https://developer.mozilla.org/ko/docs/Web/API/DataTransfer)를 통해 확인바란다.
- [26-30] _onDragEnd : drop 후 발생하는 이벤트. drag를 위해 선택된 요소에 추가된 css class를 지운다. 추가적으로 grab state를 null로 바꾸는 작업을 해도 된다.
- [32-40] _onDrop : drag를 위해 선택된 요소를 원하는 위치에 놓으면 발생한다. 이때 **리스트를 서로 변경하는 코드를 작성한다.**

다음 포스트는 원하는 위치에 drop 할 경우 그 이외의 요소들이 자동적으로 정렬(?)되는 리스트를 포스팅하겠다.

### 미리보기
![drag_and_drop_list_sortable.gif](/media/drag_and_drop_list_sortable.gif) *Sortable List*