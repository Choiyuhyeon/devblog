---
title: CSS Grid와 Flexbox 활용하기
date: 2025-12-10
category: Frontend
tags: [CSS, 레이아웃]
thumbnail: thumbnails/a.png
excerpt: CSS Grid와 Flexbox를 활용하여 반응형 레이아웃을 만드는 방법을 알아봅니다.
---

# CSS Grid vs Flexbox

CSS Grid와 Flexbox는 현대적인 레이아웃을 만드는 강력한 도구입니다.

## Flexbox

Flexbox는 1차원 레이아웃(행 또는 열)에 적합합니다.

```css
.container {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
```

## CSS Grid

Grid는 2차원 레이아웃(행과 열)에 적합합니다.

```css
.container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 2rem;
}
```

## 언제 무엇을 사용할까?

- **Flexbox**: 네비게이션 바, 카드 내부 요소 정렬
- **Grid**: 전체 페이지 레이아웃, 카드 그리드

두 기술을 함께 사용하면 더욱 강력한 레이아웃을 만들 수 있습니다!

