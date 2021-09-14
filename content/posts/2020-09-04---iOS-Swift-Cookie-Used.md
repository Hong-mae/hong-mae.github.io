---
title: iOS/Swift - WKWebView에서 쿠키 사용법 중 하나!
date: "2020-09-04 16:55:34 GTM+0900"
template: "post"
draft: false
slug: "ios-swift-Cookie-used"
category: "iOS"
tags:
  - "iOS"
  - "Application"
  - "Swift"
  - "WebView"
  - "WKWebView"
description: "iOS의 WKWebview의 쿠키 사용하는 방법 중 하나를 알아보자"
socialImage: "/media/swift_logo.png"
---

WKWebView에서 로그인할때 쿠키로 작동한다면

쿠키를 가져오는 방법이 여러가지다.

그 중 지금 필자가 개발하는거에 가장 베스트는 userContentController 를 사용하는 방법이다.

**index.html**

```html
<html>
  ... 생략
  <script>
    window.webkit.messageHandlers.핸들러명.postMessage(쿠키);
  </script>
</html>
```

**ViewController.swift**

```swift
override func loadView() {
    ... 생략
    webView.configuration.userContentController.add(self, name: "핸들러명")
    ... 생략
}
... 생략
@available(iOS 8.0, *)
func userContentController(_ userContentController: WKUserContentController, didReceive message: WKScriptMessage) {
    if(message.name == "핸들러명"){
        // 받은 쿠키를 api 에 통신하려고 함
    }
}
```

웹에서 가져온 쿠키를 그대로 api 서버에 통신하는데 계속 쿠키가 잘못되었다고 에러를 뱉었다.

해결법을 찾아봤는데 **ViewController->viewDidLoad()**에 다음의 코드를 추가하면 된다.

**ViewController.swift**

```swift
override func viewDidLoad() {
    ... 생략

    let cookie = HTTPCookie.self
    let cookieJar = HTTPCookieStorage.shared

    for cookie in cookieJar.cookies! {
        cookieJar.deleteCookie(cookie)
    }

    ... 생략
}
```

이게 뭔지 모르겠지만 쿠키를 다 지워주는거같다. 하지만 웹뷰에서 쿠키를 확인했을때는 쿠키가 삭제되거나 그런일은 없다.
