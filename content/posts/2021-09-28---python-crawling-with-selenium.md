---
title: 'Python을 이용한 고양이 사진 크롤러 만들기! with. Selenium'
date: '2021-09-28 15:09:33 GMT+0900'
template: 'post'
draft: false
slug: 'python-crawling-with-selenium'
category: 'Python'
tags:
    - 'Python'
    - 'Crawling'
    - '파이썬'
    - '크롤링'
    - 'Chrome'
description: '파이썬을 이용하여 크롤링에 대해 알아보고 고양이 사진 크롤러를 만들어 보자!'
socialImage: ''
---

이전 회사에서 전국 호텔, 객실, 가격 정보를 받아야하는 상황이 있어 찾아보다가 결국 크롤링을 하기로 했다. 그때 예약 사이트를 이용했다.

그 당시 크롤링에 대해 전혀 모르는 상태에서 시작해야 했기에 많은 어려움이 있었지만 결과를 얻고 파일로 저장하는 과정이 너무 재밌었다. 그때 그 경험을 바탕으로 이번 포스팅을 시작하겠다.

### 크롤링(Crawling)이란?

웹 크롤러(web crawler)는 조직적, 자동화된 방법으로 웹을 탐색하는 컴퓨터 프로그램이다. - 위키백과

설명은 뭔가 거창해보이지만 우리가 자주 이용하는 검색 엔진(네이버, 구글 등)에서도 크롤링을 한다. 우리가 만든 웹 사이트를 배포한다고 끝이 아니라 사람들에게 보여줘야 웹이 활성화 된다.

그 과정에서 네이버 서치어드바이저, 구글 서치 콘솔 등에 본인의 웹 사이트를 등록해 자동으로 웹 사이트를 읽어 검색엔진에서 보여주게 된다. ~~sitemap을 만드는 과정이 필요하다.~~

크롤링을 하는 방법은 여러가지가 있다. 그 중 가장 편하게 했던 방법인 **chromedriver**와 **selenium**을 파이썬으로 이용하는 방법이다.

### chromedriver 설치하기

Chrome이 설치 돼있다는 전제하에 설명하겠다. 우선 현재 설치된 Chrome의 버전을 알아야한다.

Chrome을 실행해 주소창에 `chrome://version`을 입력하면 제일 상단에 현재 Chrome의 버전을 알 수 있다.

<div class='picture'>

![check_chrome_version.jpeg](/media/check_chrome_version.jpeg) _chrome version 확인_

</div>

