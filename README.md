# CodeQuest v4.0 - Professional Edition 🚀

> 기초부터 실무까지, 체계적인 코딩 학습 플랫폼

## ✨ 새로운 기능

### 🎯 v4.0 Major Updates
- **670+ 문제 구조**: 기초부터 Big Tech 인터뷰까지
- **23개 단계**: 체계적인 학습 경로
- **언어 전환 버튼**: 학습 중 언어 쉽게 변경 🔄
- **테스트 케이스 미리보기**: 문제당 테스트 조건 확인 📋
- **스텝 잠금(순차 진행)**: 이전 스텝/문제 완료 전 다음으로 이동 불가 🔒
- **힌트 토글**: 켰다 끌 수 있는 2단계 힌트 💡
- **ABAP 실무 특화**: SAP 모듈별 실전 예제 🔶
- **모듈화**: problems.js 분리로 문제 관리 용이

## 📁 파일 구조

```
codequest/
├── index.html              # 메인 UI
├── problems.js             # 문제 데이터베이스 ⭐
├── PROBLEM_TEMPLATE.js     # 문제 템플릿
├── add_problem.py          # 문제 생성 도구
├── HOW_TO_ADD_PROBLEMS.md  # 문제 추가 가이드 📝
└── README.md              # 이 파일
```

## 📝 문제 추가 방법

### ⚡ 빠른 시작

1. **problems.js** 열기
2. **PROBLEM_TEMPLATE.js** 에서 템플릿 복사
3. 내용 수정 후 추가
4. Git push!

### 📖 자세한 가이드

**HOW_TO_ADD_PROBLEMS.md** 파일 참고
- 3가지 추가 방법
- 언어별 예제
- 테스트 작성 팁
- 체크리스트

### 🛠️ 도구 사용

```bash
python3 add_problem.py
# 대화형으로 문제 생성!
```

## 📚 학습 경로 (23 Steps, 670 Problems)

### 🌱 Foundation (180 problems)
1. **First Steps** (30) - Hello World부터 시작
2. **Variables & Types** (30) - 데이터 타입 마스터
3. **Operators** (30) - 연산자 완전 정복
4. **Conditionals** (30) - 조건문 활용
5. **Loops** (30) - 반복문 패턴
6. **Functions** (30) - 함수 설계

### 📖 Intermediate (180 problems)
7. **Arrays & Lists** (30) - 배열 조작
8. **Strings** (30) - 문자열 처리
9. **OOP Basics** (30) - 객체지향 입문
10. **Collections** (30) - 자료구조 활용
11. **Error Handling** (30) - 예외 처리
12. **File I/O** (30) - 파일 작업

### 🔥 Advanced (150 problems)
13. **Data Structures** (30) - Stack, Queue, Tree
14. **Algorithms** (30) - 정렬, 검색, DP
15. **Recursion** (30) - 재귀 사고
16. **Async/Concurrency** (30) - 비동기 프로그래밍
17. **Testing** (30) - 단위 테스트

### 💼 Professional (110 problems)
18. **Real-World Projects** (30) - 실무 프로젝트
19. **Database Operations** (30) - DB 연동
20. **API Development** (20) - REST API
21. **Security** (15) - 보안 best practices
22. **Performance** (15) - 최적화 기법

### 🚀 Interview Prep (50 problems)
23. **Big Tech Interviews** (50) - FAANG 레벨

## 🔶 ABAP 특화 학습

### SAP 실무 모듈별 예제
- **Internal Tables**: APPEND, LOOP, READ, MODIFY, DELETE
- **Database**: SELECT, FOR ALL ENTRIES, JOINS
- **Function Modules**: RFC, BAPI 호출
- **ALV Reports**: REUSE_ALV, CL_SALV_TABLE
- **Selection Screens**: PARAMETERS, SELECT-OPTIONS
- **DDIC**: 테이블, 구조체, 도메인
- **CDS Views**: Core Data Services
- **OData Services**: Gateway 개발
- **Performance**: 최적화 기법

## 🎮 사용 방법

### 1. 언어 선택
6개 언어 중 선택: Java, Python, TypeScript, Go, Rust, ABAP

### 2. 학습 진행
1. 카테고리 선택 (Step 1부터 시작 권장)
2. 문제 읽기
3. **📋 Show Test Cases** 클릭 → 통과 조건 확인
4. **💡 Hint 1** → 가벼운 힌트
5. **💡💡 Hint 2** → 구체적인 해결 방법
6. 코드 작성 (자동 저장)
7. **▶ Run Tests** → 모든 테스트 통과 확인
8. **✓ Submit** → 다음 문제로

### 3. 언어 전환
- 헤더의 **Change Language** 버튼
- 진행 상황은 언어별로 독립 저장


### 🔒 순차 진행 잠금 규칙
- **카테고리 잠금**: Step N은 Step N-1까지의 모든 문제를 완료해야 열립니다.
- **문제 잠금**: 같은 카테고리에서 현재 문제를 제출(정답 처리)하기 전에는 `Next`로 이동할 수 없습니다.
- **빈 카테고리 처리**: 아직 문제가 없는 카테고리는 잠금 계산에서 자동 완료로 간주됩니다.

