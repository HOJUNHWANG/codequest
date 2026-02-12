# CodeQuest v4.0 - 문제 추가 가이드 📝

## 📚 파일 구조

```
codequest/
├── index.html              # 메인 UI (수정 불필요)
├── problems.js             # 문제 데이터베이스 (여기에 추가!)
├── PROBLEM_TEMPLATE.js     # 문제 템플릿
├── add_problem.py          # 대화형 문제 생성 도구
└── README.md              # 이 파일
```

## 🚀 문제 추가 3가지 방법

### 방법 1: 직접 편집 (추천! 🌟)

**가장 빠르고 확실한 방법**

1. **problems.js** 파일 열기
2. 원하는 언어/카테고리 찾기
3. **PROBLEM_TEMPLATE.js** 에서 템플릿 복사
4. 내용 수정 후 배열에 추가

**예시:**
```javascript
// problems.js 파일에서

const PROBLEMS = {
    python: {
        basics: [
            // 기존 문제들...
            
            // ⬇️ 여기에 새 문제 추가!
            {
                id: 3,
                title: 'Calculate Factorial',
                difficulty: 'easy',
                description: 'Write a function that calculates factorial of n.',
                hints: {
                    h1: 'Use recursion or loop to multiply numbers',
                    h2: 'def factorial(n):\n    if n <= 1:\n        return 1\n    return n * factorial(n-1)'
                },
                tests: [
                    { desc: 'Has function definition', check: (c) => c.includes('def') },
                    { desc: 'Has return statement', check: (c) => c.includes('return') },
                    { desc: 'Uses multiplication', check: (c) => c.includes('*') }
                ]
            }
        ]
    }
}
```

---

### 방법 2: 대화형 도구 사용

**Python 도구로 자동 생성**

```bash
# 도구 실행
python3 add_problem.py

# 대화형으로 입력:
# 1. 언어 선택 (1-6)
# 2. 카테고리 선택 (1-23)
# 3. 문제 번호, 제목, 난이도
# 4. 설명, 힌트 입력
# 5. 테스트 케이스 입력

# → JavaScript 코드 자동 생성!
# → 복사해서 problems.js에 붙여넣기
```

---

### 방법 3: 템플릿 사용

**PROBLEM_TEMPLATE.js 활용**

1. **PROBLEM_TEMPLATE.js** 파일 열기
2. 기본 템플릿 복사
3. 내용 수정
4. **problems.js**의 해당 위치에 붙여넣기

---

## 📋 문제 작성 가이드

### 필수 필드

```javascript
{
    id: 번호,                    // 고유 번호 (카테고리 내에서)
    title: '문제 제목',           // 짧고 명확하게
    difficulty: '난이도',         // beginner, easy, medium, hard
    description: '문제 설명',     // 자세하게
    hints: {
        h1: '가벼운 힌트',        // 접근 방법
        h2: '구체적 코드'         // 실제 구현 예시 (\n으로 줄바꿈)
    },
    tests: [                     // 최소 1개 이상
        { 
            desc: '테스트 설명',
            check: (code) => 검사함수
        }
    ]
}
```

### 난이도 가이드

| 난이도 | 점수 | 설명 | 예시 |
|--------|------|------|------|
| `beginner` | 5점 | 기초 문법, Hello World | Print, Variables |
| `easy` | 10점 | 간단한 로직 | 반복문, 조건문 |
| `medium` | 20점 | 알고리즘 기초 | 정렬, 검색 |
| `hard` | 50점 | 고급 알고리즘 | DP, Graph |

### 테스트 작성 팁

```javascript
// ✅ Good: 구체적이고 명확한 테스트
tests: [
    { desc: 'Uses print function', check: (c) => c.includes('print') },
    { desc: 'Contains loop (for or while)', check: (c) => /for|while/.test(c) },
    { desc: 'Has return statement', check: (c) => c.includes('return') }
]

// ❌ Bad: 너무 엄격하거나 애매한 테스트
tests: [
    { desc: 'Code must be exactly 3 lines', check: (c) => c.split('\n').length === 3 }
]
```

### 힌트 작성 팁

