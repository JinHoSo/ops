# ops

> 운영을 위한 operations

## 위키

<https://github.com/bongso/wiki/wiki/ops>

## 지원

### 창업 관련 데이터

- [X] 데이터 크롤링
- [ ] 크롤링 소스 설정
- 보기
  - [X] 북마크
  - [ ] 페이지네이션
  
 

---

## env

### development

#### installation

```
npm install
npm run tsc # run typescript compiler ts -> js
npm run dev # run
```

#### webstorm

##### Editor > Code Style > TypeScript > Tab and Indents

Tab size: `2`  
Indent: `2`  
Continuation indent: `2`

##### Editor > Code Style > TypeScript > Punctuation

`Don't use` semicolon to terminate statements `always`  
Use `single` quotos `always`  
Trailing comma: `Keep`

##### Editor > Code Style > TypeScript > Others

Align 'var' statements and assignments  
`Align multiple 'var' statements and assignments`

Comments Code  
`Line comments at first column`

##### Languages & Frameworks > TypeScript
 
Compiler  
`Enable TypeScript Compiler`

### production

```
npm install
npm run tsc # run typescript compiler ts -> js
npm run build # create .next directory
npm start # start server
```

## license

ISC
