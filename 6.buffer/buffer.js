//global上一个属性
//1.通过长度来创建buffer
var buffer = new Buffer(3);
//声明的buffer长的是随机的
buffer.fill(0);//手动擦桌子
console.log(buffer);
//2.通过字符串创建buffer
var buffer = new Buffer('珠峰');
console.log(buffer);
//3.通过数组
var arr = [1,2,3];
var buffer = new Buffer(arr);
console.log(buffer);
//字符串具有不变性 和字符串的区别
var str = '珠峰';
str[0] = 8;
console.log(str.length);
var buffer = new Buffer('珠峰');
console.log(buffer.length);
//不同1:在buffer中长度是字节的长度
//和数组的区别
var a = ['a'];
var arr = [a,2,3];
var newArr = arr.slice(0);
a[0] = 'b';
console.log(newArr);
//数组的slice方法是浅拷贝，拷贝的是引用地址 [[],[],[]]
var buffer = new Buffer([1,2,3]);
var newBuffer = buffer.slice(0);
buffer[0] = 100;
console.log(newBuffer);//64,2,3 ,克隆出的新buffer和老buffer引用的是同一个地址



