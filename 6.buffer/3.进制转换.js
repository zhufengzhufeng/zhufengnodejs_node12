//从任意进制 到 任意进制
//toString()
//任意进制转换成10进制
//parseInt()
//"11"二进制转换成10进制
console.log(parseInt('1111111',2)); //后面的2表示当前是几进制的
console.log((0xff).toString(10));//后面2表示要转换的进制

//转化汉字 将汉字 转换成base64编码
//base64不能进行加密运算，md5 sha1 sha256(不可逆)
//每一个字节都<=64  最大63最小0
//珠转换成base64
var buffer = new Buffer('珠');
console.log(buffer);//e7 8f a0
//1.先将16进制转换成2进制
console.log((0xe7).toString(2));//11100111
console.log((0x8f).toString(2));//10001111
console.log((0xa0).toString(2));//10100000
//二进制小于64的是多少？00111111 3*8 = 4*6
//将一个汉字的所有位拼在一起 00111001 00111000 00111110 00100000
//再将这个值转换成10进制
console.log(parseInt('00111001',2));
console.log(parseInt('00111000',2));
console.log(parseInt('00111110',2));
console.log(parseInt('00100000',2));
//57 56 62 32
var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
str += str.toLowerCase();
str += '0123456789';
str += '+/';
console.log(str[57]+str[56]+str[62]+str[32]);//54+g base64编码

//parseInt toString