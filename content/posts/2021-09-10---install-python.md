---
title: "Python 설치하기"
date: "2021-09-10 20:41:03 GMT+0900"
template: "post"
draft: false
slug: "install-python"
category: "Python"
tags:
  - "Python"
description: "Python을 설치해보자!"
socialImage: ""
---

일하는 곳에서 다른 프로젝트로 Python을 사용하는 일이 생겼다. 그래서 오늘은 Python을 설치/실행하는 시간을 가져보자!

### 설치하기

1. window
   
    우선 윈도우의 경우에는 [Python 홈페이지](https://python.org)에서 설치 파일을 다운받아 실행한다.

    <div class='picture'>

    ![python_download.jpeg](/media/python_download.jpeg) _Python 홈페이지_

    </div>

2. Mac OS(Linux)

    보통 해당 Max OS나 Linux에는 Python이 깔려있고 2.7 버전일 경우가 많다.

    하지만 버전이 낮기 때문에 새 버전을 설치해야한다. 윈도우 설치와 똑같이 다운로드 해도 상관없지만 `Homebrew`를 통해 설치하는 방법을 알아보자.

    1. Homebrew 설치 확인
    
        ```
        $ brew --versionl
        ```

        우선 설치가 되어있는지 확인을 위해 Homebrew의 버전을 확인해 본다. 설치가 되어있다면 3번, 아니라면 2번으로 진행하면 된다!

    2. Homebrew 설치하기

        ```
        $ /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
        ```
        
        위의 명령어로 설치할 수 있으며 [Homebrew 홈페이지](https://brew.sh/index_ko)에서 정보를 확인할 수 있다. 설치 후 다시 버전확인을 해본다.

    3. Homebrew 업데이트

        ```bash
        $ brew update
        ```

        해당 명령어는 brew를 통해 설치된 모든 시스템을 업데이트 한다. 방금 Homebrew를 설치해서 최신 버전이겠지만 그래도 한번 업데이트 해주자!

    4. Python 설치하기

        ```
        $ brew install python3
        ```

        위의 명령어를 통해 파이썬을 설치할 수 있다.

    5. Python 버전 업그레이드

        ```
        $ brew upgrade python3
        ```

        3번에서 했던 명령어를 그대로 사용할 수 있지만 위의 명령어는 Python 자체만 업데이트한다.



