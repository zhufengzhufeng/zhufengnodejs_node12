//http模块是node中 提供的核心模块
var http = require('http');
var fs = require('fs');
var server = http.createServer(function (req,res) {
    /*fs.readFile('./index.html',function (err,data) {
        res.end(data);
    });*/
    //res就是可写流
    //通过不同的路径 给予不同的内容 ，后端路由
    res.setHeader('Content-Type','text/html;charset=utf8');
    fs.createReadStream('./index.html').pipe(res);//异步
});
server.listen(80);
