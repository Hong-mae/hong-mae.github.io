---
title: 안드로이드 에뮬레이터에서 앱 아이콘이 안보일 때
date: "2020-09-10T21:36:05.086Z"
template: "post"
draft: false
slug: "android-emulator-app-icon-not-visibility"
category: "Android"
tags:
  - "android"
  - "android studio"
  - "emulator"
  - "manifest"
  - "appicon"
description: "Android Studio의 에뮬레이터에서 앱아이콘이 안뜨는 현상을 해결하자"
socialImage: "/media/android_studio_logo.png"
---

Android Studio를 통해서 에뮬레이터에 테스트하는데
분명 컴파일은 완료되었지만 앱 아이콘이 종종 안뜨는 경우가 있다.

필자의 경우 다음 Manifest파일에서 Scheme를 설정 했을 때 생겼다.

![Scheme 설정 했을 때](/media/and_manifest_1.png) *Scheme 설정 했을 때*

외부에서 내가 만든 앱으로 넘어올때 Scheme를 사용하는데 이때 생기는 오류인것 같았다. 보통 위의 사진처럼 xml을 수정한다.

다음과 같이 intent-filter를 여러개 설정하면 앱아이콘이 표시된다.

![intent-filter를 2번 선언한다.](/media/and_manifest_2.png) *intent-filter를 2번 선언한다.*

intent-filter를 Scheme 용 intent-filter를 따로 분리하여 작성하면 해결된다.