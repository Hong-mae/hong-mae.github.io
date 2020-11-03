---
title: "개인 프로젝트 - React로 Drag and Drop List 만들기 #1"
date: "2020-11-03T17:36:57.000Z"
template: "post"
draft: false
slug: "react-drag-and-drop-list"
category: "React"
tags:
  - "React"
  - "Drag and Drop"
  - "List"
description: "드래그 앤 드롭이 가능한 리스트를 라이브러리 없이 만들어보자."
socialImage: "/media/drag_and_drop_list.png"
---

첫번째 개인 프로젝트 완료 후 어떤 프로젝트를 할까 고민중에 드래그 앤 드롭이 되는 리스트를 만들기로 했다.

React 라이브러리로 좋은 라이브러리들이 있었지만 [html drag and drop api](https://developer.mozilla.org/ko/docs/Web/API/HTML_%EB%93%9C%EB%9E%98%EA%B7%B8_%EC%95%A4_%EB%93%9C%EB%A1%AD_API)을 이용해서 라이브리러리 없이 만들고 싶었다.

html에서 제공하는 drag and drop api에서 유심히 본 api는 다음과 같다. <del>*사실 밑에있는게 전부다.*</del>

- ondragover : 요소가 드래그 대상 위를 지나갈 경우 발생(밀리초 단위로 실행됨 주의!)
- ondragstart : 요소를 드래그 할 경우 발생
- ondragend : 드래그가 끝날 경우 발생
- ondragenter : 요소가 다른 드래그 요소 위에 있을 경우 발생
- ondragleave : 요소가 다른 드래그 요소 위에 있다가 이탈할 경우 발생
- *ondrop* : 요소를 드롭할 경우 발생(ondragover에서 preventDefault()가 발생해야 함)

