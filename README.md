# CodeQuest 🚀

[![Live Demo](https://img.shields.io/badge/demo-live-brightgreen)](https://your-username.github.io/codequest)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

> 단계별로 배우는 멀티언어 코딩 학습 플랫폼

## ✨ 특징

- **🌱 기초부터 시작**: 변수 생성부터 알고리즘까지 체계적인 학습 경로
- **🌍 8개 언어 지원**: Python, JavaScript, TypeScript, Java, C++, Go, Rust, ABAP
- **💡 언어별 힌트**: 각 문제마다 선택한 언어에 맞는 힌트 제공
- **📊 진행 상황 추적**: 로컬 저장으로 학습 진도 자동 저장
- **🎨 멀티 에디터**: 한 문제를 여러 언어로 동시에 풀기
- **🎯 다양한 난이도**: 입문자부터 빅테크 인터뷰 수준까지

## 🎮 사용 방법

1. **카테고리 선택**: 왼쪽 사이드바에서 학습하고 싶은 단계 선택
2. **문제 읽기**: 문제 설명과 예제 확인
3. **힌트 보기**: 막힐 때는 💡 힌트 버튼 클릭
4. **코드 작성**: 에디터에서 코드 작성 (자동 저장됨)
5. **언어 추가**: "+ Add Language" 버튼으로 다른 언어 에디터 추가
6. **실행 & 제출**: Run Code로 테스트, Submit으로 정답 제출

## 🚀 GitHub Pages로 호스팅하기

### 1단계: 저장소 생성
```bash
# 새 저장소 생성 또는 기존 저장소 클론
git clone https://github.com/your-username/codequest.git
cd codequest
```

### 2단계: 파일 추가
```bash
# index.html로 이름 변경 (GitHub Pages는 index.html을 찾습니다)
cp codequest_v2.html index.html

# Git에 추가
git add index.html
git commit -m "Initial commit: CodeQuest learning platform"
git push origin main
```

### 3단계: GitHub Pages 활성화
1. GitHub 저장소로 이동
2. Settings > Pages
3. Source: "Deploy from a branch" 선택
4. Branch: "main" 선택, folder: "/ (root)" 선택
5. Save 클릭

몇 분 후 `https://your-username.github.io/codequest`에서 접속 가능! 🎉

## 📂 프로젝트 구조

```
codequest/
├── index.html          # 메인 애플리케이션 (단일 파일)
├── README.md          # 프로젝트 문서
└── LICENSE           # 라이선스
```

## 🎓 학습 경로

1. **First Steps (15문제)** - Hello World부터 시작
2. **Variables & Types (12문제)** - 데이터 타입 이해
3. **Operators (10문제)** - 연산자 활용
4. **Conditions (12문제)** - 조건문 마스터
5. **Loops (15문제)** - 반복문 정복
6. **Functions (12문제)** - 함수 작성
7. **Arrays & Lists (15문제)** - 배열 다루기
8. **Strings (12문제)** - 문자열 처리
9. **Data Structures (20문제)** - 자료구조 학습
10. **Algorithms (25문제)** - 알고리즘 실전
11. **OOP Basics (18문제)** - 객체지향 입문
12. **Real-World Projects (30문제)** - 실무 프로젝트
13. **Big Tech Interviews (50문제)** - 면접 준비

## 💾 데이터 저장

- 모든 진행 상황은 브라우저의 `localStorage`에 저장됩니다
- 각 문제별로 작성한 코드도 자동 저장됩니다
- 브라우저 데이터를 삭제하면 진행 상황이 초기화됩니다

## 🛠️ 기술 스택

- **프론트엔드**: HTML5, CSS3, Vanilla JavaScript
- **폰트**: Quicksand (UI), Fira Code (코드 에디터)
- **저장소**: LocalStorage API
- **호스팅**: GitHub Pages

## 🎨 디자인

- 파스텔 톤의 부드러운 색상 팔레트
- 그라디언트와 애니메이션을 활용한 현대적인 UI
- 반응형 디자인으로 모바일/태블릿 지원

## 🤝 기여하기

문제 추가, 버그 수정, 기능 제안 환영합니다!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 향후 계획

- [ ] 실제 코드 실행 기능 (백엔드 연동)
- [ ] 사용자 인증 시스템
- [ ] 리더보드 및 랭킹
- [ ] 친구와 코드 공유
- [ ] AI 코드 리뷰
- [ ] 더 많은 문제 추가
- [ ] 동영상 강의 통합

## 📄 라이선스

MIT License - 자유롭게 사용, 수정, 배포 가능합니다.

## 👨‍💻 제작자

Made with ❤️ by Hojun Hwang

## 🌟 Star History

이 프로젝트가 도움이 되었다면 ⭐ 스타를 눌러주세요!

---

**Happy Coding! 🎉**