```javascript
// ✅ Good: 단계적 힌트
hints: {
    h1: 'Use modulo operator (%) to check divisibility',  // 접근 방법
    h2: 'def is_even(n):\n    return n % 2 == 0'         // 구체적 코드
}

// ❌ Bad: 힌트1이 너무 구체적
hints: {
    h1: 'return n % 2 == 0',  // 이건 힌트2에 들어가야 함
    h2: '...'
}
```

---

## 🎯 언어별 특징

### Python 🐍
```javascript
// 들여쓰기 중요, 간결한 문법
hints: {
    h2: 'def func():\n    return result'  // \n 사용
}
tests: [
    { desc: 'Uses def', check: (c) => c.includes('def') }
]
```

### Java ☕
```javascript
// 세미콜론, 타입 명시
hints: {
    h2: 'public static int add(int a, int b) {\n  return a + b;\n}'
}
tests: [
    { desc: 'Has public method', check: (c) => c.includes('public') },
    { desc: 'Uses semicolons', check: (c) => c.includes(';') }
]
```

### ABAP 🔶
```javascript
// 대문자 키워드, SAP 중심
hints: {
    h2: "DATA: lv_result TYPE i.\nlv_result = 5 + 3."
}
tests: [
    // 대소문자 무시!
    { desc: 'Uses DATA', check: (c) => c.toUpperCase().includes('DATA') },
    { desc: 'Uses TYPE', check: (c) => c.toUpperCase().includes('TYPE') }
]
```

---

## 🔍 테스트 검사 함수 예제

### 기본 패턴
```javascript
// 키워드 포함
check: (c) => c.includes('print')

// 대소문자 무시
check: (c) => c.toLowerCase().includes('hello')

// 정규식
check: (c) => /def\s+\w+/.test(c)

// AND 조건
check: (c) => c.includes('for') && c.includes('range')

// OR 조건
check: (c) => c.includes('for') || c.includes('while')

// 부정 (포함하지 않아야 함)
check: (c) => !c.includes('temp')

// 특정 횟수 이상
check: (c) => (c.match(/return/g) || []).length >= 2
```

---

## 📊 카테고리별 문제 개수 목표

| Step | 카테고리 | 목표 | 현재 |
|------|----------|------|------|
| 1 | First Steps | 30 | 2 |
| 2 | Variables & Types | 30 | 0 |
| 3 | Operators | 30 | 0 |
| ... | ... | ... | ... |
| 23 | Big Tech Interviews | 50 | 1 |

**전체: 670 문제 목표**

---

## 🎨 문제 아이디어

### Basics (Step 1-6)
- Hello World
- 변수 선언/할당
- 사칙연산
- 조건문 (if/else)
- 반복문 (for/while)
- 함수 정의/호출

### Arrays (Step 7)
- 배열 생성
- 원소 접근/수정
- 배열 순회
- map/filter/reduce
- 정렬

### Strings (Step 8)
- 문자열 연결
- 대소문자 변환
- 문자열 분리/결합
- 정규식
- 포맷팅

### OOP (Step 9)
- 클래스 정의
- 생성자
- 메서드
- 상속
- 다형성

### Real-World (Step 18)
- REST API 호출
- JSON 파싱
- 파일 읽기/쓰기
- 데이터 처리

### Interview (Step 23)
- Two Sum
- Reverse String
- Binary Search
- Merge Sort
- Dynamic Programming

---

## ✅ 체크리스트

새 문제 추가 전 확인:

- [ ] ID 중복 없음
- [ ] 제목이 명확함
- [ ] 설명이 자세함
- [ ] 힌트 2단계 작성
- [ ] 테스트 최소 2개 이상
- [ ] 난이도 적절함
- [ ] 코드에 문법 오류 없음
- [ ] \n으로 줄바꿈 처리

---

## 🚀 배포

```bash
# 문제 추가 후
git add problems.js
git commit -m "Add new problems: [category name]"
git push origin main

# GitHub Pages에 자동 반영 (2-3분)
```

---

## 💡 팁

1. **한 번에 여러 문제**: 같은 카테고리 문제들을 한꺼번에 추가
2. **난이도 순서**: 쉬운 것부터 어려운 순서로
3. **실용성**: 실제로 자주 쓰이는 패턴 위주
4. **언어 특성**: 각 언어의 강점을 살린 문제

---

**Happy Problem Creating! 🎉**
