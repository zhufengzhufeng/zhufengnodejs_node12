var http = require('http');
var fs = require('fs');
var url = require('url');//解析路径的
var mime = require('mime');
var server = http.createServer(function (req,res) {
    console.log(req.headers["cache-control"]); //请求头信心小写取出来
    console.log(req.method);//通过浏览器访问默认是Get请求
    console.log(req.url); //请求的路径
    var urlObj = url.parse(req.url,true);
    var pathname = urlObj.pathname;
    if(pathname=='/'){ //默认直接访问为/ 直接响应内容即可
        res.setHeader('Content-Type','text/html;charset=utf8');
        fs.createReadStream('./index.html').pipe(res);
    }else{
        //mime专门处理content-type 第三方模块,查看路径的后缀名生成对应的类型
        //先判断文件是否存在
        fs.exists('.'+pathname,function (flag) {
            if(flag){
                res.setHeader('Content-Type',mime.lookup(pathname)+';charset=utf8');
                fs.createReadStream('.'+pathname).pipe(res);
            }else{
                res.statusCode = 404;
                res.end('Not Found');
            }
        });
    }
/*
    if(pathname == '/index.html'){
        res.setHeader('Content-Type','text/html;charset=utf8');
        fs.createReadStream('./index.html').pipe(res);
    }
    if(pathname=='/index.css'){ //默认直接访问为/ 直接响应内容即可
        res.setHeader('Content-Type','text/css;charset=utf8');
        fs.createReadStream('./index.css').pipe(res);
    }*/
});
server.listen(80);
