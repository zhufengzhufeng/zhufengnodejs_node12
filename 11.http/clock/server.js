var http = require('http');
var fs = require('fs');
var url = require('url');
var mime = require('mime');//第三方
http.createServer(function (req,res) {
    var urlObj = url.parse(req.url,true);
    var pathname = urlObj.pathname;
    if(pathname == '/'){
        res.setHeader('Content-Type','text/html;charset=utf8');
        fs.createReadStream('./index.html').pipe(res);
    }else if(pathname == '/clock'){//动态返回时间
        var date = new Date();
        var obj = {date:date.toLocaleString()};
        res.end(JSON.stringify(obj));
    }else{
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
}).listen(3000);
