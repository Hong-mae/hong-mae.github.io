---
title: '개인 프로젝트 - React로 Drag and Drop List 만들기 #1'
date: '2020-11-03 17:36:57 GMT+0900'
template: 'post'
draft: false
slug: 'react-drag-and-drop-list'
category: 'React'
tags:
    - 'React'
    - 'Drag and Drop'
    - 'List'
description: '드래그 앤 드롭이 가능한 리스트를 라이브러리 없이 만들어보자.'
socialImage: '/media/drag_and_drop_list.png'
---

-   [React로 Drag and Drop List 만들기 #1](/posts/react-drag-and-drop-list)
-   [React로 Drag and Drop List 만들기(Swap) #2](/posts/react-drag-and-drop-list-2)
-   [React로 Drag and Drop List 만들기(Sortable) #3](/posts/react-drag-and-drop-list-sortable)

두번째 어떤 프로젝트를 할까 고민중에 드래그 앤 드롭이 되는 리스트를 만들기로 했다.

React 라이브러리로 좋은 라이브러리들이 있었지만 [html drag and drop api](https://developer.mozilla.org/ko/docs/Web/API/HTML_%EB%93%9C%EB%9E%98%EA%B7%B8_%EC%95%A4_%EB%93%9C%EB%A1%AD_API)을 이용해서 라이브리러리 없이 만들고 싶었다.

### Drag and Drop API

html에서 제공하는 drag and drop api에서 유심히 본 api는 다음과 같다. <del>_사실 밑에있는게 전부다._</del>

-   ondragover : 요소가 드래그 대상 위를 지나갈 경우 발생(밀리초 단위로 실행됨 주의!)
-   ondragstart : 요소를 드래그 할 경우 발생
-   ondragend : 드래그가 끝날 경우 발생
-   ondragenter : 요소가 다른 드래그 요소 위에 있을 경우 발생
-   ondragleave : 요소가 다른 드래그 요소 위에 있다가 이탈할 경우 발생
-   _ondrop_ : 요소를 드롭할 경우 발생(ondragover에서 preventDefault()가 발생해야 함)

그리고 드래그 앤 드롭을 할 요소에 **draggable**을 추가하고 드래그 요소를 클릭하고 이동시 grab한 효과가 추가된다.

`gist:Hong-mae/28b1b6fca6dba6c11c8cbf3214a6d013#drag_and_drop_list.js#highlights=8`

### 코딩하기

React Hooks API중 하나인 useState를 이용해 기본 리스트 및 변경된 리스트를 저장한다.

설정한 state를 바탕으로 html을 보여준다.

`gist:Hong-mae/28b1b6fca6dba6c11c8cbf3214a6d013#drag_and_drop_list_2.js#highlights=14,19-32`

### 결과

<iframe width="100%" height="500" style="display:block" src="//jsfiddle.net/Chill_bi/p38t9ed4/93/embedded/js,result/dark/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

다음 포스트에서 계속
