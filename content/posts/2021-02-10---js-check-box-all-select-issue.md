---
title: '체크박스 전체 선택 / 전체 해제 만들기'
date: '2021-02-10 11:46:53 GMT+0900'
template: 'post'
draft: false
slug: 'html-all-select-issue'
category: 'HTML'
tags:
    - 'HTML'
    - 'JavaScript'
    - 'CheckBox'
description: '전체 선택을 해야하는 체크박스에서 생기는 이슈 해결하기'
socialImage: ''
---

웹 개발을 할때 간혹 전체 선택을 하는 페이지를 만들어야 하는 경우가 있다.

전체 선택을 하는 건 좋은데 여러가지 이슈도 같이 따라온다.

1. 전체 선택 체크 시 하위 메뉴들도 모두 체크 해야한다.
2. 전체 선택 체크 해제 시 하위 메뉴들도 모두 체크 해제 되어야한다.
3. 하위 메뉴를 전부 선택 했을 경우 전체 선택 메뉴도 자동으로 체크되어야한다.
4. 전체 선택 체크 후 하위 메뉴 중 하나를 체크 해제 하면 전체 선택 체크도 해제 되어야한다.

우선 다음과 같이 html 파일을 작성한다.

### 체크 박스 html

`gist:Moong-bee/81ead546cd49f7da12e45ce91c75265e#checkbox.html`

체크 박스들을 **\.checkbox_group**으로 한 곳에 묶어 놓고 전체 선택하는 체크박스는 **\#check_all**로 작성하였다.

### 전체 선택 / 해제

**\#check_all**을 선택 / 해제 할 경우는 다음 스크립트로 기능 구현 가능하다.

`gist:Moong-bee/81ead546cd49f7da12e45ce91c75265e#checkbox.js?highlights=2,5,7`

**\.checkbox_group**안에 있는 **\#check_all**에 **click**이벤트를 주는 코드이다.

2번째 줄 **$(this)\.is("checked");**를 통해 **\#check_all**이 체크 상태인지 확인할 수 있다.

5,7번째 줄 **$(this).siblings('input')**을 통해 주변에 있는 input 들을 체크한다.

### 하위 메뉴 전부 체크시 전체 선택 활성화 혹은 반대

`gist:Moong-bee/81ead546cd49f7da12e45ce91c75265e#checkbox_2.js?highlights=2-5`

전체 선택이 아닌 애들을 모두 확인해서 하나라도 체크되어있지 않다면 전체 선택을 해제한다. 거기다 모두 체크되어있다면 전체 선택을 활성화 한다.

모두 true 이면 true, 하나라도 false 이면 false....

true && true = true
true && false = false
false && true = false
false && false = false

**&&**연산자를 이용하면 해당 답이 나올것이다.

따라서 2-5번째 줄 처럼 우선 true를 기준으로 하위 메뉴들을 비교한다.

1. 아무것도 체크안된 상태에서 하위 메뉴를 클릭했을 경우, ex)아이폰만 체크할 경우

    - is_checked = true, 아이폰 = true, is_checked && 아이폰 = true이다.
    - is_checked = true, 아이패드 = false, is_checked && 아이패드 = false 이다
    - is_checked = false, 맥북 = false, 따라서 false이고 에어팟도 똑같이 작동한다.

2. 나머지가 체크된 상태에서 하위메뉴 하나를 클릭 했을 경우, ex) 아이패드만 체크안되어있을 경우
    - is_checked = true, 아이폰 = true, is_checked && 아이폰 = true
    - is_checked = true, 아이패드 = true, is_checked && 아이패드 = true,
    - .. 나머지도 다 true이기 때문에 생략

### 마치며

#### html

`gist:Moong-bee/81ead546cd49f7da12e45ce91c75265e#checkbox.html`

#### js

`gist:Moong-bee/81ead546cd49f7da12e45ce91c75265e#checkbox_3.js`
