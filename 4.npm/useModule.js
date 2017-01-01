//文件模块 第三方模块 需要下载引用时不需要增加路径，引用文件夹的名字即可
var str = require('jwjwaa');
console.log(module.paths);//存放着查找路径，以当前目录的向上查找，找到根目录为止
console.log(str);
