// 블로그 포스트 데이터 (기본 데이터)
let blogPosts = [
    {
        id: 1,
        title: '블로그 첫 포스팅 테스트!',
        date: '2025-12-23',
        category: '일반',
        tags: ['일반'],
        excerpt: '개발 블로그를 시작합니다. 앞으로 다양한 개발 경험과 학습 내용을 공유하겠습니다.',
        content: `
            <h2>안녕하세요!</h2>
            <p>이것은 첫 번째 블로그 포스트입니다. 개발 블로그를 시작하게 되어 기쁩니다.</p>
            <p>앞으로 다음과 같은 내용을 공유할 예정입니다:</p>
            <ul>
                <li>프로젝트 개발 경험</li>
                <li>새로운 기술 학습 내용</li>
                <li>코딩 팁과 트릭</li>
                <li>개발 도구 사용법</li>
            </ul>
            <p>많은 관심 부탁드립니다!</p>
        `
    },
    {
        id: 2,
        title: 'HTML, CSS, JavaScript로 블로그 만들기',
        date: '2025-12-20',
        category: '웹개발',
        tags: ['웹개발', 'HTML', 'CSS', 'JavaScript'],
        excerpt: '프레임워크 없이 순수 HTML, CSS, JavaScript만으로 개발 블로그를 만드는 방법을 소개합니다.',
        content: `
            <h2>순수 웹 기술로 블로그 만들기</h2>
            <p>최근에는 React, Vue, Next.js 같은 프레임워크를 많이 사용하지만, 순수 HTML, CSS, JavaScript만으로도 충분히 멋진 블로그를 만들 수 있습니다.</p>
            
            <h3>장점</h3>
            <ul>
                <li><strong>빠른 로딩 속도</strong>: 프레임워크 없이 가벼운 번들 크기</li>
                <li><strong>단순함</strong>: 복잡한 빌드 과정 없이 바로 배포 가능</li>
                <li><strong>학습</strong>: 웹의 기본기를 이해하는 데 도움</li>
            </ul>
            
            <h3>구현 방법</h3>
            <p>이 블로그는 다음과 같은 기능을 포함합니다:</p>
            <ul>
                <li>SPA(Single Page Application) 스타일의 네비게이션</li>
                <li>동적 콘텐츠 로딩</li>
                <li>반응형 디자인</li>
                <li>모바일 친화적 UI</li>
            </ul>
            
            <h3>코드 예시</h3>
            <pre><code>// 간단한 라우팅 예시
function showSection(sectionId) {
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
    });
    document.getElementById(sectionId).classList.add('active');
}</code></pre>
            
            <p>이렇게 간단하게도 충분히 기능적인 블로그를 만들 수 있습니다!</p>
        `
    },
    {
        id: 3,
        title: 'JavaScript ES6+ 주요 기능 정리',
        date: '2025-12-15',
        category: 'JavaScript',
        tags: ['JavaScript', 'ES6'],
        excerpt: 'ES6 이후 추가된 JavaScript의 주요 기능들을 정리하고 예시를 통해 설명합니다.',
        content: `
            <h2>ES6+ 주요 기능</h2>
            <p>ES6(ECMAScript 2015) 이후 JavaScript에 추가된 유용한 기능들을 정리했습니다.</p>
            
            <h3>1. 화살표 함수 (Arrow Functions)</h3>
            <pre><code>// 기존 함수
function add(a, b) {
    return a + b;
}

// 화살표 함수
const add = (a, b) => a + b;</code></pre>
            
            <h3>2. 템플릿 리터럴 (Template Literals)</h3>
            <pre><code>const name = 'World';
const greeting = \`Hello, \${name}!\`;</code></pre>
            
            <h3>3. 구조 분해 할당 (Destructuring)</h3>
            <pre><code>const user = { name: 'John', age: 30 };
const { name, age } = user;</code></pre>
            
            <h3>4. Promise와 async/await</h3>
            <pre><code>async function fetchData() {
    try {
        const response = await fetch('/api/data');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error:', error);
    }
}</code></pre>
            
            <p>이러한 기능들을 활용하면 더 간결하고 읽기 쉬운 코드를 작성할 수 있습니다.</p>
        `
    },
    {
        id: 4,
        title: 'CSS Grid와 Flexbox 활용하기',
        date: '2025-12-10',
        category: 'CSS',
        tags: ['CSS', '레이아웃'],
        excerpt: 'CSS Grid와 Flexbox를 활용하여 반응형 레이아웃을 만드는 방법을 알아봅니다.',
        content: `
            <h2>CSS Grid vs Flexbox</h2>
            <p>CSS Grid와 Flexbox는 현대적인 레이아웃을 만드는 강력한 도구입니다.</p>
            
            <h3>Flexbox</h3>
            <p>Flexbox는 1차원 레이아웃(행 또는 열)에 적합합니다.</p>
            <pre><code>.container {
    display: flex;
    justify-content: space-between;
    align-items: center;
}</code></pre>
            
            <h3>CSS Grid</h3>
            <p>Grid는 2차원 레이아웃(행과 열)에 적합합니다.</p>
            <pre><code>.container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 2rem;
}</code></pre>
            
            <h3>언제 무엇을 사용할까?</h3>
            <ul>
                <li><strong>Flexbox</strong>: 네비게이션 바, 카드 내부 요소 정렬</li>
                <li><strong>Grid</strong>: 전체 페이지 레이아웃, 카드 그리드</li>
            </ul>
            
            <p>두 기술을 함께 사용하면 더욱 강력한 레이아웃을 만들 수 있습니다!</p>
        `
    }
];

