---
title: "개인 프로젝트 - React로 Drag and Drop List 만들기(Sortable) #3"
date: "2020-11-09 19:54:05 GMT+0900"
template: "post"
draft: false
slug: "react-drag-and-drop-list-sortable"
category: "React"
tags:
  - "React"
  - "Drag and Drop"
  - "List"
description: "드래그 앤 드롭 - Sortable이 가능한 리스트를 라이브러리 없이 만들어보자."
socialImage: "/media/drag_and_drop_list.png"
---

- [React로 Drag and Drop List 만들기 #1](/posts/react-drag-and-drop-list)
- [React로 Drag and Drop List 만들기(Swap) #2](/posts/react-drag-and-drop-list-2)
- [React로 Drag and Drop List 만들기(Sortable) #3](/posts/react-drag-and-drop-list-sortable)

드디어 마지막 목적지 Sortable list를 만들어 보자.

우선 css부터 한번 작성해보자.

위아래로 움직이는 애니메이션을 주기 위해 [transform](https://developer.mozilla.org/ko/docs/Web/CSS/transform)과 [transition](https://developer.mozilla.org/ko/docs/Web/CSS/transition)을 사용한다.

- transform : 해당 요소의 크기, 위치 등을 조정한다.
- transition : 변화(width, height, transform 등의 변화)에 대한 딜레이(?)를 조정한다.

### transform 사용

선택한 요소가 다른 요소 위에 들어갈 경우(ondragenter) 위아래로 움직여야하기 때문에 transform에서 translate를 이용해 위치를 이동한다. 이전에 만든 list 요소 하나의 height가 41px 이며, 위로 올라갈 경우 move_up 클래스를, 밑으로 내려갈 경우 move_down 클래스를 추가하고, transition을 통해 움직이는 느낌을 주려고 한다.

`gist:Moong-bee/2e0f22cc5c9ab3e3a3cbc0e0cf08c87a#App.scss?lines=18-34`

### 생각해야하는 내용

![drag_and_drop_list_sortable.gif](/media/drag_and_drop_list_sortable.gif)

위의 작업을 하려면 다음과 같은 조건이 필요하다. 위의 코드는 필자의 깃허브에 있다. [자세히 보기](https://github.com/Moong-bee/drag_and_drop)

1. 선택한 요소보다 위에 있는 요소는 밑으로 내려와야한다.
2. 선택한 요소보다 아래에 있는 요소는 위로 내려와야한다.
3. 따라서 선택한 요소의 정보가 필요하며 이동시 곂쳐지는 요소가 위에 있는지, 밑에 있는지 판단할 수 있어야한다.
4. 만약 움직였다가 Drop하지 않고 다시 원래 위치로 이동할 경우 움직였던 요소들도 원래대로 돌아와야한다.

1, 2, 4번을 해결하기 위에서는 현재 선택한 요소 정보(GrabData)와 선택한 요소가 다른 요소위에 있을 경우 해당 요소의 정보(TargetData)가 필요하다. TargetData를 이탈 할 경우도 체크해야하니 Drag and Drop API에서 다음과 같은 API를 사용할 예정이다.

- GrabData를 가져올 수 있는 ondragstart
- TargetData를 가져올 수 있는 ondragenter
- TargetData를 이탈했을 경우 정보를 가져올 수 있는 ondragleave

간단히 말해 Twitter를 잡아서(e.target = Twitter) Github 위에 지나갈 경우와 Github를 이탈할 경우(e.target = Github)를 체크하면 된다.

```js
let GrabData = null;

const onDragStart = (e) => {
  console.log(e.target); // e.target is Twitter
};

const onDragEnter = (e) => {
  console.log(e.target); // e.target is Github
};

const onDragLeave = (e) => {
  console.log(e.target); // e.target is Github
};
```

onDragStart에서 GrabData 정보를, onDragEnter / onDragLeave 에서 TargetData를 확인 할 수 있기에 이를 어떻게 활용해야하나 하다가 onDragStart에서 GrabData를 state로 저장하고, onDragEnter 에서 GrabData와 TargetData의 상하관계를 판단해서 transform을 추가하고, onDragLeave에서 추가된 transform을 지우기로 했다.

`gist:Moong-bee/2e0f22cc5c9ab3e3a3cbc0e0cf08c87a#App.js?lines=58-68`

### 문제점

1. GrabData가 TargetData위에 올라가면(onDragEnter) 움직이는데 움직이면서 위치가 한칸 위/아래로 움직여서 이탈처리가 된다.
   이탈이 되면 onDragLeave가 되니 원래대로 돌아온다. 이걸 계속 반복하니 이상하게 된다.
2. 어느순간 Drop을 하면 뭔가 빈 리스트가 생긴다.
3. 뭔가 순차적으로 위/아래로 이동해야 하는데 안된다.

<iframe width="100%" height="500" style="display:block" src="//jsfiddle.net/Chill_bi/aqzsvk04/116/embedded/js,result/dark/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

### 생각해보기

우선 onDragEnter와 onDragLeave에서 transform 클래스를 추가/제거 하는 코드를 지우고 다르게 transform을 적용할 수 있는 방법을 찾다가 move_up, move_down의 정보를 따로 저장하고 return()에서 해당 값을 확인해서 랜더링 할 수 있는 방법을 생각했다.

### 결과

<iframe width="100%" height="500" style="display:block" src="//jsfiddle.net/Chill_bi/aqzsvk04/268/embedded/js,result/dark/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

### 설명

`gist:Moong-bee/2e0f22cc5c9ab3e3a3cbc0e0cf08c87a#complete_app.js?lines`

- [11-17] \_initGrabData : 좀 더 상세화 된 grab 정보를 state로 저장하기 위한 기본 틀
- [22] isDrag : 현재 드래그 중인지 아닌지의 정보를 담은 state
- [28-40] \_onDragStart : 드래그를 시작하기 때문에 isDrag를 true로 변경하고, 현재 선택된 요소 정보(li tag, position 정보)를 저장하고 현재 리스트 정보를 다음 리스트(updateList)로 판단하여 저장한다.
- [42-57] \_onDragEnd : 드래그가 끝났기 때문에 isDrag를 false로 변경하고, 다음 리스트(updateList)를 현재 리스트로 변경한다.
- [59-86] \_onDragEnter : 필요한 정보를 가져오고 필요에 맞게 설정한다.
  - 선택된 요소의 position 정보(grabPosition)
  - 상하관계를 가지는 타겟 요소의 position 정보(targetPosition)
  - updateList에서 선택된 요소의 position 정보(listPosition)
  - 현재 리스트 중 move_up, move_down 클래스를 적용시킬 index 배열(move_up, move_down)
- [102-105, 111] move_up, move_down 배열과 index의 포함관계에 따라 클래스 적용

### 마치면서

좋은 라이브러리를 사용하지 않고 오로지 나의 힘으로 해당 기능을 완성했다. 처음엔 뭐가 잘못됐는지 뭐가 다른지를 찾는것에 오래 걸렸다. 하지만 아직 부족한 것이 많은 기능이기에 조금씩 더 보완하면서 지식을 다듬고 싶다.
