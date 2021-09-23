---
title: '맥에서 VSCode를 사용한 C/C++ 프로그래밍'
date: '2021-09-16 23:33:19 GMT+0900'
template: 'post'
draft: false
slug: 'c-cpp-use-vscode-in-mac'
category: 'C/C++'
tags:
    - 'C/C++'
    - 'C/Cpp'
    - 'MAC'
    - 'VSCode'
description: 'C/C++ 공부에 앞서 맥에서 VSCode를 기반으로한 세팅을 해보자.'
socialImage: ''
---

### 준비물

준비물은 간단하다 VSCode. 설치하는 건 [Visual Studio Code 설치하기](/posts/install-vscode)를 참고하도록!

### C/C\+\+ 확장 프로그램 설치

VSCode를 실행하고 왼쪽 확장설치자 탭을 열어 C/C++을 검색해 다음과 같은 확장 프로그램을 다운로드 받는다.

<div class='picture'>

![vscode_install_c_cpp_extension.png](/media/vscode_install_c_cpp_extension.png) _VSCode C/C\+\+ 확장 프로그램 설치_

</div>

### CodeLLDB 확장 프로그램 설치

VSCode에서 C/C++ 프로그래밍시 디버그도 하나하나 설정해야한다. 그때 필요한게 lldb라는 것인데, 기본적으로 맥에서 제공(?)하는 ~~지 모르겠다.~~ lldb는 잘 작동되지 않는다. input을 받는 상황이 오면 먹통이 되버린다. 이를 해결하는 방법이 VSCode 공식 홈페이지에 제공해주지만 그것마저 제대로 작동하지 않았기에 해당 확장 프로그램을 다운 받았다.

<div class='picture'>

![vscode_install_codelldb_extension.png](/media/vscode_install_codelldb_extension.png)

</div>

### C/C\+\+파일 생성

우선 작업 폴더를 생성하고 VSCode에서 해당 폴더를 연뒤 `helloworld.cpp`파일을 만든다. `.cpp`파일(c++파일)로 만드는 이유는 cpp 디버그 프로파일로 c파일도 디버깅이 가능하기 때문에 c++파일로 생성했다. 하지만 c 디버그 프로파일로 c++파일을 디버깅 할 수 없었다. ~~설정하기 나름이라는데 아무리 설정해도 못하겠다.~~

`helloworld.cpp` 파일을 생성하고 다음과 같이 작성한다.

`gist:Moong-bee/d1e226f323b140eb16bf67e5e5557c4a#helloworld.cpp`

### 빌드 환경 구성

빌드를 위해 `task.json`파일을 생성한다. 해당 파일은 `명령 팔레트(Command + Shift + P) > 기본 빌드 작업 구성 > C/C++:clang++ 활성 파일 빌드`를 선택하면 자동으로 .vscode 폴더가 생성되고 안에 `task.json` 파일이 생긴다.

`gist:Moong-bee/d1e226f323b140eb16bf67e5e5557c4a#task.json`

### 디버그 환경 구성

왼쪽 메뉴에 디버그 버튼을 누르고 `launch.json`파일을 생성하기 위한 절차를 진행한다. 구성은 왠만하면 clang++로 구성하자.

<div class='picture'>

![vscode_open_debug.png](/media/vscode_open_debug.png)

![vscode_create_cpp_launch_1.png](/media/vscode_create_cpp_launch_1.png)

![vscode_create_cpp_launch_2.png](/media/vscode_create_cpp_launch_2.png)

</div>

### launch.json 수정

자동으로 생성되어 사용할 수 있지만 CodeLLDB를 사용하기 위해 다음과 같이 수정한다.

`gist:Moong-bee/d1e226f323b140eb16bf67e5e5557c4a#launch.json?highlights=9,18`

기본적으로 9번째 줄 type이 cppdbg로 되어있다. 이걸 lldb로 변경하자.

그리고 18번째 줄 preLaunchTask에 들어가는 내용은 `task.json`에 name 부분과 똑같이 작성하면 된다.

### 실행 방법

간단하다 F5를 누르면 된다. 만약 맥의 경우 fn + F5를 누르면 된다.

![vscode_build_cpp.png](/media/vscode_build_cpp.png)

### 마치며

기본적인 설정은 모두 끝났다. 이 설정을 통해 C파일도 빌드할 수 있으므로 걱정말고 시도해보길 바란다.
