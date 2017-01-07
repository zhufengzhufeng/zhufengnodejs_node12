//path是node提供一个常用模块，处理路径（内置模块）
//path.resolve path.join
//require.resolve  path.resolve
//只能解析已有的模块
var path = require('path');
//通过文件名，解析出一个绝对路径
console.log(path.resolve('./1.js'));
console.log(path.join(__dirname,'/1.js'));
//path.join   path.resolve 解析绝对路径的