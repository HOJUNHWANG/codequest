# 🚀 CodeQuest GitHub Pages 배포 가이드

## 빠른 시작 (5분 안에 완료!)

### 1단계: GitHub 계정 준비
- GitHub.com에 로그인
- 새 저장소(Repository) 생성

### 2단계: 저장소 생성
1. 우측 상단 `+` 버튼 → `New repository` 클릭
2. Repository name: `codequest` (또는 원하는 이름)
3. Public 선택
4. `Create repository` 클릭

### 3단계: 파일 업로드
두 가지 방법 중 선택:

#### 방법 A: 웹에서 직접 업로드 (가장 쉬움!)
1. 저장소 페이지에서 `Add file` → `Upload files` 클릭
2. `index.html`, `README.md`, `LICENSE` 파일을 드래그 앤 드롭
3. 하단에 `Commit changes` 클릭

#### 방법 B: Git 명령어 사용
```bash
# 저장소 클론
git clone https://github.com/your-username/codequest.git
cd codequest

# 파일 복사 (다운로드한 파일들을 이 폴더에 복사)
# index.html, README.md, LICENSE

# Git에 추가 및 커밋
git add .
git commit -m "Initial commit: CodeQuest learning platform"
git push origin main
```

### 4단계: GitHub Pages 활성화
1. 저장소 페이지에서 `Settings` 탭 클릭
2. 왼쪽 메뉴에서 `Pages` 클릭
3. **Source** 섹션:
   - Branch: `main` 선택
   - Folder: `/ (root)` 선택
4. `Save` 버튼 클릭

### 5단계: 완료! 🎉
- 2-3분 후 `https://your-username.github.io/codequest` 에서 접속 가능
- 페이지 상단에 초록색 체크 표시와 함께 URL이 표시됨

---

## 📱 친구들과 공유하기

현재는 로컬 저장소를 사용하므로:
- 각 사용자가 자신의 브라우저에서 독립적으로 진행 상황 관리
- URL만 공유하면 누구나 사용 가능
- 각자의 컴퓨터에서 진행 상황이 저장됨

---

## 🔧 커스터마이징

### 제목 변경
`index.html` 파일에서:
```html
<title>CodeQuest - Learn to Code Step by Step</title>
```
를 원하는 제목으로 변경

### 로고 변경
```html
<div class="logo">
    <span>✨</span>
    CodeQuest
</div>
```
에서 이모지와 텍스트 변경 가능

### 색상 테마 변경
CSS의 `:root` 섹션에서 색상 변수 수정:
```css
:root {
    --accent-primary: #8b5cf6;  /* 메인 색상 */
    --accent-secondary: #ec4899; /* 보조 색상 */
    /* ... */
}
```

---

## 🚀 다음 단계: 멀티 유저 지원

### Firebase 사용 (무료)
1. Firebase 프로젝트 생성
2. Firestore Database 활성화
3. Authentication 설정
4. 코드에 Firebase SDK 추가

### Supabase 사용 (무료)
1. Supabase 프로젝트 생성
2. 데이터베이스 테이블 생성
3. API 키 연결

자세한 가이드가 필요하면 말씀해주세요!

---

## ❓ 문제 해결

### 페이지가 안 보여요
- 2-3분 기다려보기 (GitHub Pages 빌드 시간)
- URL을 정확히 입력했는지 확인
- Settings > Pages에서 초록색 체크가 있는지 확인

### 수정사항이 반영이 안 돼요
- 파일을 수정한 후 다시 커밋 & 푸시
- 브라우저 캐시 삭제 (Ctrl + Shift + R)
- 1-2분 후 다시 확인

### 진행 상황이 사라졌어요
- 브라우저의 쿠키/캐시를 삭제하면 진행 상황도 삭제됨
- 다른 브라우저에서는 진행 상황이 공유되지 않음
- 같은 컴퓨터, 같은 브라우저에서만 유지됨

---

## 📧 지원

문제가 있거나 기능 추가를 원하시면:
1. GitHub Issues에 등록
2. Pull Request 환영!

**Happy Coding! 🎉**
