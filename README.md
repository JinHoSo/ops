# 인프라스트럭쳐 관리 시스템

## 지원

- [ ] 크롤링 데이터 세팅
- [ ] 크롤링 데이터 보기

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
