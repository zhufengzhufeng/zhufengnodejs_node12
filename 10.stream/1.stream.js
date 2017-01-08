//水流，有起点有终点的，不关心到底有多少水，只关心读出来的内容
//grunt基于配置的  gulp基于流的
//流(基于事件) 可读流 可写流  readFile  writeFile
//readFile writeFile 不能读取比内存大的文件  64k
//用流来拷贝文件 可以读取比内存大的文件，读一点写一点
var fs = require('fs');
var rs = fs.createReadStream('./2.txt',{highWaterMark:1});
//highWaterMark最高水位线，一次能读多少 默认64k
//encoding:null 读出来的内容默认是buffer类型
var list = [];
rs.on('data',function (data) { //如果你监听了data事件，node会不停的触发事件
    list.push(data)
});
rs.on('end',function () {
    console.log(Buffer.concat(list).toString());
});
rs.on('error',function (err) {
    console.log(err);
});