## 📊 진행 상황 추적

### 정확한 통계
- **Streak** 🔥: 연속 문제 해결
- **Solved** ✓: 총 해결한 문제 수
- **Points** ⭐: 난이도별 점수
  - Beginner: 5점
  - Easy: 10점
  - Medium: 20점
  - Hard: 50점

### 카테고리별 진행
- 각 카테고리: 완료/전체 (예: 5/30)
- Overall Progress: 전체 완료율

## 🛠️ 기술 스택

- **Frontend**: Vanilla JavaScript
- **Storage**: LocalStorage
- **Fonts**: Inter (UI), JetBrains Mono (Code)
- **No Dependencies**: 완전 독립 실행

## 📦 파일 구조

```
codequest/
├── index.html          # 메인 UI
├── problems.js         # 670+ 문제 데이터베이스
└── README.md          # 이 파일
```

## 🚀 GitHub Pages 배포

### 필수 파일 (둘 다 업로드!)
```bash
git add index.html problems.js
git commit -m "v4.0: Professional Edition"
git push origin main
```

### 선택 파일 (문제 추가용)
```bash
git add PROBLEM_TEMPLATE.js add_problem.py HOW_TO_ADD_PROBLEMS.md
git commit -m "Add problem creation tools"
git push origin main
```

### ⚠️ 중요!
- **index.html**과 **problems.js** 둘 다 필수
- problems.js 없으면 작동 안 함
- 2-3분 후 페이지 반영

## 🆕 v4.0 변경사항

### ✅ 추가된 기능
- 🔄 **언어 전환 버튼**: 학습 중 언어 변경
- 📋 **테스트 케이스 미리보기**: Show Test Cases 버튼
- 📚 **23단계 확장**: 670+ 문제
- 🔶 **ABAP 실무 특화**: SAP 모듈별 예제
- ⬅️➡️ **문제 네비게이션**: Previous/Next 버튼

### 🎯 언어별 특징

**Java**: Enterprise patterns, OOP, Collections
**Python**: Data science, AI, scripting
**TypeScript**: Web development, type safety
**Go**: Cloud native, concurrency
**Rust**: Systems programming, memory safety
**ABAP**: SAP development, business logic

## 🧩 문제 수를 빠르게 채우는 방법 (제안)

현재 일부 카테고리의 문제 수가 적기 때문에, 아래 방식으로 **일관성 있게 대량 확장**하는 것을 추천합니다.

1. **카테고리별 미니 템플릿 라이브러리 구성**
   - 예: `variables`는 선언/타입변환/스코프/상수/입출력 조합으로 20~30개 패턴 고정
   - 각 패턴을 언어별 문법만 바꿔 재사용

2. **난이도 곡선 표준화**
   - beginner 40% / easy 35% / medium 20% / hard 5% 비율로 카테고리당 분배
   - 같은 Step 내부 문제는 `개념 1개 → 개념 2개 조합 → 응용` 순서로 배치

3. **반자동 생성 파이프라인 운영**
   - `PROBLEM_TEMPLATE.js` 기반으로 초안 생성
   - 생성된 문제는 테스트 체크리스트(핵심 키워드, 오답 방지 패턴, 힌트 2단계 포함)로 검수 후 반영

4. **언어 간 동기화 규칙**
   - 기준 언어(예: Python)에서 먼저 문제 세트 확정
   - Java/TypeScript/Go/Rust/ABAP으로 이식 시 동일 학습 목표와 테스트 의도를 유지

5. **주간 배치 추가**
   - 매주 Step 2개씩 언어별 10문제 추가(총 120문제/주)
   - 릴리즈마다 README에 추가된 Step/문제 수 업데이트


## 🧱 30문항 자동 확장 정책

요청하신 것처럼 각 카테고리가 **난이도 성장형(초급→중급→고급)** 으로 최소 `total` 개수(대부분 30문항)를 채우도록 자동 확장 로직을 적용했습니다.

- 적용 범위: `java`, `python`, `typescript`, `go`, `rust`, `abap`
- 카테고리별 목표 개수: `CATEGORIES[].total` 기준 (기본 30, 일부 20/15/50)
- 난이도 분포: beginner 40% → easy 35% → medium 20% → hard 5%
- 동작 방식: 기존 수동 문제를 유지한 뒤, 부족한 수량만 자동 생성 문제로 채움
- 우선 적용: `variables`, `operators`, `conditions`는 Core 10단계(개념 성장형) 템플릿을 먼저 반영

> 참고: 자동 생성 문제는 커리큘럼 뼈대를 빠르게 채우기 위한 기본형입니다.
> 실제 서비스 품질을 위해 카테고리별 템플릿/실전 시나리오로 점진적 치환을 권장합니다.

## 📈 로드맵

- [ ] 실제 코드 실행 (백엔드 연동)
- [ ] 사용자 인증
- [ ] 리더보드
- [ ] 코드 리뷰 기능
- [ ] 비디오 튜토리얼
- [ ] 더 많은 문제 추가 (목표 1000+)

## 📄 라이선스

MIT License

---

**Happy Coding! From Basics to Professional! 🎉**
