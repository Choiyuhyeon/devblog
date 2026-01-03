---
title: JavaScript ES6+ 주요 기능 정리
date: 2025-12-15
category: Frontend
tags: [JavaScript, ES6]
thumbnail: thumbnails/javascript-es6.svg
excerpt: ES6 이후 추가된 JavaScript의 주요 기능들을 정리하고 예시를 통해 설명합니다.
---

# ES6+ 주요 기능

ES6(ECMAScript 2015) 이후 JavaScript에 추가된 유용한 기능들을 정리했습니다.

## 1. 화살표 함수 (Arrow Functions)

```javascript
// 기존 함수
function add(a, b) {
    return a + b;
}

// 화살표 함수
const add = (a, b) => a + b;
```

## 2. 템플릿 리터럴 (Template Literals)

```javascript
const name = 'World';
const greeting = `Hello, ${name}!`;
```

## 3. 구조 분해 할당 (Destructuring)

```javascript
const user = { name: 'John', age: 30 };
const { name, age } = user;
```

## 4. Promise와 async/await

```javascript
async function fetchData() {
    try {
        const response = await fetch('/api/data');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error:', error);
    }
}
```

이러한 기능들을 활용하면 더 간결하고 읽기 쉬운 코드를 작성할 수 있습니다.

