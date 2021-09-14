---
title: "Discord.js를 이용한 디스코드 봇 만들기 #1"
date: "2021-09-13 22:51:58 GMT+0900"
template: "post"
draft: false
slug: "create-a-discord-bot-using-discord-js"
category: "javascript"
tags:
  - "lostark"
  - "discord"
  - "bot"
  - "javascript"
  - "mongodb"
  - "moongoose"
description: "요즘 자주하는 로스트아크용 디스코드 봇 만들기!"
socialImage: ""
---

최근 근무 후 귀찮음과 스트레스로 인해 개발은 안하고 게임만 주구장창 했다.

허나 이번년도 초 내가 하는 게임에 문제가 생겨 ~~메XX 스XX, 일명 버섯 게임~~ 어떤 게임을 할지 고민중에 **로스트아크**라는 국산 RPG게임을 찍먹해보기로 했다.

첫 시작을 이벤트로 진행한 슈퍼 익스프레스로 진행해 게임 컨텐츠인 **아르고스 레이드**, **발탄 노말 레이드**등을 진행 할 수 있었고 특히 레이드의 경우 공개파티(매칭)을 플레이를 했다. 하지만 매칭을 통한 플레이의 경우 클리어가 불확실하며 유저간의 소통이 잘 안돼 기믹 수행에 문제가 많았다.

그러다 길드를 구하고 길드파티를 통해 레이드를 진행해 기믹을 배우면서 플레이를 할 수 있었다. 그때 상호간의 소통을 위해 디스코드(Discord)라는 것을 이용하여 소통을 했다.

디스코드에는 봇이라는 시스템이 존재한다. 이는 프로그래밍을 하여 유저가 특정 명령어를 채팅하면 봇이 해당 명령어에 맞는 결과를 처리하는데 큰 문제없이 편하게 해당 기능을 이용할 수 있었다.

### 디스코드(Discord)

Def: 디스코드는 게이밍부터, 교육과 비즈니스영역의 커뮤니티 생성을 목적으로 설계된 VoIP 응용 소프트웨어의 하나이다. 디스코드는 채팅 채널에 있는 유저 사이의 텍스트, 이미지, 비디오, 음성 커뮤니케이션에 특화되어있다

### 디스코드 봇

여러 언어를 지원하는 것 같았다. 그 중 가장 많이 접할 수 있는 언어는 파이썬(Python), JS(javascript)였다. 나는 둘 다 개발하다가 MongoDB를 좀 쉽게 다룰 수 있는 JS를 통해 제작하기로 했다.

### 디스코드 봇 제작하기에 앞서

디스코드 봇을 만들기 위해 우선 디스코드 계정이 필요하다. [디스코드 로그인 페이지](https://discord.com/login)에 들어가 다음과 같이 가입하기를 누른다.

<div class="picture">

![discord_login_page.png](/media/discord_login_page.png)

</div>

그 후 이메일, 닉네임, 비밀번호, 생년월일을 입력하여 가입을 완료한다.

<div class="picture">

![discord_create_account.png](/media/discord_create_account.png)

</div>

가입 후 바로 이용 가능하지만 이메일 인증을 필수로 받길 바란다.

### 디스코드 앱 정보 등록

가입과 이메일 인증이 끝난 후 [디스코드 개발자 페이지](https://discord.com/developers)로 바로 들어가거나 [디스코드 메인 페이지](https://discord.com)로 들어가 제일 하단에 있는 개발자 부분을 클릭한다.

<div class="picture">

![discord_developer_page.png](/media/discord_developer_page.png)

</div>

그리고 좌측 메뉴 상단에 **Application**을 클릭하고

<div class="picture">

![discord_left_menu.png](/media/discord_left_menu.png)

</div>

우측 상단에 **New Application** 버튼을 클릭하여 **앱 이름**을 작성하고 생성한다.

<div class='picture'>

![discord_create_new_app.png](/media/discord_create_new_app.png)

![discord_create_app_name.png](/media/discord_create_app_name.png)

</div>

### 디스코드 봇 생성

생성 후 이동된 페이지에서 **좌측 메뉴 > Bot**을 클릭하고 봇 생성한다

<div class="picture">

![discord_after_left_menu.png](/media/discord_after_left_menu.png)

</div>

<div class='picture'>

![discord_add_bot.png](/media/discord_add_bot.png)

</div>

### 마치며

오늘은 디스코드 계정 생성 및 봇을 만들었다. 다음 포스트에서는 봇을 활용할 수 있는 채널 생성, 필요한 정보 복사 및 개발 환경 변수용 파일 생성을 다루도록 하겠다.