let currentCategory = 'all';
let categories = new Set(['일반', '웹개발', 'JavaScript', 'CSS']);

// DOM 요소 선택
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('.section');
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');
const recentArticlesGrid = document.getElementById('recent-articles-grid');
const allArticlesGrid = document.getElementById('all-articles-grid');
const sidebar = document.getElementById('sidebar');
const sidebarToggle = document.getElementById('sidebarToggle');
const sidebarClose = document.getElementById('sidebarClose');
const sidebarOverlay = document.getElementById('sidebarOverlay');
const categoryList = document.getElementById('categoryList');
const pagination = document.getElementById('pagination');

// 페이징 관련 변수
let currentPage = 1;
const postsPerPage = 9;

// 초기화
document.addEventListener('DOMContentLoaded', async () => {
    initSidebar();
    initNavigation();
    initCustomCursor();
    await loadPostsFromMarkdownFiles();
    initRouting();
    loadRecentArticles();
    loadAllArticles();
    loadCategories();
    loadBlogCategories();
    loadPostDetailCategories();
    handleHashChange();
});

// 사이드바 초기화
function initSidebar() {
    if (!sidebar || !sidebarToggle) return;

    // 사이드바 토글
    sidebarToggle.addEventListener('click', () => {
        sidebar.classList.add('active');
        if (sidebarOverlay) sidebarOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    });

    // 사이드바 닫기
    if (sidebarClose) {
        sidebarClose.addEventListener('click', closeSidebar);
    }

    if (sidebarOverlay) {
        sidebarOverlay.addEventListener('click', closeSidebar);
    }

    // ESC 키로 닫기
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && sidebar.classList.contains('active')) {
            closeSidebar();
        }
    });
}

function closeSidebar() {
    if (sidebar) sidebar.classList.remove('active');
    if (sidebarOverlay) sidebarOverlay.classList.remove('active');
    document.body.style.overflow = '';
}

// content 폴더의 MD 파일들에서 포스트 로드
async function loadPostsFromMarkdownFiles() {
    try {
        // content/index.json 파일에서 파일 목록 가져오기
        let markdownFiles = [];
        
        try {
            const indexResponse = await fetch('content/index.json');
            if (indexResponse.ok) {
                const indexData = await indexResponse.json();
                if (indexData.files && Array.isArray(indexData.files)) {
                    markdownFiles = indexData.files;
                }
            }
        } catch (error) {
            console.log('content/index.json 파일을 찾을 수 없습니다. 기본 파일 목록을 사용합니다.');
            // index.json이 없으면 기본 파일 목록 사용
            markdownFiles = [
                'content/2026-01-03-코드잇 스프린트-CSS정리.md',
                'content/2025-12-23-first-post.md',
                'content/2025-12-20-html-css-js-blog.md',
                'content/2025-12-15-javascript-es6.md',
                'content/2025-12-10-css-grid-flexbox.md'
            ];
        }

        const posts = [];
        
        for (const file of markdownFiles) {
            try {
                const response = await fetch(file);
                if (response.ok) {
                    const text = await response.text();
                    const post = parseMarkdownFile(text, file);
                    if (post) {
                        posts.push(post);
                    }
                }
            } catch (error) {
                console.log(`${file} 파일을 읽는 중 오류가 발생했습니다:`, error);
            }
        }
        
        if (posts.length > 0) {
            // MD 파일에서 파싱한 포스트로 교체 (기존 하드코딩된 데이터는 제거)
            blogPosts = [...posts];
            // 날짜순으로 정렬 (최신순)
            blogPosts.sort((a, b) => new Date(b.date) - new Date(a.date));
            // ID 재할당
            blogPosts.forEach((post, index) => {
                post.id = index + 1;
            });
            
            // 디버깅: 파싱된 포스트 정보 출력
            console.log('파싱된 포스트 목록:', blogPosts.map(p => ({
                id: p.id,
                title: p.title,
                thumbnail: p.thumbnail,
                category: p.category,
                date: p.date
            })));
            
            // 카테고리 업데이트
            blogPosts.forEach(post => {
                if (post.category) {
                    categories.add(post.category);
                }
            });
        }
    } catch (error) {
        console.log('MD 파일을 읽는 중 오류가 발생했습니다:', error);
    }
}

