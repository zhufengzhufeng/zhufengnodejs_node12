var http = require('http');
var fs = require('fs');
var url = require('url');
var mime = require('mime');//第三方
var formidable = require('formidable');
http.createServer(function (req,res) {
    var urlObj = url.parse(req.url,true);
    var pathname = urlObj.pathname;
    if(pathname == '/'){
        res.setHeader('Content-Type','text/html;charset=utf8');
        fs.createReadStream('./index.html').pipe(res);
    }else if(pathname == '/upload'){
        // formidable 第三方模块
        var form = new formidable.IncomingForm();
        form.parse(req, function(err, fields, files) {
            fs.createReadStream(files.content.path).pipe(fs.createWriteStream('./upload/'+files.content.name));
        });
        form.on('end', function() { //上传完成后
            res.end('');
        });
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
