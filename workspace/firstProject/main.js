// main.js

var express = require('express');
var app = express();

app.locals.pretty = true;
app.set('views', './views');
app.set('view engine', 'pug');
app.listen(3000, () => {
  console.log("Server has been started");
});

// 최상위 라우트로 접속 시 /test로 리다이렉트 
app.get("/", (req, res) => {
  res.redirect('/pugTest');
});

// Pug 파일 렌더링
app.get("/pugTest", (req, res) => {
  res.render('pugTest', { title: 'Goorm', message: 'Welcome to GoormEdu'});
});