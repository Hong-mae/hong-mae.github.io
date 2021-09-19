---
title: 'Node JS 설치하기'
date: '2020-09-20 21:10:00 GMT+0900'
template: 'post'
draft: false
slug: 'install-node-js'
category: 'NodeJS'
tags:
    - 'NodeJS'
description: 'NodeJS를 설치해보자!'
socialImage: ''
---

필자가 자주 사용하는 NodeJS를 설치하는 법을 알아보자!

### Node JS 설치하기

1. Window

    윈도우의 경우 [공식 홈페이지](https://nodejs.org/ko/download)에서 msi 파일을 다운받아 설치 할 수 있다. LTS(Long Term Support) 버전과 Current 버전이 있다. Current 버전의 경우 새로운 기술이 도입된 경우가 많은데 이 경우 버그가 많을 수 있다, 따라서 LTS 버전을 설치한다.

    ![download_nodejs_window_msi.png](/media/download_nodejs_window_msi.png)

    1. 설치 후 Node 버전 확인

        터미널을 열고 다음 명령어를 실행한다.

        ```
        C:\\~~\\user> node -v
        v14.XX.XX
        ```

2. MacOS(with linux 계열)

    맥의 경우 NVM을 이용하여 NodeJS를 설치 할 수 있으며 NodeJS 버전 관리도 가능하다. terminal을 열어 다음 명령어를 실행한다.

    1. 설치 명령어

        ```
        $ sudo curl -o- https://raw.githubusercontent.com/creationix/nvm/{버전}/install.sh | bash
        ```

        버전의 경우 [nvm github 페이지](https://github.com/nvm-sh/nvm)에서 확인 할 수 있다.

    2. nvm 설치확인

        ```
        $ nvm ls

        -bash: nvm: command not found # 설치했지만 환경 변수 설정을 안함.
        ```

    3. vi 또는 사용하는 에디터를 이용

        ```
        # bash
        $ vi ~/.bash_profile

        # zsh
        $ vi ~/.zshrc
        ```

        을 입력하여 다음의 텍스트를 입력하고 저장한다

        ```
        export NVM_DIR="$HOME/.nvm"
        [ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh" # This loads nvm
        ```

    4. 터미널 재실행

        ```
        # bash
        source ~/.bash_profile

        # zsh
        ssource ~/.zshrc
        ```

    5. nvm 설치 확인

        ```
        $ nvm ls

        ->       system
        node -> stable (-> N/A) (default)
        iojs -> N/A (default)
        ... 생략
        ```

    6. Node 설치

        ```
        $ nvm install --lts
        ```

    7. 설치된 Node 버전 확인

        ```
        $ nvm ls

        ->       v14.XX.X
        default -> v14.XX.X
        node -> stable (-> N/A) (default)
        iojs -> N/A (default)
        ... 생략
        ```

        설치된 버전이 뜨고 필자는 v14.17.5 버전으로 뜬다

    8. Node 명령어로 설치된 버전 확인하기

        ```
        $ node -v
        v14.XX.XX
        ```
