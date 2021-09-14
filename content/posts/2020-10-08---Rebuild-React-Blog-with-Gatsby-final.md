---
title: 리액트 + Gatsby 를 이용한 블로그 만들기_final
date: "2020-10-08 12:07:24 GTM+0900"
template: "post"
draft: false
slug: "create-react-blog-with-gatsby-template-final"
category: "React"
tags:
  - "Web Development"
  - "Blog"
  - "React"
  - "SEO"
  - "SSR"
  - "Server Side Rendering"
  - "Gatsby"
  - "Gatsby Plugins"
description: "SEO를 지원하는 블로그를 위해 리액트 + Gatsby 이용하여 블로그를 만들자. final Gatsby에서 제공하는 plugins!"
socialImage: "/media/gatsby_react.png"
---

- [리액트 + Gatsby 를 이용한 블로그 만들기\_#0](/posts/create-react-blog-with-gatsby-template-0)
- [리액트 + Gatsby 를 이용한 블로그 만들기\_#1](/posts/create-react-blog-with-gatsby-template-1)
- [리액트 + Gatsby 를 이용한 블로그 만들기\_#2](/posts/create-react-blog-with-gatsby-template-2)
- [리액트 + Gatsby 를 이용한 블로그 만들기\_#3](/posts/create-react-blog-with-gatsby-template-3)
- [리액트 + Gatsby 를 이용한 블로그 만들기\_final](/posts/create-react-blog-with-gatsby-template-final)

Gastby는 많은 [plugin](https://www.gatsbyjs.com/plugins)을 제공하여 보다 편하게 블로그 설정을 도와준다.

이전 포스트에서 적용한 Gatsby Template(이하 템플릿)에는 다양한 plugin들이 기본적으로 적용되어 있다.

설정되어 있는 plugin들을 확인하려면 ./gatsby-config.js 파일을 열어보면 된다.

적용되어 있는 plugin들을 살펴보자면

- 파일에 쉽게 접근할 수 있게 만들어주는 [gatsby-source-filesystem](https://www.gatsbyjs.com/plugins/gatsby-source-filesystem)
- rss.xml 파일을 만들어주는 [gatsby-plugin-feed](https://www.gatsbyjs.com/plugins/gatsby-plugin-feed)
- markdown 파일을 html 파일로 변경해주는 [gatsby-transformer-remark](https://www.gatsbyjs.com/plugins/gatsby-transformer-remark)
- 이미지 관리를 위한 [gatsby-transformer-sharp](https://www.gatsbyjs.com/plugins/gatsby-transformer-sharp)와 [gatsby-plugin-sharp](https://www.gatsbyjs.com/plugins/gatsby-plugin-sharp)
- 구글 애널리틱스 추적을 위한 [gatsby-plugin-google-gtag](https://www.gatsbyjs.com/plugins/gatsby-plugin-google-gtag)
- sitemap을 생성해주는 [gatsby-plugin-stiemap](https://www.gatsbyjs.com/plugins/gatsby-plugin-stiemap)
- html에 기본적인 정보를 생성 / 적용 시켜주는 [gatsby-plugin-manifest](https://www.gatsbyjs.com/plugins/gatsby-plugin-manifest)
- 네트워크가 연결되지 않았을 경우에도 작동하게 해주는 [gatsby-plugin-offline](https://www.gatsbyjs.com/plugins/gatsby-plugin-offline)
- SSR 형식을 SPA 느낌으로 변경해주는 [gatsby-plugin-catch-links](https://www.gatsbyjs.com/plugins/gatsby-plugin-catch-links)
- head 정보를 parsing 해주는 [gatsby-plugin-react-helmet](https://www.gatsbyjs.com/plugins/gatsby-plugin-react-helmet)
- sass 파일을 css 로 변환해주는 [gatsby-plugin-sass](https://www.gatsbyjs.com/plugins/gatsby-plugin-sass)

이외에도 엄청 많은 플러그인들이 적용 돼있다. <del>_필자가 잘못알고 있는 내용도 있으니 주의 바람._</del>

이제 필자가 간단하게 수정한 내용들을 설명하겠다.

이 템플릿에는 /static/photo.png 파일이 있다. 이 사진은 메인화면 왼쪽 sidebar의 사진이지만 favicon의 역할도 한다.

![photo_is_favicon](/media/photo_is_favicon.png) _photo 파일이 favicon으로 적용됨_

만약 본인만의 favicon이 존재한다면 gatsby-confing.js 파일에서 [gatsby-plugin-manifest](https://www.gatsbyjs.com/plugins/gatsby-plugin-manifest)를 추가 및 수정하면 된다.

수정 방법은 [Gatsby Automatic Mode Configuration](https://www.gatsbyjs.com/plugins/gatsby-plugin-manifest/#automatic-mode-configuration)에 나와 있다.

```javascript
module.exports = {
    plugins: [
        ... 생략
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `사이트 명`,
                short_name: `사이트 명`,
                start_url: `/`,
                background_color: `#f7f0eb`,
                theme_color: `#a2466c`,
                display: `standalone`,
                icon: "favicon 경로",
                // 또는
                icons: [
                    {
                        src: `favicon 경로`,
                        sizes: `192x192`,
                        type: `image/png`,
                    },
                    {
                        src: `favicon 경로`,
                        sizes: `512x512`,
                        type: `image/png`,
                    }
                ]
            },
        },
    ],
}
```

추가로 .ico 파일은 적용 안되기 때문에 png 파일을 이용해야한다.

필자는 icons 설정을 했다. 필자가 좋아하는 [메이플스토리](https://maplestory.nexon.com)의 보스 캐릭터인 핑크빈 이미지가 192, 512 2개의 사이즈로 있어서 적용했으며 ico 파일도 있지만 적용하지 않았다.

하지만 favicon.ico 라고 이름을 변경하고 언젠가 .ico 파일 적용을 위해 ./static 폴더에 그대로 넣어놨는데 자동으로 적용이 된다. plugin의 영향인지 gatsby의 특성인지는 몰라도 신기했다.

다음으로 설명할 plugin은 블로그를 열심히 작성하여 구글, 네이버 검색시 노출될 수 있게 robots.txt 파일을 자동으로 생성해주는 [gatsby-plugin-robots-txt](https://www.gatsbyjs.com/plugins/gatsby-plugin-robots-txt) 이다.

설정 방법은 위의 링크를 통해 확인할 수 있다.

```js
// in gatsby-config.js
... 생략
{
    resolve: 'gatsby-plugin-robots-txt',
    options: {
        host: 'https://www.Moong-bee.com',
        sitemap: 'https://www.Moong-bee.com/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }]
    }
}
... 생략
```

host는 본인 사이트의 주소, sitemap은 본인 사이트의 sitemap 주소, 마지막으로 policy에는 정책을 적어주면 된다. policy에 대한 내용을 추후 포스트로 설명하겠다.

마지막으로 필자가 적용한 plugin은 [gatsby-plugin-google-adsens](https://www.gatsbyjs.com/plugins/gatsby-plugin-google-adsens)이다. 구글 애드센스를 연결하기 위한 plugin이다!

설정 방법은 다음과 같다!

```js
... 생략
{
    resolve: 'gatsby-plugin-google-adsense',
    options: {
        publisherId: `ca-pub-XXXXXXXXXXXXXX`
    }
}
... 생략
```

열심히 블로그를 활성화 시켜서 구글 애드센스를 적용해보자!

이로써 블로그 관련 포스트는 끝을 짓겠습니다.
