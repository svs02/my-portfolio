# GitHub Pages 배포 가이드

## 1단계: GitHub 저장소 생성

1. GitHub에 로그인하고 새 저장소 생성
   - 저장소 이름: `my-portfolio` (또는 원하는 이름)
   - Public으로 설정
   - README, .gitignore, license는 추가하지 않음

## 2단계: package.json 수정

`package.json`의 `homepage` 필드를 실제 GitHub 사용자명으로 변경하세요:

```json
"homepage": "https://YOUR_USERNAME.github.io/my-portfolio"
```

예시: `"homepage": "https://taehyeok-lee.github.io/my-portfolio"`

## 3단계: Git 저장소 초기화 및 GitHub 연결

터미널에서 다음 명령어를 실행하세요:

```bash
# Git 저장소 초기화
git init

# 모든 파일 추가
git add .

# 첫 커밋
git commit -m "Initial commit"

# GitHub 저장소 연결 (YOUR_USERNAME과 저장소명을 실제 값으로 변경)
git remote add origin https://github.com/YOUR_USERNAME/my-portfolio.git

# 브랜치 이름을 main으로 설정
git branch -M main

# GitHub에 푸시
git push -u origin main
```

## 4단계: GitHub Pages 배포

터미널에서 다음 명령어를 실행하세요:

```bash
npm run deploy
```

이 명령어는:

1. 프로젝트를 빌드합니다 (`npm run build`)
2. `gh-pages` 브랜치에 배포합니다
3. GitHub Pages가 자동으로 활성화됩니다

## 5단계: GitHub Pages 설정 확인

1. GitHub 저장소 페이지로 이동
2. Settings → Pages 메뉴 클릭
3. Source가 "Deploy from a branch"로 설정되어 있고
4. Branch가 "gh-pages" / "(root)"로 설정되어 있는지 확인

## 배포 완료!

몇 분 후 다음 URL에서 사이트를 확인할 수 있습니다:
`https://YOUR_USERNAME.github.io/my-portfolio`

## 이후 업데이트 배포

코드를 수정한 후 다시 배포하려면:

```bash
git add .
git commit -m "Update portfolio"
git push
npm run deploy
```

## 문제 해결

- 404 오류가 발생하면: `package.json`의 `homepage` 필드가 올바른지 확인
- 빌드 오류가 발생하면: `npm run build`를 먼저 실행해서 오류 확인
- 배포가 안 되면: GitHub 저장소의 Settings → Pages에서 gh-pages 브랜치가 선택되어 있는지 확인
