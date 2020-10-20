---
title: 리액트 + Gatsby 를 이용한 블로그 만들기_#2
date: "2020-10-04T00:22:23.000Z"
template: "post"
draft: false
slug: "create-react-blog-with-gatsby-template-2"
category: "React"
tags:
  - "Web Development"
  - "Blog"
  - "React"
  - "SEO"
  - "SSR"
  - "Server Side Rendering"
  - "Gatsby"
  - "Markdown"
description: "SEO를 지원하는 블로그를 위해 리액트 + Gatsby 이용하여 블로그를 만들자. #2 기본적인 Gatsby 사용법!"
socialImage: "/media/gatsby_react.png"
---

- [리액트 + Gatsby 를 이용한 블로그 만들기_#0](/posts/create-react-blog-with-gatsby-template-0)
- [리액트 + Gatsby 를 이용한 블로그 만들기_#1](/posts/create-react-blog-with-gatsby-template-1)
- [리액트 + Gatsby 를 이용한 블로그 만들기_#2](/posts/create-react-blog-with-gatsby-template-2)
- [리액트 + Gatsby 를 이용한 블로그 만들기_#3](/posts/create-react-blog-with-gatsby-template-3)
- [리액트 + Gatsby 를 이용한 블로그 만들기_final](/posts/create-react-blog-with-gatsby-template-final)

이전 포스트에서 블로그 템플릿을 이용해서 프로젝트를 생성했다.

``` bash
gatsby new gatsby-site https://github.com/gatsbyjs/gatsby-starter-hello-world
```

프로젝트를 보면 볼더가 존재한다. 블로그 포스트를 모아놓은 ./content/posts, 이미지 리소스를 모아놓은 ./static/media 가 있다.

생성된 프로젝트는 Markdown 파일을 작성하여 Gatsby plugin을 통해 html 파일로 변환 한다.

<details>
    <summary>Markdown(.md 파일) 이란</summary>

    markdown은 일반 텍스트 기반의 가벼운 마크업(MarkUp) 언어다. 
	
	다른 마크업 언어에 비해 상당히 문법이 간단하고 사용하기 쉬우며 
	
	HTML 파일 형식으로 손쉽게 변경이 가능하기 때문에 README 파일로 이용된다.
	
	단, 간단한 형식이기 때문에 모든 HTML 태그가 지원되는 것은 아니다.
	
	자세한 내용은 추후 포스팅하도록 하겠다.
</details>

Markdown 파일 형식으로 포스팅 내용을 작성하고 테스트 시 아래의 명령어를 사용하면 된다.

``` bash
// npm
npm run develop
// yarn
yarn develop

or

// gatsby cli
gatsby develop
```

이렇게 시도하면 localhost:9000로 접속이 가능하다. 만약 포트를 변경하고 싶을 경우 package.json 파일을 아래와 같이 수정한다.

![yarn_develop_port_setting.png](/media/yarn_develop_port_setting.png) *scripts > develop 에 gatsby develop -p [원하는 포트]*

자세히 보면 gatsby develop 앞에 yarn run clean 이 있고 하위에 

``` bash
clean : "rimraf .cache public"
```

이런 코드가 작성되어 있다. 이유는 develop 모드나 build 모드를 실행하면 .cache 및 public 폴더가 생성된다. 하지만 명령어를 계속 실행 할 경우 .cache 및 public 폴더에 파일이 삭제되지 않고 쌓이게 된다. 특히 build 모드에서는 public에 minify, html 변환된 파일 등 많은 파일이 생성되는데 build 명령어 실행시 기존 파일이 삭제되지 않고 계속 생성된다.

따라서 .cache 및 public 폴더를 삭제해야하기 때문에 clean 명령어를 먼저 실행해서 폴더를 삭제하고 develop/build 명렁어를 실행한다.

배포 전 build를 하려면 아래의 명령어를 실행한다.

``` bash
// npm
npm run build
// yarn
yarn build

or

// gatsby cli
gatsby build
```

build 버전의 경우 develop 모드와는 다르게 build 파일만 생성할 뿐 웹서버를 열진 않는다. 따라서 웹서버 오픈을 위해서 gatsby cli에 있는 명령어를 따로 실행한다.

``` bash
gatsby serve // default port 9000
// custom port
gatsby serve -p [원하는 포트]
```

추가로 필자는 pm2 라는 node 프로세스 관리 툴을 사용한다.

사용법은 다음 포스트에서 계속...