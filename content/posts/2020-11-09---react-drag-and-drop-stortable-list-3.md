---
title: "개인 프로젝트 - React로 Drag and Drop List 만들기(Sortable) #3"
date: "2020-11-09T19:54:05.000Z"
template: "post"
draft: false
slug: "react-drag-and-drop-list-sortable"
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
- [React로 Drag and Drop List 만들기(Sortable) #3](/posts/react-drag-and-drop-list-sortable)

드디어 마지막 목적지 Sortable list를 만들어 보자.

우선 css부터 한번 작성해보자.

위아래로 움직이는 애니메이션을 주기 위해 [transform](https://developer.mozilla.org/ko/docs/Web/CSS/transform)과 [transition](https://developer.mozilla.org/ko/docs/Web/CSS/transition)을 사용한다.

- transform : 해당 요소의 크기, 위치 등을 조정한다.
- transition : 변화(width, height, transform 등의 변화)에 대한 딜레이(?)를 조정한다.

### transform 사용
선택한 요소가 다른 요소 위에 들어갈 경우(ondragenter) 위아래로 움직여야하기 때문에 transform에서 translate를 이용해 위치를 이동한다. 이전에 만든 list 요소 하나의 height가 41px 이며, 위로 올라갈 경우 move\_up 클래스를, 밑으로 내려갈 경우 move\_down 클래스를 추가하고, transition을 통해 움직이는 느낌을 주려고 한다.

``` scss
// index.scss
...생략

.list_item{
    ...생략
    transition: transform 200ms ease 0s;

    &.move_up {
        transform: translate(0, 41px)
    }

    &.move_down {
        transform: translate(0, -41px)
    }
}
...생략
```

### 생각해야하는 내용
![drag_and_drop_list_sortable.gif](/media/drag_and_drop_list_sortable.gif) 

위의 작업을 하려면 다음과 같은 조건이 필요하다. 위의 코드는 필자의 깃허브에 있다. [자세히 보기](https://github.com/Chill-bi/drag_and_drop)

1. 선택한 요소보다 위에 있는 요소는 밑으로 내려와야한다.
2. 선택한 요소보다 아래에 있는 요소는 위로 내려와야한다.
3. 따라서 선택한 요소의 정보가 필요하며 이동시 곂쳐지는 요소가 위에 있는지, 밑에 있는지 판단할 수 있어야한다.
4. 만약 움직였다가 Drop하지 않고 다시 원래 위치로 이동할 경우 움직였던 요소들도 원래대로 돌아와야한다.

1, 2, 4번을 해결하기 위에서는 현재 선택한 요소 정보(DragData)와 선택한 요소가 다른 요소위에 있을 경우 해당 요소의 정보(TargetData)가 필요하다. TargetData를 이탈 할 경우도 체크해야하니 Drag and Drop API에서 다음과 같은 API를 사용할 예정이다.

- DragData를 가져올 수 있는 ondragstart
- TargetData를 가져올 수 있는 ondragenter
- TargetData를 이탈했을 경우 정보를 가져올 수 있는 ondragleave

간단히 말해 Twitter를 잡아서(e.target = Twitter) Github 위에 지나갈 경우(e.target = Github)와 Github를 이탈할 경우(e.target = Github)를 체크하면 된다.

``` js
const onDragStart = e => {
    console.log(e.target) // e.target is Twitter
}

const onDragEnter = e => {
    console.log(e.target) // e.target is Github
}

const onDragLeave = e => {
    console.log(e.target) // e.target is Github
}
```




### 결과
