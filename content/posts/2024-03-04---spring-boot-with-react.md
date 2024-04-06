---
title: 'Spring Boot와 React(Next JS)를 이용한 프로젝트 - 개요'
date: '2024-03-04 13:43:13 GMT+09:00'
template: 'post'
draft: false
slug: 'spring-boot-with-react'
category: 'Spring Boot'
tags:
    - 'spring boot'
    - 'react'
    - 'nextjs'
description: 'Spring Boot, React(Next.js)로 여러 웹 프로젝트 만들기'
socialImage: '/media/spring_boot_next_js.png'
---

최근 Spring Boot를 공부하게 되어 배운 것을 기반으로 어떤 프로젝트를 할까 고민 중

책에서 추천한 프로젝트를 진행 해보기로 했다. 프로젝트의 큰 틀은 총 3가지이며 각 규칙에 따라 프로젝트를 진행할 예정이다.

### 스트리밍 서비스

영화 목록 및 예고편을 볼 수 있는 프로젝트

#### 규칙
1. [The Movie DB](https://www.themoviedb.org)의 영화 목록을 보여줘야 함.
2. API Key 등을 이용하여 데이터 받아오기
3. 예고편이 제공되는 경우 재생할 수 있어야 함.
4. 포스터 등 이미지 제공시 보여줘야 함.
5. 사용자 로그인/로그아웃할 수 있어야 함.

### 실시간 채팅

여러 사용자와 실시간으로 채팅하는 프로젝트

#### 규칙
1. 여러 개의 대화방을 생성할 수 있어야 함.
2. 사용자는 대화방 이름으로 참여할 수 있어야 함.
3. 사용자가 대화방 입장시 전체 대화 내역을 볼 수 있어야 함.
4. 대화는 실시간으로 이루어져야 함.
5. 추가 기능으로 사용자가 새 대화방을 만들 수 있어야 함.

### 블로그

SEO를 중점으로 생각한 블로그 프로젝트

#### 규칙
1. UI 스타일링을 TailwindCSS 이용하기.
2. Typescript 사용하기.
3. 좋아하는 블로그 사이트와 비슷하게 만들기.
4. 빌드시 페이지 정적 생성.
5. 사용자는 로그인 후 읽기 목록에 글을 추가할 수 있어야 함.
6. 소셜이미지, 배너 등 이미지 제공시 보여줘야 함.
7. Lighthouse로 SEO 측정시 100%가 되어야함.


필요한 백엔드 시스템(회원, 대화 내용 등)은 하나로 통합하여 진행하며 시간이 될 경우 GraphQL을 이용할 예정

### 