//http模块是node中 提供的核心模块
var http = require('http');

var server = http.createServer(function (req,res) { //请求到来时，执行此回调函数
    //res.writeHead(200,{'Content-Type':'text/plain;charset=utf8','aa':1});
    res.setHeader('Content-Type','text/plain;charset=utf8');
    res.setHeader('aa','1');
    res.statusCode = 202;
    res.end('你好');
});
server.listen(80);