---
title: Shell Script(.sh)랑 npm 명령어랑 같이 쓰는법(?)
date: "2020-10-05T13:23:09.000Z"
template: "post"
draft: false
slug: "shell-script-and-npm-command"
category: "Webhook"
tags:
  - "Webhook"
  - "Shell Script"
  - "Npm Command"
  - "Github"
  - "Github Webhook"
description: "AWS EC2에서 git으로 pull하고 권한 오류로 chown 명령어 쓰고 또 npm build 처리를 해야하는데 어떻게 해야할까?"
socialImage: "/media/npm_bash_logo.png"
---

현재 블로그 코드들이 전부 AWS EC2에 있고 코딩을 할때 AWS Cloud9을 활용하여 코딩중이다.

Cloud9은 집에서만 접속할 수 있게 설정해놔서 외부에서 작업을 할땐 github에 파일을 push하고 자동으로 git pull 명령어를 사용해서 실행하려고 했다.

``` bash
# AutoPull.sh
cd /usr/share/nginx/html/[프로젝트명]
sudo git pull https://[깃아이디]:[2FA 토근 정보]@github.com/[repo 주소]
```

AutoPull\.sh 파일을 작성하여 crontab 으로 1분 단위로 해당 파일을 실행 시켜서 기존에 하려고 했던 행동을 실행시켰다.

``` bash
crontab -e

*   *   *   *   * sudo sh [AutoPull.sh]파일
```

하지만 문제점은 현재 블로그 포스팅후 npm run build 또는 yarn build를 해야하는데 AutoPull\.sh 파일에서는 npm 명령어를 사용하기 까다로웠다. <del>*검색을 했는데 잘모르겠다..*</del>

어떻게 처리할까 많은 고민을 하다가 이런저런 조건들을 정리해봤다.

- git push 이벤트가 발생시 실행되야한다.
- git pull 명령어를 실행해야한다.
- 퍼미션 문제를 예방해야한다.
- yarn build 명령어를 실행해야한다.

위의 조건들을 적어두고 가만히 생각해봤는데.. 이전에 다닌 회사에서 push를 하면 JANDI라는 프로그램에서 알림이 왔었다.

해당 정보를 바탕으로 검색해보니 WebHook이라는 기능이였고 github에서도 해당 기능을 제공했다.

우선 Github에서 본인이 webhook을 적용할 repository에 들어가서 상단에 Settings를 클릭한다. 그러면 오른쪽 메뉴에 Webhooks가 있다 이걸 누르면 현재 등록되어있는 Webhook가 있다면 리스트를 보여준다.

![github_webhook_settings_1.png](/media/github_webhook_settings_1.png) *Github repo Settings 화면*

상단에 Add webhook을 누르면 아래와 같이 Webhook을 등록할 수 있는 화면으로 전환된다.

![github_webhook_settings_2.png](/media/github_webhook_settings_2.png) *Add webook 화면*

Payload URL은 webhook 발생시 해당 이벤트를 받을 주소를 적으면 된다. Webhook은 post로 작동되기 때문에 post url을 작성해주면 된다. 

Content type 은 수신했을 때에 데이터 형식을 지정한다. 형식에는 대표적으로 2가지가 있다.

- application/json
- application/x-www-form-urlencoded.

필자는 JSON 형식으로 받을 것이기 때문에 application/json 으로 선택했다.

Secret은 보안을 위해 만들어야한다. github에서 webhook을 보낼때 해당 코드를 sha1로 암호화 하여 header에 보낸다. 그러면 webhook 서버에서 Secret 코드를 sha1로 변환하여 들어온 요청에 있는 header 정보와 비교하여 틀린 경우 에러를 반환하면 된다.

이렇게 하다보니... 모든 브랜치의 push 에서 다 작동한다.. 필자는 develop 브랜치에서 임시저장도하고 작성 끝난 포스트도 push 하여 master(어느 순간 부터 main 브랜치로 변경되었다.)로 merge한다.

찾아보니 webhook 으로 받은 body 값 안에 refs가 존재하고 그 값이 "refs/heads/[브랜치 명]" 으로 지정되어 있는 것으로 확인하여

master 브랜치의 push 일 경우에만 나머지 조건을 수행 하도록 했다.

webhook 서버는 node.js 로 작성했으며 node.js에서 shell script를 사용할 수 있는 방법을 찾다가 shelljs 라는 라이브러리를 찾았다.

해당 라이브러리를 사용하여 node.js 에서 다음과 같이 사용하면 shell script를 사용할 수 있었다.

``` javascript
// shellTest.js
const shell = require('shelljs')

shell.cd('[프로젝트 경로]');

if(shell.exec(`sudo git pull 깃 주소`).code !== 0) {
    shell.echo('Error: command failed')
    shell.exit(1)
}

... 생략
```

위에서 생각한 조건 4가지 중 첫번째 조건은 webhook으로 처리가 되고 나머지 3개는 node.js에서 shelljs 라이브러리를 이용해서 처리 할 수 있었다.

그렇게 작성이 완료된 코드는 다음과 같다.

![webhook_code.png](/media/webhook_code.png) *webhook 발생시 실행되는 코드*