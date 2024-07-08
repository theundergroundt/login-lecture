"use strict";

const express = require("express");
const router = express.Router(); // 앱이 아니라 라우터

// ctrl라는 파일 불러와서 router.get으로 접근 
const ctrl = require("./home.ctrl");

// app->router
// 서버
router.get("/", ctrl.hello);

router.get("/login", ctrl.login);

module.exports = router; // 외부로 내보내기