이제 [chromedriver 홈페이지](https://chromedriver.chromium.org/downloads)에서 본인 버전과 같은 버전 링크를 클릭해 다운로드 페이지로 들어간다. ~~나는 94.0.4606.61버전 이므로 해당 버전을 설치했다~~

<div class='picture'>

![94.0.4606.61 버전 드라이브 다운로드](/media/chromedriver_download.png) _94.0.4606.61 버전 chromedriver 다운로드_

</div>

다운로드 페이지에서 현재 본인의 OS에 맞는 버전을 선택해 다운로드 받고 압축을 푼 실행 파일을 C드라이브나 본인이 기억 할 수 있는 경로에 저장한다. ~~나는 바탕화면에 chromedriver 폴더를 생성해 저장했다.~~

### Python 설치하기

Python 설치에 관련된 [포스팅](/posts/install-python)을 확인하자!

### 크롤링 관련 패키지 설치 및 실행

```
$ pip install selenium
```

Selenium(셀레니움)을 설치하고 `.py`파일을 만들어 다음과 같이 수정한다.

`gist:Hong-mae/98c30b099cc560e2590c5ad01c64604e#open_chromedriver.py?lines=1-3`

수정 후 실행하면 다음과 같이 새로운 크롬 창이 열린다.

<div class='picture'>

![open_chromedriver.png](/media/open_chromedriver.png) _chromedriver 창_

</div>

### 브라우저 자동 종료 및 중복 실행 방지하기

코드를 실행하다보면 웹브라우저가 켜지고 원하지 않는데 꺼지는 경우가 많다. 보통 sleep 이나 입력을 기다리게 해서 방지를 하지만 chrome을 디버깅 모드로 실행시켜 방지하는 방법도 있다.

```bash
# Windows
$ [chrome.exe 경로] --remote-debugging-port=[원하는 포트] --user-data-dir=[프로젝트 경로]

# MacOS
$ /Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --remote-debugging-port=9222 --user-data-dir=[프로젝트 경로]
```

위의 명령어를 실행하면 크롬 창이 하나 뜬다. 그리고 다음과 같이 코드를 작성한다.

`gist:Hong-mae/98c30b099cc560e2590c5ad01c64604e#open_chromedriver.py?lines=1-9`

### 원하는 페이지 열기

실행된 크롬 창을 원하는 페이지로 열려면 다음 코드를 작성하여 열 수 있다.

`gist:Hong-mae/98c30b099cc560e2590c5ad01c64604e#open_chromedriver.py?lines=11-12`

<div class='picture'>

![open_google.png](/media/open_google.png) _구글 접속하기_

</div>

### 특정 태그를 선택하기

특정 태그를 찾을 때에는 여러가지 방법이 있다.

1. find_element\_\~\~\~\~ : 한개만 선택
2. find_elements_by\_\~\~\~\~ : 복수개 선택

태그에 id는 중복해서 작성하지 않기 때문에 1번을 class 관련해서 선택할 경우 중복이 많기 때문에 2번을 많이 사용한다.

\~\~\~\~에도 여러가지가 있다.

1. find_element\(s\)\_by_id : id 속성으로 태그 검색
2. find_element\(s\)\_by_class_name : class 속성으로 태그 검색
3. find_element\(s\)\_by_css_selector: css 형식의 속성으로 태그 검색
4. find_element\(s\)\_by_xpath : XML 요소 선택으로 태그 검색

이 외에도 몇가지 있지만 자주 사용되는 것으로 사용할 예정이다.

### 고양이 검색하기

고양이를 검색하기 위해 검색어를 입력하는 input 창을 찾아야한다. input 태그의 속성을 확인하면(ctrl/cmd + shift + c 후 input창 클릭) class 등 많은 정보를 확인 할 수 있다.

<div class='picture'>

![check_input_tag.png](/media/check_input_tag.png) _input 태그 속성 확인_

</div>

input 태그에 id 속성이 없기 때문에 class, css\-selector, xpath 속성으로 검색해야한다. 따라서 다음의 코드로 input 태그를 선택하고 `고양이`로 채우고 검색한다.

`gist:Hong-mae/98c30b099cc560e2590c5ad01c64604e#open_chromedriver.py?lines=14-17`

### 이미지 탭 클릭하기

이미지 탭을 클릭하기 위해 상단 "이미지" 부분의 요소를 찾아보자

<div class='picture'>

![check_image_tab_attr.png](/media/check_image_tab_attr.png)

</div>

id도 없고.. class도 없고... 따라서 css\-selector 또는 xpath를 이용해야한다. xpath를 이용해서 코드를 작성해보자.

`gist:Hong-mae/98c30b099cc560e2590c5ad01c64604e#open_chromedriver.py?lines=19-21`

### 첫번째 이미지 정보 가져오기

첫번째 이미지 태그를 가져오는 코드는 다음과 같다.

`gist:Hong-mae/98c30b099cc560e2590c5ad01c64604e#open_chromedriver.py?lines=23-24`

위의 코드로 이미지 태그를 가져 올 수 있고 해당 정보를 잘 가져오는지 print를 통해 출력해보자

`gist:Hong-mae/98c30b099cc560e2590c5ad01c64604e#open_chromedriver.py?lines=26-27`

<div class='picture'>

![print_img_src.png](/media/print_img_src.png)

</div>

만약 src가 url형식이라면 url이 출력되고 이미지의 경우 base64 인코딩된 정보가 src에 있기 때문에 해당 정보가 뜨는 것이다.

### 가져온 이미지 저장하기

그럼 src 정보를 바탕으로 이미지를 저장하려면 어떻게 해야하나!

urllib에 있는 기능을 이용하여 다운 받을 수 있다.

`gist:Hong-mae/98c30b099cc560e2590c5ad01c64604e#open_chromedriver.py?lines=26-29`

### 전체 코드

`gist:Hong-mae/98c30b099cc560e2590c5ad01c64604e#open_chromedriver.py`

### 출처 및 참조

-   [웹\_크롤러 - 위키백과](https://ko.wikipedia.org/wiki/웹_크롤러)
