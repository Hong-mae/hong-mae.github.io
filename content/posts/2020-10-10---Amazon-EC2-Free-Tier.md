---
title: AWS EC2 프리티어를 이용해보자
date: "2020-10-11 11:16:07 GMT+0900"
template: "post"
draft: false
slug: "how-to-use-aws-ec2-free-tier"
category: "Server"
tags:
  - "AWS"
  - "AWS EC2"
  - "Free Tier"
description: "AWS EC2 프리티어를 이용해서 서버를 오픈해보자!"
socialImage: "/media/ec2_free_tier.png"
---

클라우드 서버를 알아보다가 AWS(Amazon Web Service)에서 제공하는 EC2를 사용해보기로 했다.

이 서비스는 1년 동안 무료로 이용 가능한 프리티어(Free Tier)를 제공한다.

### 프리티어 시작하기(계정 생성)

![ec2_free_tier_web_site.png](/media/ec2_free_tier_web_site.png) _[AWS 프리티어 웹사이트](https://aws.amazon.com/ko/free/?all-free-tier.sort-by=item.additionalFields.SortRank&all-free-tier.sort-order=asc)_

계정 생성 후 해외 결제가 가능한 카드를 등록 해야한다. 이때 등록 후 1달러가 결제된다. 실제 있는 카드인지 확인을 위해서 등록한다. 그 후 빠른시일내에 다시 환불된다.

### 리전 선택

로그인 후 [EC2 사이트로](https://aws.amazon.com/ko/ec2/?nc2=type_a&ec2-whats-new.sort-by=item.additionalFields.postDateTime&ec2-whats-new.sort-order=desc) 접속해서 제일 먼저 리전을 서울로 변경한다.

![region_list.png](/media/region_list.png) _리전 리스트_

그리고 화면 중간에 인스턴스 시작을 눌러 인스턴스를 생성한다.

### 인스턴스 생성

![instance_start.png](/media/instance_start.png) _인스턴스 시작_

제일 처음 사용할 OS를 선택한다. 리스트 중 **프리티어 사용 가능**인 OS를 선택해서 인스턴스를 생성하면 된다.

### OS 리스트

![os_list.png](/media/os_list.png) _OS list_

필자는 Amazon Linux 2 AMI를 이용해서 생성하기로 했다.

### 인스턴스 선택

OS를 선택하면 인스턴스 리스트가 뜬다. 이때 프리티어 전용 인스턴스(t2.micro)가 있다. 이걸 선택하고 하단에 바로 **검토 및 시작**으로 넘어가면 된다. 만약 본인이 추가적인 설정을 하고 싶다면 **다음**버튼을 클릭하여 다음 단계로 넘어가면 된다.

![instance_list.png)](/media/instance_list.png) _인스턴스 리스트_

**추가** 웹서버 오픈시 80, 8080포트를 열어야한다면 8단계 보안그룹에서 수정하거나 따로 수정 가능하다. 설명은 제일 하단에서 설명하겠다.

### 검토 및 시작

해당 단계에서는 본인이 선택한 사항과 기본적으로 선택된 사항들을 보여주고 키페어 파일을 생성한다. 키페어 파일을 이용해 SSH 접속이 가능하다. 해당 파일은 재발급이 불가능하기 때문에 반드시 저장해야하며 분실하지 말아야한다.

생성 완료 후 상단의 서비스 > EC2 > 인스턴스로 들어가면 생성된 인스턴스를 확인 할 수 있으며

해당 화면에서 인스턴스를 on / off / reload / delete가 가능하다.
