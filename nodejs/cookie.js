const http = require("http");
var cookie = require("cookie");
http
  .createServer(function (req, res) {
    var cookies = {};
    if (req.headers.cookies != undefined) {
      cookies = cookie.parser(req.headers.cookies);
      console.log(cookies.yummy_cookie);
    } //쿠키를 서버에서 쏘고 왜 그걸 읽음?? 어떻게 읽 히는 거지?

    res.writeHead(200, {
      "Set-Cookie": [
        "yummy_cookie=choco",
        "tasty_cookie=strawberry",
        `Permanent=cookies; Max-age=${60 * 60 * 24 * 30}`,
        "Secure=Secure; Secure",
        "HttpOnly=HttpOnly; HttpOnly",
      ],
    });

    res.end("cookie!!");
  })
  .listen(3000);
