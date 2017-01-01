//文件模块，需要叫相对路径  (./  ../)
var Person = require('./person.js');//同步还是异步
//相当于将person.js读取过来，同步的，有没有回调函数
var p = new Person;

p.learn();
