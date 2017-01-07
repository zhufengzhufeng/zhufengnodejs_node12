var fs = require('fs');
//没有创建，清空内容,如果数据为对象类型，写入要转换成json字符串
//fs.writeFileSync('./1.txt',new Buffer('珠峰'));
//fs.appendFileSync('./1.txt',new Buffer('珠峰'));

fs.writeFile('./1.txt',new Buffer('珠峰'),function (err) {
    console.log(arguments);
    //不用callback也需要加上callback
});
//readFile writeFile readFileSync writeFileSync
//copy