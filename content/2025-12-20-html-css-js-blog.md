---
title: HTML, CSS, JavaScript로 블로그 만들기
date: 2025-12-20
category: Frontend
tags: [웹개발, HTML, CSS, JavaScript]
thumbnail: thumbnails/web-blog.svg
excerpt: 프레임워크 없이 순수 HTML, CSS, JavaScript만으로 개발 블로그를 만드는 방법을 소개합니다.
---

# 순수 웹 기술로 블로그 만들기

최근에는 React, Vue, Next.js 같은 프레임워크를 많이 사용하지만, 순수 HTML, CSS, JavaScript만으로도 충분히 멋진 블로그를 만들 수 있습니다.

## 장점

- **빠른 로딩 속도**: 프레임워크 없이 가벼운 번들 크기
- **단순함**: 복잡한 빌드 과정 없이 바로 배포 가능
- **학습**: 웹의 기본기를 이해하는 데 도움

## 구현 방법

이 블로그는 다음과 같은 기능을 포함합니다:

- SPA(Single Page Application) 스타일의 네비게이션
- 동적 콘텐츠 로딩
- 반응형 디자인
- 모바일 친화적 UI

## 코드 예시

```javascript
// 간단한 라우팅 예시
function showSection(sectionId) {
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
    });
    document.getElementById(sectionId).classList.add('active');
}
```

이렇게 간단하게도 충분히 기능적인 블로그를 만들 수 있습니다!

