---
title: Android&iOS FCM을 Rest API를 통해 보내기
date: "2020-09-02T09:12:01.086Z"
template: "post"
draft: false
slug: "fcm-push-send-structure"
category: "FCM"
tags:
  - "Mobile"
  - "Push Notification"
  - "FCM"
  - "Android"
  - "iOS"
  - "Background"
  - "Foreground"
description: "안드로이드 및 iOS 앱으로 푸시알림을 보낼 때 RestAPI 활용하기"
socialImage: "/media/fcm.png"
---

fcm 가이드에서는 다음과 같이 쓰라고 되어있다.

```json
{
  "to": "FireBase Device Token",
  "notification": {
    "title": "Title",
    "body": "Body"
  }
}
```

이 예제를 그대로 사용할 경우 디바이스 토큰을 가진 사용자 한명에게만 보낸다. 여러명에게 보낼려면 아래의 코드로 테스트 가능하다.

```json
{
    'registration_ids' : ['FireBase Token 1', 'FireBase Token 2', ...],
    'notification' : {
        // 사용자에게 보이는 제목 및 내용.
        'title' : 'Title',
        'body'  : 'Body'
    },
    ...
}
```

구글링 하고 여러번의 시도 결과 나온 방법이다. 하지만 왜인지 모르게 iOS 앱의 Background에서는 잘되는데 Foreground에서는 안됀다.

일단 왜 앱을 실행 중일 경우 FCM으로 쏘는 푸시알림이 안보이는지 이해가 안됐다. 하지만 내가 겪는 어려움은 전세계 누구나 한번쯤은 겪는 문제!

검색을 통해 알아봤다. 의외로 아주 간단했다.

FCM 데이터를 수신하는 AppDelegate.swift -> UNUserNotificationCenterDelegate 에서 처리한다.

```swift
extension AppDelegate : UNUserNotificationCenterDelegate {

    // Receive displayed notifications for iOS 10 devices.
    func userNotificationCenter(_ center: UNUserNotificationCenter,
                                willPresent notification: UNNotification,
                                withCompletionHandler completionHandler: @escaping (UNNotificationPresentationOptions) -> Void) {
        let userInfo = notification.request.content.userInfo

        // With swizzling disabled you must let Messaging know about the message, for Analytics
        // Messaging.messaging().appDidReceiveMessage(userInfo)
        // Print message ID.
        if let messageID = userInfo\[gcmMessageIDKey\] {
            print("Message ID: \(messageID)")
        }

        // completionHandler([])을 아래 부분을 변경하면 된다.
        completionHandler([.alert, .sound])

    }
    ... 생략
}
```

completionHandler(\[\])에서 \[\] 을 \[.alert, .sound\] 로 변경하면 된다.
