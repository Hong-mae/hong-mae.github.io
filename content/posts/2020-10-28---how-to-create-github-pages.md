---
title: "Github Pages로 블로그 운영하기"
date: "2020-10-28T11:05:57.000Z"
template: "post"
draft: false
slug: "how-to-create-github-pages"
category: "Blog"
tags:
  - "Github"
  - "Github Pages"
  - "Blog"
description: "Github에서 제공하는 Github Pages로 블로그를 적용해보자"
socialImage: "/media/github_pages_logo.png"
---

현재 필자의 블로그 상황은 이러하다.

tistory 블로그 운영 -> github pages 운영 -> aws ec2 프리티어로 이관 -> github pages로 이관

처음 블로그를 운영해야겠다고 마음 먹었을 때에는 서버 운영에 대한 지식이 없어 tistory로 블로그를 처음 운영했다. 

개발 공부중 Github를 이용해 코드 관리의 개념을 알고나서 추가적인 Github의 기능을 찾다가 Github Pages를 제공한다는 것을 보고 Github Page로 운영하다가 회사에서 배운 서버 지식 및 책에서 참고한 내용을 바탕으로 AWS EC2로 블로그를 이관했다.

하지만 문제점은 프리티어이기 때문에 1코어 1기가메모리를 제공하기 때문에 블로그 빌드시 메모리 부족현상이 많이 일어났다. 그래서 다시 github pages로 넘어왔다.

### Github Pages 란?
[Github Pages](https://pages.github.com/)는 Github에 저장되어있는 Repository(이하 저장소)를 호스팅 해주는 Github에서 무료로 제공하는 서비스다.

작동 방식는 엄청 간단하다 저장소에 index.html/READMD.md 파일을 작성하고 해당 저장소 페이지 -> Settings -> Github Pages -> Source에서 Branch를 선택하고 Save를 누르면 설정완료 된다. 하지만 이렇게 할 경우 url이 다음과 같이 마음에 안들게 생성된다.

```
https://[Github 유저이름].github.io/[저장소 이름]
```

만약 /[저장소 이름]을 없애고 싶다면 다음과 같이 설정하면 된다.

#### 1. 새로운 저장소 만들기.
Github에 들어가 새로운 저장소를 만드는데 저장소 이름은 다음과 같이 설정한다.

![create_repo.png](/media/create_repo.png) *[Github 유저이름].github.io*

반드시 public으로 진행 해야한다. 그래야 Github Pages를 설정할 수 있다.

#### 2. index.html 파일 생성
![create_index_file.png](/media/create_index_file.png) *index 파일 생성*

위에 표시된 부분을 클릭하여 index.html파일을 생성한다. 내용은 마음대로 작성한다.

#### 3. Github Pages 설정하기
파일 생성 후 Settings에 들어가 Github Pages 부분을 보면 자동으로 branch가 선택되어있다.

![settings_github_pages.png](/media/settings_github_pages.png) *auto settings github pages*

#### 4. 확인하기
만들어진 github pages의 주소는 https://[Github 유저이름].github.io 이다.
들어가서 확인해보자.


### 내 프로젝트는 어떻게 올리지?
필자의 경우 React를 이용해서 블로그를 만들었다. 리액트의 경우 index.html이 없다. 하지만 다음의 명령어를 실행해서 build시 build 폴더가 생성되며 그 안에 build 된 버전이 생성된다.

``` bash
// npm
npm run build

// yarn
yarn build
```

그렇다면 build 폴더를 올려야하는 걸까? 틀린 말은 아니다. 하지만 자동으로 github pages에서 인식하도록 Branch를 생성하고 push 하는 라이브러리가 있다.

``` bash
// npm
npm i --save gh-pages

// yarn
yarn add gh-pages
```

그리고 package.json에 다음과 같이 추가한다.

``` json
{
    "name": "exam-bin.github.io",
    "version": "0.1.0",
    "private": true,
    ... 생략
    "scripts": {
        ... 생략
        "predeploy": "npm run build", // 추가
        "deploy": "gh-pages -d build", // 추가
    },
    ... 생략
    "homepage": "https://exam-bin.github.io" // 추가
}
```

그리고 다음 명령어를 이용해서 github에 build폴더를 등록(?)한다.

``` bash
// npm
npm run deploy

// yarn
yarn deploy
```

yarn deploy를 실행하면 자동적으로 gh-pages라는 Branch가 생성되고 "-d build"로 작성했듯이 build 디렉토리를 Branch에 등록한다.

다시 Repository 사이트에 들어가 Settings -> Github Pages 에서 Branch를 선택하면 gh-pages가 있다. 선택 후 Save를 누르면 다시 설정된다.

![change_branch.png](/media/change_branch.png) *change gh-pages branch*

그리도 약 1분 후 https://[Github 유저 이름].github.io 로 들어가면 build된 react가 등록된다.