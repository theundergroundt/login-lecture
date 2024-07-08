"use strict"

//이크마 스크립트 문법 

// hello라는 객체
const hello =(req, res) => {
    res.render("home/index");
};

// login이라는 객체 
const login = (req, res) => {
    res.render("home/login");
};

// 객체 선언후 밖으로 내보내기 
module.exports = {
    hello,
    login,
};