// MD 파일 파싱 (frontmatter + 마크다운)
function parseMarkdownFile(text, filePath) {
    // frontmatter 파싱
    const frontmatterMatch = text.match(/^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/);
    
    if (!frontmatterMatch) {
        console.log(`${filePath}: frontmatter를 찾을 수 없습니다.`);
        return null;
    }
    
    const frontmatterText = frontmatterMatch[1];
    const content = frontmatterMatch[2];
    
    // frontmatter 파싱
    const frontmatter = {};
    const lines = frontmatterText.split(/\r?\n/); // Windows와 Unix 줄바꿈 모두 처리
    
    for (const line of lines) {
        // 빈 줄 건너뛰기
        const trimmedLine = line.trim();
        if (!trimmedLine) continue;
        
        // 콜론으로 키와 값 분리
        const colonIndex = trimmedLine.indexOf(':');
        if (colonIndex === -1) {
            console.log(`파싱 실패한 줄 (콜론 없음): "${trimmedLine}"`);
            continue;
        }
        
        const key = trimmedLine.substring(0, colonIndex).trim();
        let value = trimmedLine.substring(colonIndex + 1).trim();
        
        // 배열 파싱 (tags: [tag1, tag2])
        if (value.startsWith('[') && value.endsWith(']')) {
            value = value.slice(1, -1).split(',').map(t => t.trim().replace(/['"]/g, ''));
        }
        
        frontmatter[key] = value;
        console.log(`Frontmatter 파싱: ${key} = ${value} (타입: ${typeof value})`);
    }
    
    // 마크다운을 HTML로 변환
    const htmlContent = markdownToHtml(content);
    
    // 썸네일 경로 처리
    let thumbnailPath = frontmatter.thumbnail || null;
    
    // 디버깅: frontmatter 전체와 썸네일 값 확인
    console.log(`파싱된 frontmatter (${filePath}):`, frontmatter);
    console.log(`썸네일 경로 (${filePath}):`, thumbnailPath, typeof thumbnailPath);
    
    if (thumbnailPath) {
        // 문자열이면 trim 처리
        if (typeof thumbnailPath === 'string') {
            thumbnailPath = thumbnailPath.trim();
        }
        console.log(`처리된 썸네일 경로: ${thumbnailPath}`);
    } else {
        console.log(`썸네일이 없습니다 (${filePath})`);
    }
    
    return {
        title: frontmatter.title || 'Untitled',
        date: frontmatter.date || new Date().toISOString().split('T')[0],
        category: frontmatter.category || '그외',
        tags: Array.isArray(frontmatter.tags) ? frontmatter.tags : [frontmatter.tags || '일반'],
        thumbnail: thumbnailPath,
        excerpt: frontmatter.excerpt || content.substring(0, 100) + '...',
        content: htmlContent
    };
}

// README 파일을 파싱하여 포스트로 변환
function parseReadmeToPosts(text) {
    const posts = [];
    
    // README 형식: 
    // ## 카테고리: 제목
    // 날짜: YYYY-MM-DD
    // 
    // 요약
    // 
    // 본문 내용...
    
    const lines = text.split('\n');
    let currentPost = null;
    let inContent = false;
    let contentLines = [];
    
    for (let i = 0; i < lines.length; i++) {
        const line = lines[i].trim();
        
        // 카테고리와 제목 파싱 (## 카테고리: 제목 형식)
        const categoryTitleMatch = line.match(/^##\s*(.+?):\s*(.+)$/);
        if (categoryTitleMatch) {
            // 이전 포스트 저장
            if (currentPost) {
                currentPost.content = contentLines.join('\n');
                currentPost.excerpt = currentPost.excerpt || currentPost.content.substring(0, 100) + '...';
                posts.push(currentPost);
            }
            
            // 새 포스트 시작
            currentPost = {
                title: categoryTitleMatch[2].trim(),
                category: categoryTitleMatch[1].trim(),
                tags: [categoryTitleMatch[1].trim()],
                content: '',
                excerpt: ''
            };
            categories.add(currentPost.category);
            contentLines = [];
            inContent = false;
            continue;
        }
        
        // 날짜 파싱 (날짜: YYYY-MM-DD 형식)
        const dateMatch = line.match(/^날짜:\s*(.+)$/);
        if (dateMatch && currentPost) {
            currentPost.date = dateMatch[1].trim();
            continue;
        }
        
        // 요약 파싱 (요약: ... 형식)
        const excerptMatch = line.match(/^요약:\s*(.+)$/);
        if (excerptMatch && currentPost) {
            currentPost.excerpt = excerptMatch[1].trim();
            continue;
        }
        
        // 빈 줄 이후 본문 시작
        if (line === '' && currentPost && !inContent && currentPost.date) {
            inContent = true;
            continue;
        }
        
        // 본문 내용 수집
        if (inContent && currentPost && line !== '') {
            contentLines.push(line);
        }
    }
    
    // 마지막 포스트 저장
    if (currentPost) {
        currentPost.content = contentLines.join('\n');
        if (!currentPost.excerpt) {
            currentPost.excerpt = currentPost.content.substring(0, 100) + '...';
        }
        posts.push(currentPost);
    }
    
    // 마크다운을 HTML로 변환
    posts.forEach(post => {
        post.content = markdownToHtml(post.content);
    });
    
    return posts;
}

// 간단한 마크다운을 HTML로 변환
function markdownToHtml(markdown) {
    let html = markdown;
    
    // 헤더 변환
    html = html.replace(/^### (.*$)/gim, '<h3>$1</h3>');
    html = html.replace(/^## (.*$)/gim, '<h2>$1</h2>');
    html = html.replace(/^# (.*$)/gim, '<h1>$1</h1>');
    
    // 강조
    html = html.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    html = html.replace(/\*(.*?)\*/g, '<em>$1</em>');
    
    // 코드 블록 (언어 감지 포함)
    html = html.replace(/```(\w+)?\n?([\s\S]*?)```/g, (match, lang, code) => {
        const language = lang ? lang.trim() : '';
        const codeContent = code.trim();
        const highlightedCode = highlightCode(codeContent, language);
        return `<pre data-lang="${language}"><code class="language-${language}">${highlightedCode}</code></pre>`;
    });
    html = html.replace(/`([^`]+)`/g, '<code>$1</code>');
    
    // 링크
    html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>');
    
    // 리스트
    html = html.replace(/^\* (.*$)/gim, '<li>$1</li>');
    html = html.replace(/^- (.*$)/gim, '<li>$1</li>');
    html = html.replace(/(<li>.*<\/li>)/s, '<ul>$1</ul>');
    
    // 줄바꿈을 <p> 태그로
    const paragraphs = html.split('\n\n');
    html = paragraphs.map(p => {
        p = p.trim();
        if (p && !p.startsWith('<')) {
            return '<p>' + p + '</p>';
        }
        return p;
    }).join('\n');
    
    return html;
}

// 카테고리 로드
function loadCategories() {
    if (!categoryList) return;
    
    // 전체 카테고리 링크는 이미 HTML에 있으므로, 나머지만 추가
    const existingCategories = Array.from(categoryList.querySelectorAll('.category-link'))
        .map(link => link.dataset.category);
    
    categories.forEach(category => {
        if (category !== 'all' && !existingCategories.includes(category)) {
            const li = document.createElement('li');
            const link = document.createElement('a');
            link.href = '#';
            link.className = 'category-link';
            link.dataset.category = category;
            link.textContent = category;
            link.addEventListener('click', (e) => {
                e.preventDefault();
                if (typeof filterByCategory === 'function') {
                    filterByCategory(category);
                } else {
                    // 다른 페이지에서 클릭한 경우 index.html로 이동
                    window.location.href = `index.html#blog`;
                }
            });
            li.appendChild(link);
            categoryList.appendChild(li);
        }
    });
}

