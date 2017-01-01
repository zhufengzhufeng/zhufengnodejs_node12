//util.js 是node给我们提供的工具包
//核心（内置） 第三方  文件模块
//核心模块引用方式同第三方模块
var util = require('util');
//util.inherits();继承方法
//只要原型上的方法
function Parent() {this.smile = '笑'}
Parent.prototype.eat = function () {
   console.log('吃饭');
};
function Child() {}
//util.inherits(Child,Parent);
Object.setPrototypeOf(Child.prototype, Parent.prototype);
var child = new Child();
child.eat();
//Child.prototype.__proto__ = Parent.prototype;
//Child.prototype = Object.create(Parent.prototype);
//Object.setPrototypeOf(Child.prototype,Parent.protoType)
//es6 setPrototypeOf

//判断类型
console.log(util.isArray([]));
console.log(util.isNull([]));