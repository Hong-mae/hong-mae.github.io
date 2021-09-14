---
title: 개인 프로젝트 - Bit Coin Chart App 만들기_#1
date: "2020-10-11 02:17:02 GTM+0900"
template: "post"
draft: false
slug: "bit-coin-chart-with-react-native-1"
category: "React Native"
tags:
  - "React Native"
  - "Bit Coin"
  - "List View"
description: "리액트 네이티브를 이용해 비트코인 차트 앱을 만들어보자."
socialImage: "/media/rn_bit_coin_logo.png"
---

- [개인 프로젝트 - Bit Coin Chart App 만들기\_#1](/posts/bit-coin-chart-with-react-native-1)
- [개인 프로젝트 - Bit Coin Chart App 만들기\_#2](/posts/bit-coin-chart-with-react-native-2)
- [개인 프로젝트 - Bit Coin Chart App 만들기\_#3](/posts/bit-coin-chart-with-react-native-3)

개인 프로젝트를 하려고 생각만 하다가 이번에 마음먹고 뭐든지 만들어보기로 했다.

[훌륭한 프로그래머가 되고 싶다면 만들어야 할 앱 8가지](https://tagilog.tistory.com/579?fbclid=IwAR1iBUMyQHy4OQtluq_4kKtVUYJl_OuYBhKH0EIOd40HXs-jtaFCO7Z5cB8)

해당 글은 생활코딩 페이스북 그룹에서 봤던 블로그 포스트이다. 여기서 내가 이번에 도전할 것은 비트코인 차트 앱을 만들어 보려고 한다.

사용할 언어는 React Native(리액트 네이티브) 라는 언어다.

### React Native(리액트 네이티브)란 ?

리액트의 접근방법을 모바일로 확장한 Facebook의 오픈소스 프로젝트이다.

javascript로 코딩한 React의 컴포넌트는 React Native 플랫폼을 거쳐 IOS, Android Native 코드로 각각 변환된다.

자세한 사항은 [리액트 네이티브 공식 홈페이지](https://reactnative.dev/)에서 확인.

### 프로젝트 시작 전 준비사항

비트코인 차트 앱을 만들려고 했는데 중요한 것이 해당 정보들을 어디서 가져올 수 있을까? 하고 찾아보니 해당 정보를 제공해주는 곳이 여러곳 있었다. 바로 비트코인 거래소!

| 거래소 명                  | 주소                                                                              | 비고                                                                                          |
| -------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| 빗썸 (Bithumb)             | https://api.bithumb.com/public/ticker/ALL                                         | ALL 대신 원하는 암호화폐 심볼을 입력시 원하는 데이터를 호출                                   |
| 업비트 (Upbit)             | https://crix-api-endpoint.upbit.com/v1/crix/candles/days/?code=CRIX.UPBIT.KRW-BTC | KRW-BTC 대신 원하는 마켓 및 심볼을 입력하면 원하는 데이터를 호출                              |
| 코인마켓캡 (Coinmarketcap) | https://api.coinmarketcap.com/v1/ticker/?limit=20                                 | 데이터를 시총순서대로 불러오고 있음, limit=뒤의 숫자를 변경하여 원하는 개수만큼 불러오기 가능 |
| 코인원 (Coinone)           | https://api.coinone.co.kr/ticker?currency=all                                     | all 대신 원하는 심볼을 입력하여 호출, 코인원은 대문자가 아닌 소문자를 취급                    |
| 폴로닉스 (Poloniex)        | https://poloniex.com/public?command=returnTicker                                  | 현재 폴로닉스에서 거래중인 암호화폐 정보를 모두 출력                                          |
| 바이낸스 (Binance)         | https://api.binance.com/api/v1/ticker/allPrices                                   | allPrices 대신 원하는 심볼을 입력하여 데이터를 호출                                           |
| 코빗 (Korbit)              | https://api.korbit.co.kr/v1/ticker?currency_pair=btc_krw                          | btc-krw 대신 원하는 심볼을 입력하여 호출, 코인원과 마찬가지로 소문자를 취급                   |

위의 거래소 중 **빗썸**이 가장 정보가 많아 해당 거래소의 API를 이용하기로 했다. 결과 값은 JSON 형식으로 넘어오기 때문에 해당 정보를 가공해서 사용하기 용이하다.

### 출처 및 참고

- [거래소 별 API 정보 - 이리의 개발이야기](https://iri-kang.tistory.com/3)