// Blog 페이지 오른쪽 사이드바 카테고리 로드
function loadBlogCategories() {
    const blogCategoryList = document.getElementById('blogCategoryList');
    if (!blogCategoryList) return;

    // 계층적 카테고리 구조
    const categoryStructure = {
        '웹개발': [],
        'Backend': ['Docker', 'mongodb'],
        'Frontend': ['html', 'css', 'js', 'codeit sprint', 'react', 'next.js','모던 js 딥다이브 스터디'],
        'Algorithm': ['프로그래머스'],
        '취업관련': ['cs'],
        '회고록': [],
        '그외': []
    };

    // 전체 카테고리 추가
    const allLi = document.createElement('li');
    const allLink = document.createElement('a');
    allLink.href = '#';
    allLink.className = 'blog-category-item active';
    allLink.dataset.category = 'all';
    allLink.textContent = '전체';
    allLink.addEventListener('click', (e) => {
        e.preventDefault();
        filterByCategory('all');
        updateBlogCategoryActive('all');
    });
    allLi.appendChild(allLink);
    blogCategoryList.appendChild(allLi);

    // 계층적 카테고리 생성
    Object.keys(categoryStructure).forEach(parentCategory => {
        const subCategories = categoryStructure[parentCategory];
        
        // 부모 카테고리
        const parentLi = document.createElement('li');
        const parentLink = document.createElement('a');
        parentLink.href = '#';
        parentLink.className = 'blog-category-item parent';
        parentLink.dataset.category = parentCategory;
        parentLink.textContent = parentCategory;
        parentLink.addEventListener('click', (e) => {
            e.preventDefault();
            filterByCategory(parentCategory);
            updateBlogCategoryActive(parentCategory);
        });
        parentLi.appendChild(parentLink);
        blogCategoryList.appendChild(parentLi);

        // 자식 카테고리
        subCategories.forEach(subCategory => {
            const childLi = document.createElement('li');
            const childLink = document.createElement('a');
            childLink.href = '#';
            childLink.className = 'blog-category-item child';
            childLink.dataset.category = subCategory;
            childLink.textContent = subCategory;
            childLink.addEventListener('click', (e) => {
                e.preventDefault();
                filterByCategory(subCategory);
                updateBlogCategoryActive(subCategory);
            });
            childLi.appendChild(childLink);
            blogCategoryList.appendChild(childLi);
        });
    });
}

// 포스트 상세 페이지 카테고리 로드
function loadPostDetailCategories() {
    const postDetailCategoryList = document.getElementById('postDetailCategoryList');
    if (!postDetailCategoryList) return;

    // 기존 카테고리 구조 재사용
    const categoryStructure = {
        '웹개발': [],
        'Backend': ['Docker', 'mongodb'],
        'Frontend': ['html', 'css', 'js', 'codeit sprint', 'react', 'next.js','모던 js 딥다이브 스터디'],
        'Algorithm': ['프로그래머스'],
        '취업관련': ['cs'],
        '회고록': [],
        '그외': []
    };

    // 전체 카테고리 추가
    const allLi = document.createElement('li');
    const allLink = document.createElement('a');
    allLink.href = '#blog';
    allLink.className = 'blog-category-item';
    allLink.dataset.category = 'all';
    allLink.textContent = '전체';
    allLink.addEventListener('click', (e) => {
        e.preventDefault();
        navigateToSection('blog');
    });
    allLi.appendChild(allLink);
    postDetailCategoryList.appendChild(allLi);

    // 계층적 카테고리 생성
    Object.keys(categoryStructure).forEach(parentCategory => {
        const subCategories = categoryStructure[parentCategory];
        
        // 부모 카테고리
        const parentLi = document.createElement('li');
        const parentLink = document.createElement('a');
        parentLink.href = '#blog';
        parentLink.className = 'blog-category-item parent';
        parentLink.dataset.category = parentCategory;
        parentLink.textContent = parentCategory;
        parentLink.addEventListener('click', (e) => {
            e.preventDefault();
            navigateToSection('blog');
            setTimeout(() => {
                filterByCategory(parentCategory);
                updateBlogCategoryActive(parentCategory);
            }, 100);
        });
        parentLi.appendChild(parentLink);
        postDetailCategoryList.appendChild(parentLi);

        // 자식 카테고리
        subCategories.forEach(subCategory => {
            const childLi = document.createElement('li');
            const childLink = document.createElement('a');
            childLink.href = '#blog';
            childLink.className = 'blog-category-item child';
            childLink.dataset.category = subCategory;
            childLink.textContent = subCategory;
            childLink.addEventListener('click', (e) => {
                e.preventDefault();
                navigateToSection('blog');
                setTimeout(() => {
                    filterByCategory(subCategory);
                    updateBlogCategoryActive(subCategory);
                }, 100);
            });
            childLi.appendChild(childLink);
            postDetailCategoryList.appendChild(childLi);
        });
    });
}

