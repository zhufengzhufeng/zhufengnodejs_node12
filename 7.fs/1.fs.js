//fs node中自带的库 核心模块 fileSystem;
var fs = require('fs');
//方法的特点 同步和异步共存 是否有回调函数
//1.读取的文件必须要存在
//2.读出来的内容是buffer类型
try {
    var result = fs.readFileSync('./2.txt','utf8');
}catch(e){
    console.log(e);
}
//err first
fs.readFile('./1.txt','utf8',function (err,data) {
   if(err)console.log(err);
    console.log(data);
});
