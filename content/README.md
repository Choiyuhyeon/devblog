# 블로그 포스트 작성 가이드

이 폴더에 마크다운 파일을 작성하여 블로그 포스트를 추가할 수 있습니다.

## 파일 명명 규칙

파일명 형식: `YYYY-MM-DD-제목.md`

예시:
- `2025-12-23-first-post.md`
- `2025-12-20-html-css-js-blog.md`

## Frontmatter 형식

각 MD 파일의 상단에 다음 형식의 frontmatter를 작성하세요:

```markdown
---
title: 게시글 제목
date: 2025-12-23
category: Frontend
tags: [JavaScript, ES6]
thumbnail: thumbnails/javascript-es6.svg
excerpt: 게시글 요약 내용입니다.
---

# 본문 제목

본문 내용을 여기에 작성합니다...
```

## Frontmatter 필드 설명

- **title**: 게시글 제목 (필수)
- **date**: 게시 날짜 (YYYY-MM-DD 형식, 필수)
- **category**: 카테고리 (선택사항, 기본값: '그외')
  - Backend, Frontend, Algorithm, 취업관련, 회고록, 그외
- **tags**: 태그 배열 (선택사항)
- **thumbnail**: 썸네일 이미지 경로 (선택사항)
  - 예: `thumbnails/my-image.svg` 또는 `thumbnails/my-image.jpg`
- **excerpt**: 게시글 요약 (선택사항, 없으면 본문 앞부분 자동 추출)

## 썸네일 이미지

썸네일 이미지는 `thumbnails/` 폴더에 저장하세요.

- 지원 형식: SVG, JPG, PNG
- 권장 크기: 800x450px
- 파일명: 소문자와 하이픈 사용 권장

## 본문 이미지

본문에 사용할 이미지는 `images/` 폴더에 저장하고 마크다운에서 다음과 같이 참조하세요:

```markdown
![이미지 설명](images/my-image.png)
```

## 예시

```markdown
---
title: React Hooks 완벽 가이드
date: 2025-12-25
category: Frontend
tags: [React, Hooks]
thumbnail: thumbnails/react-hooks.svg
excerpt: React Hooks의 기본 개념부터 고급 사용법까지 완벽하게 정리했습니다.
---

# React Hooks 완벽 가이드

React Hooks는 함수형 컴포넌트에서 상태와 생명주기 기능을 사용할 수 있게 해주는 기능입니다.

## useState

가장 기본적인 Hook입니다:

\`\`\`javascript
import { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0);
    return <div>{count}</div>;
}
\`\`\`
```

## 카테고리 구조

현재 지원하는 카테고리:

- **Backend**: Docker, mongodb
- **Frontend**: html, css, js, codeit sprint, react
- **Algorithm**: 프로그래머스
- **취업관련**
- **회고록**
- **그외**