// Blog 카테고리 활성 상태 업데이트
function updateBlogCategoryActive(activeCategory) {
    const blogCategoryList = document.getElementById('blogCategoryList');
    if (!blogCategoryList) return;

    blogCategoryList.querySelectorAll('.blog-category-item').forEach(item => {
        item.classList.remove('active');
        if (item.dataset.category === activeCategory) {
            item.classList.add('active');
        }
    });
}

// 카테고리별 필터링 (전역 함수로 노출)
function filterByCategory(category) {
    currentCategory = category;
    
    // 카테고리 링크 활성화 상태 업데이트 (왼쪽 사이드바)
    if (categoryList) {
        categoryList.querySelectorAll('.category-link').forEach(link => {
            link.classList.remove('active');
            if (link.dataset.category === category) {
                link.classList.add('active');
            }
        });
    }
    
    // Blog 오른쪽 사이드바 카테고리 활성화 상태 업데이트
    updateBlogCategoryActive(category);
    
    // 필터링된 포스트 표시
    let filteredPosts = category === 'all' 
        ? blogPosts 
        : blogPosts.filter(post => {
            // 부모 카테고리와 자식 카테고리 모두 매칭
            const categoryStructure = {
                'Backend': ['Docker', 'mongodb'],
                'Frontend': ['html', 'css', 'js', 'codeit sprint', 'react'],
                'Algorithm': ['프로그래머스'],
                '취업관련': [],
                '회고록': [],
                '그외': []
            };
            
            // 정확히 일치하는 경우
            if (post.category === category) return true;
            
            // 부모 카테고리에 속한 자식 카테고리인지 확인
            for (const [parent, children] of Object.entries(categoryStructure)) {
                if (category === parent && children.includes(post.category)) {
                    return true;
                }
                if (children.includes(category) && post.category === category) {
                    return true;
                }
            }
            
            return false;
        });
    
    // 카테고리 변경 시 첫 페이지로 리셋
    currentPage = 1;
    
    // 날짜순으로 정렬 (최신순) - 필터링 후에도 정렬 유지
    filteredPosts = [...filteredPosts].sort((a, b) => new Date(b.date) - new Date(a.date));
    
    // 페이징 적용하여 표시
    if (allArticlesGrid) {
        const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
        const startIndex = 0;
        const endIndex = postsPerPage;
        const postsToShow = filteredPosts.slice(startIndex, endIndex);
        
        allArticlesGrid.innerHTML = postsToShow.map(post => createArticleCard(post)).join('');
        
        // 카드 클릭 이벤트 추가
        allArticlesGrid.querySelectorAll('.article-card').forEach(card => {
            card.addEventListener('click', (e) => {
                e.preventDefault();
                const postId = parseInt(card.dataset.postId);
                showPostDetail(postId);
            });
        });
        
        // 페이지네이션 UI 생성
        renderPagination(totalPages, 1);
    }
    
    // 사이드바 닫기 (왼쪽 사이드바가 열려있다면)
    closeSidebar();
    
    // blog 섹션으로 이동
    navigateToSection('blog');
}

// 전역으로 노출
window.filterByCategory = filterByCategory;

// 네비게이션 초기화
function initNavigation() {
    if (!menuToggle || !navMenu) return;
    
    // 메뉴 토글
    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    // 네비게이션 링크 클릭 이벤트
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            // 외부 링크는 기본 동작 유지
            if (link.getAttribute('href').startsWith('http') || 
                link.getAttribute('href').includes('.html')) {
                return;
            }
            
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            navigateToSection(targetId);
            
            // 모바일 메뉴 닫기
            navMenu.classList.remove('active');
        });
    });

    // 외부 클릭 시 메뉴 닫기
    document.addEventListener('click', (e) => {
        if (navMenu && !navMenu.contains(e.target) && !menuToggle.contains(e.target)) {
            navMenu.classList.remove('active');
        }
    });
}

// 라우팅 초기화
function initRouting() {
    // 해시 변경 감지
    window.addEventListener('hashchange', handleHashChange);
    
    // 초기 해시 처리
    handleHashChange();
}

// 해시 변경 처리
function handleHashChange() {
    const hash = window.location.hash.substring(1) || 'blog';
    
    if (hash.startsWith('post-')) {
        const postId = parseInt(hash.split('-')[1]);
        showPostDetail(postId);
        // 포스트 상세일 때도 사이드바 토글 버튼 숨기기
        if (sidebarToggle) sidebarToggle.style.display = 'none';
    } else if (hash === 'blog') {
        navigateToSection('blog');
    } else if (hash === 'gallery') {
        navigateToSection('gallery');
    }
}

