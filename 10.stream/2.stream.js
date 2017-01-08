var fs = require('fs');
var rs = fs.createReadStream('./1.txt',{highWaterMark:3});
rs.setEncoding('utf8'); //读取汉字时可以增加设置编码属性
//暂停出水
//on('data') on('end') on('error') pause() resume();
rs.on('data',function (data) {
    console.log(data);
    rs.pause();
    setTimeout(function () {
        rs.resume();
    },1000);
});

rs.on('end',function () {
    console.log('end');
});