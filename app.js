"use strict";
// 모듈
const express = require("express");
const app = express();

const PORT =3000;

// 라우팅
const home = require("./routes/home");

// 앱 세팅
app.set("views", "./views");
app.set("view engine", "ejs"); // html이라고 생각

app.use("/", home); // use -> 미들 웨어를 등록해주는 메서드.

// app.js내보내기 = www.js에서 쓸 수 있게 
module.exports = app;