// 섹션으로 이동
function navigateToSection(sectionId) {
    if (!sections || sections.length === 0) return;
    
    // 모든 섹션 숨기기
    sections.forEach(section => {
        section.classList.remove('active');
    });

    // 해당 섹션 표시
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.classList.add('active');
    }

    // 네비게이션 링크 활성화 상태 업데이트
    navLinks.forEach(link => {
        link.classList.remove('active');
        const href = link.getAttribute('href');
        if (href === `#${sectionId}` || href.includes(sectionId)) {
            link.classList.add('active');
        }
    });

    // blog 섹션일 때 사이드바 토글 버튼 숨기기
    if (sidebarToggle) {
        if (sectionId === 'blog') {
            sidebarToggle.style.display = 'none';
        } else {
            sidebarToggle.style.display = 'block';
        }
    }

    // 스크롤 맨 위로
    window.scrollTo(0, 0);
}

// 최근 글 로드
function loadRecentArticles() {
    if (!recentArticlesGrid) return;
    
    // home.html인지 확인 (home.html은 최근 5개만 표시, 다른 곳은 최근 3개만)
    const isHomePage = window.location.pathname.includes('home.html') || 
                      (window.location.pathname === '/' && !window.location.hash);
    const postsToShow = isHomePage ? blogPosts.slice(0, 5) : blogPosts.slice(0, 3);
    
    recentArticlesGrid.innerHTML = postsToShow.map(post => createArticleCard(post, isHomePage)).join('');
    
    // 카드 클릭 이벤트 추가
    recentArticlesGrid.querySelectorAll('.article-card').forEach(card => {
        card.addEventListener('click', (e) => {
            e.preventDefault();
            const postId = parseInt(card.dataset.postId);
            if (window.location.pathname.includes('index.html') || window.location.pathname === '/') {
                showPostDetail(postId);
            } else {
                window.location.href = `index.html#post-${postId}`;
            }
        });
    });
}

// 모든 글 로드 (페이징 포함)
function loadAllArticles(page = 1) {
    if (!allArticlesGrid) return;
    
    currentPage = page;
    
    let filteredPosts = currentCategory === 'all' 
        ? blogPosts 
        : blogPosts.filter(post => post.category === currentCategory);
    
    // 날짜순으로 정렬 (최신순) - 필터링 후에도 정렬 유지
    filteredPosts = [...filteredPosts].sort((a, b) => new Date(b.date) - new Date(a.date));
    
    // 전체 페이지 수 계산
    const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
    
    // 현재 페이지에 표시할 포스트만 추출
    const startIndex = (page - 1) * postsPerPage;
    const endIndex = startIndex + postsPerPage;
    const postsToShow = filteredPosts.slice(startIndex, endIndex);
    
    // 게시물 표시
    allArticlesGrid.innerHTML = postsToShow.map(post => createArticleCard(post)).join('');
    
    // 카드 클릭 이벤트 추가
    allArticlesGrid.querySelectorAll('.article-card').forEach(card => {
        card.addEventListener('click', (e) => {
            e.preventDefault();
            const postId = parseInt(card.dataset.postId);
            showPostDetail(postId);
        });
    });
    
    // 페이지네이션 UI 생성
    renderPagination(totalPages, page);
}

// 페이지네이션 UI 생성
function renderPagination(totalPages, currentPage) {
    if (!pagination) return;
    
    if (totalPages <= 1) {
        pagination.innerHTML = '';
        return;
    }
    
    let paginationHTML = '<div class="pagination-container">';
    
    // 이전 버튼
    if (currentPage > 1) {
        paginationHTML += `<button class="pagination-btn" onclick="goToPage(${currentPage - 1})">이전</button>`;
    }
    
    // 페이지 번호 그룹 계산 (5개씩)
    const pageGroupSize = 5;
    const currentGroup = Math.ceil(currentPage / pageGroupSize);
    const startPage = (currentGroup - 1) * pageGroupSize + 1;
    const endPage = Math.min(startPage + pageGroupSize - 1, totalPages);
    
    // 첫 페이지 그룹이 아니면 첫 페이지로 가는 버튼
    if (currentGroup > 1) {
        paginationHTML += `<button class="pagination-btn" onclick="goToPage(1)">1</button>`;
        if (startPage > 2) {
            paginationHTML += `<span class="pagination-ellipsis">...</span>`;
        }
    }
    
    // 현재 그룹의 페이지 번호들
    for (let i = startPage; i <= endPage; i++) {
        if (i === currentPage) {
            paginationHTML += `<button class="pagination-btn active">${i}</button>`;
        } else {
            paginationHTML += `<button class="pagination-btn" onclick="goToPage(${i})">${i}</button>`;
        }
    }
    
    // 마지막 페이지 그룹이 아니면 마지막 페이지로 가는 버튼
    if (currentGroup < Math.ceil(totalPages / pageGroupSize)) {
        if (endPage < totalPages - 1) {
            paginationHTML += `<span class="pagination-ellipsis">...</span>`;
        }
        paginationHTML += `<button class="pagination-btn" onclick="goToPage(${totalPages})">${totalPages}</button>`;
    }
    
    // 다음 버튼
    if (currentPage < totalPages) {
        paginationHTML += `<button class="pagination-btn" onclick="goToPage(${currentPage + 1})">다음</button>`;
    }
    
    paginationHTML += '</div>';
    pagination.innerHTML = paginationHTML;
}

