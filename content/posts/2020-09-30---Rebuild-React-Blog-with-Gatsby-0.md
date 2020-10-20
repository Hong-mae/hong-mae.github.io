---
title: 리액트 + Gatsby 를 이용한 블로그 만들기_#0
date: "2020-09-30T14:34:15.086Z"
template: "post"
draft: false
slug: "create-react-blog-with-gatsby-template-0"
category: "React"
tags:
  - "Web Development"
  - "Blog"
  - "React"
  - "SEO"
  - "SSR"
  - "Server Side Rendering"
  - "Gatsby"
description: "SEO를 지원하는 블로그를 위해 리액트 + Gatsby 이용하여 블로그를 만들자. #0 블로그를 시작해보자!"
socialImage: "/media/gatsby_react.png"
---

- [리액트 + Gatsby 를 이용한 블로그 만들기_#0](/posts/create-react-blog-with-gatsby-template-0)
- [리액트 + Gatsby 를 이용한 블로그 만들기_#1](/posts/create-react-blog-with-gatsby-template-1)
- [리액트 + Gatsby 를 이용한 블로그 만들기_#2](/posts/create-react-blog-with-gatsby-template-2)
- [리액트 + Gatsby 를 이용한 블로그 만들기_#3](/posts/create-react-blog-with-gatsby-template-3)
- [리액트 + Gatsby 를 이용한 블로그 만들기_final](/posts/create-react-blog-with-gatsby-template-final)

공익 근무 중 전공을 바탕으로 공부하던 중 리액트를 배우기로 했다. 공부를 시작하기에 앞서 책을 구매했다.

책을 바탕으로 읽고 실습을 반복하고 한권을 전부 다 읽었다. 고민은 지금부터 시작이였다.

AWS에서 1년간 무료 제공해주는 EC2와 Route 53에서 무심코 결제한 도메인...

그러다, 원래 github에서 이용한 개발 블로그를 React로 옮겨오자는 생각에 이 작업을 시작하였다.

![github dev blog](/media/github_dev_blog.jpg)*Github Develop Blog*

만드는 중 문득 내가 만든 블로그가 다른 개발자 블로그처럼 검색엔진에 노출되면 좋겠다는 생각이 들었다.

알고있는 내용을 바탕으로 sitemap.xml도 만들어보고 SEO와 SNS 공유를 위한 meta 태그를 설정했다.

하지만 리액트는 JS 기반으로 돌아가기 때문에 html 로딩 후 meta 태그를 설정하는 react-helmet으로는 og image, og description 등 여러 설정이 적용되지 않았다.

찾아보니 리액트로 작성된 코드를 미리 html로 렌더링하고 사용자에게 보여주면 해당 문제는 해결된다고 했다.

여러 방법을 제공하고 있지만 사용해본것 중에 괜찮은 것과 현재 사이트를 만든 Gatsby에 대해 다음 포스트에서 설명하겠다.
