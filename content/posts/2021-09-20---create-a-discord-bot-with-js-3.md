---
title: 'Discord.js를 이용한 디스코드 봇 만들기 #3'
date: '2021-09-20 20:54:38 GMT+0900'
template: 'post'
draft: false
slug: 'create-a-discord-bot-with-js-3'
category: 'AI/Bot'
tags:
    - 'lostark'
    - 'discord'
    - 'bot'
    - 'javascript'
    - 'mongodb'
    - 'moongoose'
description: '다른 명령어들을 추가하고 기본으로 제공하는 정보를 사용해보자'
socialImage: ''
---

<details open>
  <summary>리스트</summary>

1. [디스코드 봇 만들기 #1 - 계정 및 프로필 생성](/posts/create-a-discord-bot-with-js-1)
2. [디스코드 봇 만들기 #2 - 서버 및 기본 명령어 테스트](/posts/create-a-discord-bot-with-js-2)
3. [디스코드 봇 만들기 #3 - 명령어 추가 및 데이터 사용하기](/posts/create-a-discord-bot-with-js-3)
4. [디스코드 봇 만들기 #4 - 추가 정보 받기 및 코드 스플릿](/posts/create-a-discord-bot-with-js-4)

</details>

지난 포스트에서는 디스코드 채널에서 발생하는 채팅 이벤트를 봇이 잡아내는 것을 알아봤다. 하지만 이런 경우 불필요한 정보까지 받아오기 때문에 내가 원하는 명령어를 받아올 수 있게 설정할 예정이다.

### 재시작 계속하기 싫음!

index.js파일을 수정하면 계속 봇을 재시작해야하는 귀찮은 작업이 있다. 이를 해소하기 nodemon을 설치하면 쉽게 해결할 수 있다.

```
$ npm i -D nodemon
```

그리고 package.json > script > start를 다음과 같이 수정한다.

`gist:Hong-mae/db5af16c0cafde0c2679b2fd2e944a26#package.json?highlights=3`

그리고 봇을 실행하고 index.js 파일을 수정하고 저장만 해도 봇은 재실행된다.

### 특정 채팅만 명령어로 인식하기.

이제 간단하게 사용자가 **!ping**이라는 채팅을 치면 이것을 명령어라고 판단하여 봇이 **Pong.**이라고 답변하는 코드를 작성해보자.

`gist:Hong-mae/db5af16c0cafde0c2679b2fd2e944a26#index_1.js?highlights=11-13`

11-13번째 줄처럼 모든 채팅을 판단하여 만약 **!ping** 채팅이라면 **Pong.**이라고 답변하게 만들었다.

<div class='picture'>

![ping_pong_chat.png](/media/ping_pong_chat.png) _디스코드 봇 ping pong_

</div>

### 명령어 추가하기

명령어는 다음과 같이 추가할 수 있다.

```js
...
    if( message.content === '!ping') {
        message.channel.send('Pong.')
    } else if (message.content === '!beep') {
        message.channel.send('Boop.')
    }
    ...
...
```

이렇게 추가 할 수 있지만. **config.json** 파일에서 설정한 prefix를 통해 원하는 문자 + 명령어를 설정 할 수 있다.

```js
const { prefix, discord_token } = require('./config.json')
...
client.on('message', message => {
    if( message.content === `${prefix}ping`) { // use backtick
        message.channel.send('Pong.')
    } else if (message.content === prefix + 'beep') { // normal
        message.channel.send('Boop.')
    }
    ...
...
```

### 서버 관련 명령어

봇을 만드는 과정에 많은 데이터가 필요 할 수 있다. 예를들어 명령어를 호출한 유저 정보, 채널 정보, 채팅 정보 등이 필요한 경우 해당 데이터를 가져오는 방법은 다음과 같다.

`gist:Hong-mae/db5af16c0cafde0c2679b2fd2e944a26#index_2.js?highlights=9`

<div class='picture'>

![use_data_command.png](/media/use_data_command.png) _서버 이름 확인하기_

</div>

현재 서버에 있는 멤버 수를 확인하려면 다음과 같이 입력하면 된다.

`gist:Hong-mae/db5af16c0cafde0c2679b2fd2e944a26#index_3.js?highlights=9`

<div class='picture'>

![get_total_member_command.png](/media/get_total_member_command.png) _멤버 수 확인하기_

</div>

### 유저 정보 명령어

이번엔 유저 정보를 가져오는 명령어를 테스트해보자.

`gist:Hong-mae/db5af16c0cafde0c2679b2fd2e944a26#index_4.js?highlights=7`

<div class='picture'>

![user_info_command.png](/media/user_info_command.png)

</div>

### 마치며

오늘은 봇에게 명령어를 추가하는 법을 배워보았다. 특정 명령어에 추가 정보를 더 받아야 하는 경우 어떻게 처리하는지와 봇이 명령어를 7~8개 미만으로 사용한다면 문제가 없지만 그 이상일 경우와 외부 라이브러리를 활용해야할 경우 `if/else if`를 사용할 때 코드가 길어지고 보기 싫은 경우가 많다. 다음 포스팅에서는 코드를 파일로 나누어 사용하는 법을 알아보도록 하자.