// 페이지 이동 함수
function goToPage(page) {
    loadAllArticles(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// 전역으로 노출
window.goToPage = goToPage;

// 커스텀 커서 애니메이션
function initCustomCursor() {
    const cursor = document.getElementById('customCursor');
    if (!cursor) return;
    
    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;
    let isAnimating = false;
    
    // 마우스 위치 추적
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        
        if (!isAnimating) {
            isAnimating = true;
            animateCursor();
        }
    });
    
    // 부드러운 애니메이션을 위한 requestAnimationFrame
    function animateCursor() {
        // 부드러운 따라가기 효과 (easing)
        const dx = mouseX - cursorX;
        const dy = mouseY - cursorY;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance > 0.5) {
            cursorX += dx * 0.15;
            cursorY += dy * 0.15;
            
            cursor.style.left = cursorX + 'px';
            cursor.style.top = cursorY + 'px';
            
            requestAnimationFrame(animateCursor);
        } else {
            isAnimating = false;
        }
    }
    
    // 호버 가능한 요소에 대한 이벤트 (이벤트 위임 사용)
    document.addEventListener('mouseenter', (e) => {
        const target = e.target;
        if (target.matches('a, button, .article-card, .nav-link, .blog-category-item, .pagination-btn, .more-posts-link')) {
            cursor.classList.add('hover');
        }
    }, true);
    
    document.addEventListener('mouseleave', (e) => {
        const target = e.target;
        if (target.matches('a, button, .article-card, .nav-link, .blog-category-item, .pagination-btn, .more-posts-link')) {
            cursor.classList.remove('hover');
        }
    }, true);
    
    document.addEventListener('mousedown', () => {
        cursor.classList.add('click');
    });
    
    document.addEventListener('mouseup', () => {
        cursor.classList.remove('click');
    });
    
    // 마우스가 화면 밖으로 나갔을 때
    document.addEventListener('mouseleave', () => {
        cursor.style.opacity = '0';
    });
    
    document.addEventListener('mouseenter', () => {
        cursor.style.opacity = '1';
    });
}


// 글 카드 생성
function createArticleCard(post, isListStyle = false) {
    const formattedDate = formatDate(post.date);
    const tagsHtml = (post.tags || []).map(tag => `<span class="tag">${tag}</span>`).join('');
    // 썸네일 HTML 생성
    console.log('createArticleCard 호출:', { title: post.title, thumbnail: post.thumbnail, id: post.id, thumbnailType: typeof post.thumbnail });
    
    // 썸네일이 있는지 확인 (null, undefined, 빈 문자열 체크)
    const hasThumbnail = post.thumbnail && post.thumbnail.trim() !== '';
    
    const thumbnailHtml = hasThumbnail
        ? `<div class="article-thumbnail"><img src="${post.thumbnail}" alt="${post.title || '썸네일'}" loading="lazy" onerror="console.error('썸네일 로딩 실패:', '${post.thumbnail}', '현재 src:', this.src); this.parentElement.innerHTML='<div style=\\'padding: 1rem; text-align: center; color: var(--text-secondary);\\'>이미지 로드 실패</div>';" onload="console.log('썸네일 로드 성공:', '${post.thumbnail}');"></div>`
        : '<div class="article-thumbnail" style="background: var(--bg-light); display: flex; align-items: center; justify-content: center; color: var(--text-secondary);">썸네일 없음</div>';
    
    if (isListStyle) {
        // 리스트 스타일 (home.html용)
        return `
            <div class="article-card" data-post-id="${post.id}">
                ${thumbnailHtml}
                <div class="article-content">
                    <h3>${post.title}</h3>
                    <div class="article-meta">
                        <span class="article-date">${formattedDate}</span>
                        ${post.category ? `<span class="article-category">${post.category}</span>` : ''}
                    </div>
                    <p class="article-excerpt">${post.excerpt || ''}</p>
                    ${tagsHtml ? `<div class="article-tags">${tagsHtml}</div>` : ''}
                </div>
            </div>
        `;
    } else {
        // 카드 스타일 (기본)
        return `
            <div class="article-card" data-post-id="${post.id}">
                ${thumbnailHtml}
                <div class="article-content">
                    <h3>${post.title}</h3>
                    <div class="article-meta">
                        <span class="article-date">📅 ${formattedDate}</span>
                        ${post.category ? `<span class="article-category">📁 ${post.category}</span>` : ''}
                    </div>
                    <div class="article-tags">${tagsHtml}</div>
                    <p class="article-excerpt">${post.excerpt || ''}</p>
                </div>
            </div>
        `;
    }
}

// 글 상세 보기
function showPostDetail(postId) {
    const post = blogPosts.find(p => p.id === postId);
    if (!post) {
        navigateToSection('blog');
        return;
    }

    // 모든 섹션 숨기기
    if (sections) {
        sections.forEach(section => {
            section.classList.remove('active');
        });
    }

    // 포스트 상세 섹션 표시
    const postDetailSection = document.getElementById('post-detail');
    if (postDetailSection) {
        postDetailSection.classList.add('active');
    } else {
        // post-detail 섹션이 없으면 index.html로 이동
        window.location.href = `index.html#post-${postId}`;
        return;
    }

    // 포스트 내용 렌더링
    const postDetailContent = document.getElementById('post-detail-content');
    if (postDetailContent) {
        const formattedDate = formatDate(post.date);
        const tagsHtml = (post.tags || []).map(tag => `<span class="tag">${tag}</span>`).join('');
        
        postDetailContent.innerHTML = `
            <h1>${post.title}</h1>
            <div class="post-meta">
                <span>📅 ${formattedDate}</span>
                ${post.category ? `<span>📁 ${post.category}</span>` : ''}
                <div class="article-tags">${tagsHtml}</div>
            </div>
            <div class="post-content">
                ${post.content}
            </div>
        `;
    }

    // 네비게이션 링크 업데이트
    navLinks.forEach(link => {
        link.classList.remove('active');
    });

    // URL 해시 업데이트
    window.history.pushState(null, null, `#post-${postId}`);

    // 포스트 상세일 때도 사이드바 토글 버튼 숨기기
    if (sidebarToggle) sidebarToggle.style.display = 'none';

    // 스크롤 맨 위로
    window.scrollTo(0, 0);
}

