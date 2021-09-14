---
title: cafe24? 닷홈? AWS EC2? 호스팅 서비스들의 장단점
date: "2020-10-09 13:01:57 GTM+0900"
template: "post"
draft: false
slug: "differences-between-server-hosting-and-cloud-server"
category: "Server"
tags:
  - "cafe24"
  - "dothome"
  - "AWS EC2"
  - "Web Server"
description: "AWS 1년 프리티어로 제공해주는 EC2를 사용해 웹 서버를 열어보자."
socialImage: "/media/web-server-hosting.jpg"
---

대학교 1~2학년때에는 호스팅 서비스는 어떻게 하는지도 몰랐고 웹서버를 오픈하는건 로컬 환경에서만 가능했다. 방학 기간 동안 외부에서 나의 웹 서버에 접속하는 방법에 대해 찾아 봤고 흔히 사용하는 방법과 회사에 다니면서 얻은 방법과 각각의 장단점? 에 대해 설명하겠다.

### cafe24, dothome

일반 사용자나 학생들이 가장 무난하게 사용할 수 있는 호스팅 사이트다. 초기에 설치비용(?)이 들어가지만 월 사용료가 그렇게 크지 않아 저렴한 가격으로 이용 할 수 있다.

![cafe24_price_price_table.png](/media/cafe24_price_table.png) _cafe24 - 10G 광 아우토반 Full SSD 가격표_

![dothome_price_table.png](/media/dothome_price_table.png) _dothome - 리눅스 호스팅 가격표_

cafe24에 접속시 제일 먼저 보이는 10G 광 아우토반 Full SSD를 이용하면 절약형 / 일반형은 약 11,000원 이하로 이용이 가능하다. 보통 SPA 웹 페이지라면 절약형 / 일반형을 이용하면 좋을 것 같다.

cafe24의 단점(?)중 하나는 트래픽 용량을 초과될 경우 사이트가 닫힌다. 만약 본인 사이트가 트래픽이 많을 경우 넉넉하게 트래픽 용량을 추가 구매하거나, 가격대가 높은 서비스를 이용하기 바란다.

### AWS EC2

AWS(Amazon Web Service)는 아마존에서 제공하는 웹 서비스를 의미한다. AWS에는 많은 서비스가 존재한다. 많은 서비스 중 가장 먼저 EC2가 제일 먼저 떠오른다.

EC2(Amazon Elastic Compute Cloud)는 클라우드 서버다. 서버 자원의 추가 삭제가 용이하다. EC2에는 다양한 프로세서, 스토리지, 운영체제를 제공한다.

![/media/aws_ec2_os.png](/media/aws_ec2_os.png) _AWS EC2 제공 운영체제_

그리고 가장 큰 장점이자 단점인 것은 이용 시간별 요금이 부과되며 하나의 서비스는 가격이 나름 싸지만 서버 운영을 위해 추가적인 서비스를 더 추가해야하며 추가 시 비용이 추가된다. 즉, <span class='warning'>작은 비용들이 모여 터무니 없는 비용 폭탄을 맞을 수 있다.</span>

### 정리하며

<table class='table_line'>
  <tr>
    <th></th>
    <th>cafe24, dothome</th>
    <th>AWS EC2</th>
  </tr>
  <tr>
    <th>종류</th>
    <td>서버 호스팅</td>
    <td>클라우드</td>
  </tr>
  <tr>
    <th>특징</th>
    <td>
      <ul>
        <li>호스팅 업체의 물리 서버 이용</li>
        <li>구매/임대 후 서버 운영에 필요한 기술력까지 제공 받음</li>
      </ul>
    </td>
    <td>
      <ul>
        <li>호스팅 업체의 가상 서버 이용</li>
        <li>빠른 시간 이내 서버 생성 후 바로 이용. (서버 관련 지식 필요)</li>
      </ul>
    </td>
  </tr>
  <tr>
    <th>장점</th>
    <td colspan=2>
      <ul>
        <li>서버 설정의 직접적인 권한</li>
        <li>서버의 모든 자원을 활용 가능</li>
      </ul>
    </td>
  </tr>
  <tr>
    <th>단점</th>
    <td>
      <ul>
        <li>초기 구축에 시간 및 비용이 많이 소요</li>
        <li>클라우드에 비해 가격이 저렴함</li>
        <li>서버 확장 / 축소 어려움</li>
      </ul>
    </td>
    <td>
      <ul>
        <li>서버 구축에 대한 지식 필요</li>
        <li>하나의 프로그램 이상시 연결된 다른 프로그램도 영향. (백업, 이중화로 해결)</li>
        <li>필요시 서버 확장 / 축소 가능</li>
      </ul>
    </td>
  </tr>
</table>
