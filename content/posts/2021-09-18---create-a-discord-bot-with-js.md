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

### 생성된 서버에 봇 추가하기

봇을 서버에 추가하려면 봇 추가 전용 링크가 필요하다.

디스코드 봇 페이지에서 왼쪽메뉴 > OAuth2를 누르고 아래의 bot 부분을 체크하면 다음과 같이 링크가 뜬다. 하지만 이 링크는 아직은 쓸모가 없다. 아래에 확인하면 봇이 가질 수 있는 권한들이 있는데 가장 높은 권한인 Administrator 권한을 클릭한 후 링크를 복사한다.

<div class='picture'>

![create_link_bot.png](/media/create_link_bot.png)

</div>

해당 링크를 브라우저에서 실행하고 다음과 같은 절차를 진행하고 본인이 만든 서버에 추가한다.

<div class='picture'>

![discord_bot_invite.png](/media/discord_bot_invite.png)

![discord_bot_invite_2.png](/media/discord_bot_invite_2.png)

![discord_bot_invite_complete.png](/media/discord_bot_invite_complete.png)

</div>

### 디스코드 봇 프로젝트 생성

이 프로젝트는 Node.js를 이용하여 개발할 예정이고 IDE는 Visual Studio Code를 이용할 예정이다. Node.js 설치는 [여기](/posts/install-node-js) vscode 설치는 [여기](/posts/install-vscode)를 확인하면 된다.

바탕화면에 디렉토리(~~필자는 디렉토리 명을 discord_bot이라고 했다~~)를 생성하고 VSCode에 해당 디렉토리를 연다.

### Node 기본 세팅

해당 폴더의 terminal을 열어 Node 기본 세팅을 한다. 기본 세팅은 다음 명령어를 통해 할 수 있다.

```
$ npm init -y
```

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

### 디스코드 봇 라이브러리 설치

디스코드 봇에 관련된 라이브러리는 다음 명령어를 통해 설치할 수 있다.

```
$ npm install discord.js@12.5.3
```

현재 discord.js는 13버전이다 하지만 해당버전은 사용하기 까다로워 12.5.3버전을 사용한다.

### 정보 파일 생성

config.json 파일에 필요한 정보를 따로 관리할 수 있다. 예를 들면 디스코드 봇에 사용하는 키, 데이터 베이스 정보 등이 이에 해당된다.

config.json 파일을 다음과 같이 생성한다.

`gist:Moong-bee/43c06d5cecec2fd08937abc1b55d3a92#config.json`

prefix는 봇에게 명령을 할때 붙혀야 하는 기호를 뜻한다. 예를 들어 인사를 하는 명령어라고 하면 **!인사**이렇게 입력할 수 있다. 느낌표외에 다른 특수문자도 가능하다.

discord_token은 [디스코드 개발자 페이지](https://discord.com/developers/applications)에서 들어가 이전에 만든 application에 들어간다.

왼쪽 메뉴 > Bot에서 중간에 나오는 Copy 버튼을 눌러 복사하고 ~~~ 대신 붙혀넣는다.

<div class='picture'>

![discord_bot_token.png](/media/discord_bot_token.png)

</div>

```json
    "discord_token": "복사된 코드",
    "discord_channel_id": "~~~",
}
```

### 실행 파일 만들기

이제 실행할 수 있는 코드를 작성하도록 하자. 우선 index.js 파일을 만들고 다음과 같이 작성한다.

`gist:Moong-bee/43c06d5cecec2fd08937abc1b55d3a92#index.js`

그리고 package.json 파일에 script 부분을 다음과 같이 수정한다.

`gist:Moong-bee/43c06d5cecec2fd08937abc1b55d3a92#package.json`

다음과 같은 명령어를 terminal에서 실행하고 올바르게 **Ready!**가 뜬다면 정상적으로 실행 한 것이다.

```
// npm
$ npm run start

// yarn
$ yarn start


> discord_bot@1.0.0 start
> node index.js

Ready!
```

### 채팅 이벤트 잡기

index.js에서 다음 부분을 추가하고 봇을 재실행하자.

`gist:Moong-bee/f0c8a33bf00ffcd8191a0ff9737bc414#index.js?highlights=10-12`

terminal에서 ctrl + C를 누르고 다시 실행 명령어를 입력하면 재실행된다.

재실행 후 디스코드 프로그램에 채팅 채널에 아무 채팅이나 작성해보면 채팅 이벤트가 발생해 채팅 내용이 다음과 같이 출력된다.

<div class='picture'>

![discord_chat.png](/media/discord_chat.png)

![discord_bot_response.png](/media/discord_bot_response.png)

</div>
