---
title: 리액트 + Gatsby 를 이용한 블로그 만들기_#3
date: "2020-10-07 00:55:12 GTM+0900"
template: "post"
draft: false
slug: "create-react-blog-with-gatsby-template-3"
category: "React"
tags:
  - "Web Development"
  - "Blog"
  - "React"
  - "SEO"
  - "SSR"
  - "Server Side Rendering"
  - "Gatsby"
  - "pm2"
description: "SEO를 지원하는 블로그를 위해 리액트 + Gatsby 이용하여 블로그를 만들자. #3 Gatsby를 실행하는 방법!"
socialImage: "/media/gatsby_react.png"
---

- [리액트 + Gatsby 를 이용한 블로그 만들기\_#0](/posts/create-react-blog-with-gatsby-template-0)
- [리액트 + Gatsby 를 이용한 블로그 만들기\_#1](/posts/create-react-blog-with-gatsby-template-1)
- [리액트 + Gatsby 를 이용한 블로그 만들기\_#2](/posts/create-react-blog-with-gatsby-template-2)
- [리액트 + Gatsby 를 이용한 블로그 만들기\_#3](/posts/create-react-blog-with-gatsby-template-3)
- [리액트 + Gatsby 를 이용한 블로그 만들기\_final](/posts/create-react-blog-with-gatsby-template-final)

node 프로세스 관리 툴(?)인 PM2에 대해 알아보자.

서버에서 웹 애플리케이션을 운영할 때 보통 데몬으로 서버를 띄워야 하고 Node.js의 경우 서버가 크래시나면 재시작을 하기 위해서 워치독(watchdog) 류의 프로세스 관리자를 사용하게 된다.

필자의 경우 node.js에서 많이 알려진 supervisor에서 사용하다가 forever로 갈아타고 마지막으로 pm2를 메인으로 사용하게 됐다.

forever와 pm2는 둘 다 백그라운드에서 실행이 가능하다. 즉 실행 후 터미널을 종료해도 서버는 그대로 살아있다.

pm2로 넘어온 이유는 시각적인 요소가 눈에 띄어서 사용중이다.

설치는 다음 명령어를 사용하면 된다.

```bash
// npm
npm i -g pm2
// yarn
yarn global add pm2
```

pm2를 통해 서버를 실행할 경우 서버 실행하는 코드가 있는 파일을 적어서 실행하면 된다.

```base
pm2 start [파일명]

// 옛날 express
pm2 start app.js

// 최신 express
pm2 start /bin/www
```

실행시 다음과 비슷한 화면이 뜬다.

![pm2_start_command.png](/media/pm2_start_command.png) _pm2 start 명령어_

만약 name 을 변경하고 싶을 경우 다음과 같이 실행하면 된다.

```bash
pm2 start [파일명] --name "변경할 이름"
```

현재 pm2로 실행한 서버의 리스트와 상태를 보고싶으면 다음 명령어를 사용하면 된다.

```bash
pm2 status|list
```

결과는 위의 사진과 같게 뜬다.

서버 restart, stop, reload, delete 는 다음과 같다.

```bash
pm2 restart [id 번호나 name] // 재시작
pm2 reload [id 번호나 name] // 다시 불러오기
pm2 stop [id 번호나 name] // 종료
pm2 delete [id 번호나 name] // 삭제
```

restart와 reload는 비슷한 역할을 한다. 서버를 껐다가 다시 실행하거나 새로고침하기 때문이다.

stop의 경우 서버를 종료한다. 하지만 pm2 status 또는 pm2 list를 실행할 경우 서버상태는 stopped 로 뜨고 리스트에서 삭제되지 않는다.

![pm2_stop_command.png](/media/pm2_stop_command.png) _pm2 stop 명령어_

delete의 경우도 서버를 종료하지만 서버 리스트에서는 삭제된다.

![pm2_delete_command.png](/media/pm2_delete_command.png) _pm2 delete 명령어_

기본적은 pm2 사용법을 알아봤으나 Gatsby를 통해 만든 프로젝트는 app.js나 /bin/www 같은 서버실행 파일이 존재하지 않아 이런 경우는 어떻게 해야하는지 막막하다.

pm2 start 명령어에는 파일이 없이 npm 명령어를 사용할 수 있다. 즉 [이전 포스트](/posts/create-react-blog-with-gatsby-template-2)에서 작성한 "gatsby serve" 를 사용할 수 있다.

```bash
pm2 start gatsby --name "원하는 이름" -- serve
```

보통 이렇게 작성하면 서버가 실행되지만 간혹 gatsby 라는 명령어를 찾지 못해 아래와 같이 gatsby의 경로와 같이 적어주면 된다.

```bash
pm2 start ~/.nvm/versions/node/v14.2.0/bin/gatsby --name "원하는 이름" -- serve
```

gatsby의 경로를 모를 경우 아래의 명령어로 경로를 찾을 수 있다.

```bash
which gatsby
=> ~/.nvm/versions/node/v14.2.0/bin/gatsby
```

다음 포스트에서는 기본으로 적용되어있는 plugin과 추가한 plugin들의 설명과 적용법에 대해 포스트하고 길고 긴 포스트를 끝내겠다.
