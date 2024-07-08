// 서버띄어주는 코드파일
"use strict" 

// app불러오기
const app = require("../app");
const PORT =3000;

// 이크마스크립트 표준 
app.listen(PORT,  () => {
    console.log("서버 가동");
});