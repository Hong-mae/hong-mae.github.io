---
title: 'Discord.js를 이용한 디스코드 봇 만들기 #2'
date: '2021-09-18 04:57:27 GMT+0900'
template: 'post'
draft: false
slug: 'create-a-discord-bot-with-js-2'
category: 'JavaScript'
tags:
    - 'lostark'
    - 'discord'
    - 'bot'
    - 'javascript'
    - 'mongodb'
    - 'moongoose'
description: '디스코드 봇을 사용할 서버 생성과 기본 명령어를 이용해 테스트를 해보자'
socialImage: ''
---

<details open>
  <summary>리스트</summary>

1. [디스코드 봇 만들기 #1 - 계정 및 프로필 생성](/posts/create-a-discord-bot-with-js-1)
2. [디스코드 봇 만들기 #2 - 서버 및 기본 명령어 테스트](/posts/create-a-discord-bot-with-js-2)

</details>

지난 포스팅에서 디스코드 계정 생성 및 봇을 생성했다. 이번 포스트에서는 봇을 이용할 수 있는 서버과 디스코드 기본 명령어를 이용하는 방법을 알아보도록 하쟈!

### 디스코드 프로그램 다운로드

디스코드 웹을 이용해도 상관은 없지만 편의를 위해 디스코드 프로그램을 이용하기로 하자. [디스코드 홈페이지](https://discord.com)에 들어가 다음 버튼을 눌러 다운로드 및 설치한다. 버튼의 명칭은 OS에 따라 다르게 표시되니 걱정말고 다운로드한다.

<div class='picture'>

![discord_download.png](/media/discord_download.png)

</div>

### 서버 생성

디스코드 프로그램을 실행 후 로그인 하면 다음과 비슷한 화면이 뜨고 좌측에 \+ 버튼을 이용해 서버을 생성한다.

<div class='picture'>

![discord_app_main.png](/media/discord_app_main.png)

</div>

그 다음은 서버 목적에 맞게 선택하는 화면이 뜬다. 허나 디스코드 봇을 테스트하기 위한 서버을 만든 것이기 때문에 아무거나 선택한다.

<div class='picture'>

![discord_create_channel.png](/media/discord_create_channel.png)
![discord_create_channel_2.png](/media/discord_create_channel_2.png)

</div>

서버 명을 입력하고 만들기를 눌러 서버를 생성한다.

<div class='picture'>

![discord_create_channel_3.png](/media/discord_create_channel_3.png)

</div>

서버 목적을 선택한 것에 따라 서버에 생성된 채팅 채널, 음성 채널이 다를 것이다. 다른 것들은 다 필요없고 우리에게 필요한 것은 채팅 채널이다.

![discord_channel_list.png](/media/discord_channel_list.png)

### 개발자 모드

우선 계정을 개발자 모드로 전환해야한다. 디스코드 프로그램에서 왼쪽 하단 프로필 옆 [톱니바퀴 > 고급 > 개발자 보드 on]로 개발자 모드를 켠다.

<div class='picture'>

![discord_profile.png](/media/discord_profile.png)

![discord_develop_mode_on.png](/media/discord_develop_mode_on.png)

</div>

~~개발자 모드는 유저의 고유 id 또는 채널의 고유 id를 확인 할 수 있게 도와준다.~~

### 디스코드 봇 프로젝트 생성

이 프로젝트는 Node.js를 이용하여 개발할 예정이고 IDE는 Visual Studio Code를 이용할 예정이다. Node.js 설치는 [여기](/posts/install-node-js) vscode 설치는 [여기](/posts/install-vscode)를 확인하면 된다.

바탕화면에 디렉토리(~~필자는 디렉토리 명을 discord_bot이라고 했다~~)를 생성하고 VSCode에 해당 디렉토리를 연다.

### Node 기본 세팅

해당 폴더의 terminal을 열어 Node 기본 세팅을 한다. 기본 세팅은 다음 명령어를 통해 할 수 있다.

```
$ npm init
```

위의 명령어를 쓰면 프로젝트 명 등을 입력한다 귀찮을 경우 Enter를 연사하길 바란다.

그러면 package.json 파일이 생성된다.

```json
// package.json
{
    "name": "discord_bot",
    "version": "1.0.0",
    "description": "",
    "main": "index.js",
    "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1"
    },
    "author": "",
    "license": "ISC"
}
```

여기서 중요한 것은 main과 script이다. main의 경우 봇 실행시 처음으로 시작되는 파일을 적는다. script의 경우 node 명령어를 작성하는데 보통 develop, test 등 해당 프로젝트를 실행하는 명령어를 사용 할 수 있다.