// 날짜 포맷팅
function formatDate(dateString) {
    if (!dateString) return '';
    const date = new Date(dateString);
    if (isNaN(date.getTime())) return dateString;
    
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 
                    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const month = months[date.getMonth()];
    const day = date.getDate();
    const year = date.getFullYear();
    return `${month} ${day}, ${year}`;
}

// 타이핑 애니메이션
function typeWriter(element, text, speed = 100, onComplete = null) {
    if (!element) return;
    
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML = text.substring(0, i + 1) + '<span class="typing-cursor">|</span>';
            i++;
            setTimeout(type, speed);
        } else {
            // 타이핑 완료 후 커서 제거
            element.textContent = text;
            if (onComplete) {
                onComplete();
            }
        }
    }
    
    type();
}

// home.html에서 타이핑 애니메이션 초기화 (5초마다 반복)
if (window.location.pathname.includes('home.html') || 
    (window.location.pathname === '/' && !window.location.hash)) {
    document.addEventListener('DOMContentLoaded', () => {
        const typingElement = document.getElementById('typing-text');
        if (typingElement) {
            const text = '기록하고 성장하는 개발자, 최유현 입니다.';
            
            // 첫 실행
            typeWriter(typingElement, text, 100, () => {
                // 타이핑 완료 후 5초 대기 후 다시 시작
                setTimeout(() => {
                    // 5초마다 반복 실행
                    const repeatTyping = () => {
                        typeWriter(typingElement, text, 100, () => {
                            setTimeout(repeatTyping, 5000);
                        });
                    };
                    repeatTyping();
                }, 5000);
            });
        }
    });
}

// 코드 하이라이팅 함수 (간단한 버전)
function highlightCode(code, language) {
    if (!language) return escapeHtml(code);
    
    // 기본 HTML 이스케이프
    code = escapeHtml(code);
    
    // 언어별 키워드 하이라이팅
    const keywords = {
        'javascript': ['function', 'const', 'let', 'var', 'if', 'else', 'for', 'while', 'return', 'async', 'await', 'class', 'extends', 'import', 'export', 'default', 'try', 'catch', 'finally', 'throw', 'new', 'this', 'super', 'typeof', 'instanceof'],
        'js': ['function', 'const', 'let', 'var', 'if', 'else', 'for', 'while', 'return', 'async', 'await', 'class', 'extends', 'import', 'export', 'default', 'try', 'catch', 'finally', 'throw', 'new', 'this', 'super', 'typeof', 'instanceof'],
        'css': ['@media', '@keyframes', '@import', 'display', 'position', 'flex', 'grid', 'margin', 'padding', 'width', 'height', 'color', 'background', 'border', 'transform', 'transition', 'animation'],
        'html': ['<!DOCTYPE', '<html', '<head', '<body', '<div', '<span', '<p', '<a', '<img', '<script', '<style', '<meta', '<title'],
        'python': ['def', 'class', 'if', 'else', 'elif', 'for', 'while', 'import', 'from', 'return', 'try', 'except', 'finally', 'with', 'as', 'pass', 'break', 'continue'],
        'java': ['public', 'private', 'protected', 'class', 'interface', 'extends', 'implements', 'static', 'final', 'void', 'int', 'String', 'if', 'else', 'for', 'while', 'return', 'try', 'catch', 'finally'],
        'bash': ['if', 'then', 'else', 'fi', 'for', 'while', 'do', 'done', 'echo', 'export', 'cd', 'ls', 'grep', 'awk', 'sed']
    };
    
    const langKeywords = keywords[language.toLowerCase()] || [];
    
    if (langKeywords.length > 0) {
        // 키워드 하이라이팅
        langKeywords.forEach(keyword => {
            const regex = new RegExp(`\\b(${keyword})\\b`, 'g');
            code = code.replace(regex, '<span class="code-keyword">$1</span>');
        });
        
        // 문자열 하이라이팅 (따옴표 안의 내용)
        code = code.replace(/(['"])((?:\\.|(?!\1)[^\\])*?)\1/g, '<span class="code-string">$1$2$1</span>');
        
        // 숫자 하이라이팅
        code = code.replace(/\b(\d+\.?\d*)\b/g, '<span class="code-number">$1</span>');
        
        // 주석 하이라이팅
        if (language === 'javascript' || language === 'js') {
            code = code.replace(/\/\/(.*?)$/gm, '<span class="code-comment">//$1</span>');
            code = code.replace(/\/\*([\s\S]*?)\*\//g, '<span class="code-comment">/*$1*/</span>');
        } else if (language === 'css') {
            code = code.replace(/\/\*([\s\S]*?)\*\//g, '<span class="code-comment">/*$1*/</span>');
        } else if (language === 'html') {
            code = code.replace(/<!--([\s\S]*?)-->/g, '<span class="code-comment"><!--$1--></span>');
        } else if (language === 'python') {
            code = code.replace(/#(.*?)$/gm, '<span class="code-comment">#$1</span>');
        }
    }
    
    return code;
}

// HTML 이스케이프 함수
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}
