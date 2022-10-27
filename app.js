const http = require('http');
const app = http.createServer((req, res) => {
  //   res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });

  if (req.url === '/') {
    res.end('Here is root page');
  } else if (req.url === '/login') {
    res.end('로그인 페이지');
  }
});

app.listen(8000, () => {
  console.log('start http server');
});

// const express = require('express');
// const app = express();

// app.get('/', (req, res) => {
//   res.send('Here is root page');
// });

// app.get('/login', (req, res) => {
//   res.send('Here is login page');
// });

// app.listen(8000, () => {
//   console.log('Start Server');
// });
