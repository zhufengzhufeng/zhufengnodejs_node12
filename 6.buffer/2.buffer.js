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

//不是别都是0,如果大于255会对256取模，负则对256加法
var buffer = new Buffer([-1,1,2]);
console.log(buffer);
//buffer write
//string,字符串offset,偏移量 length, 长度encoding编码
var buffer = new Buffer(12);//珠峰培训
buffer.write('珠',0,3,'utf8');
buffer.write('峰培训',3,9,'utf8');
//将buffer转化成字符串
console.log(buffer.toString('utf8',0,6));//包前不包后
//buffer中的方法都是按照字节计算
//1.copy
//拷贝buffer，将一个小的buffer考到一个大buffer上
var bigBuffer = new Buffer(100);
var buffer = new Buffer('珠峰培训你好哈哈');
//targetBuffer,目标buffer
//targetStart,目标的开始
//sourceStart,源的开始
//sourceEnd 源的结束
buffer.copy(bigBuffer,0); //默认从源的开始到解释
console.log(bigBuffer.toString());
//珠峰培 训
var buffer = new Buffer(12);
var buffer1 = new Buffer('训');
var buffer2 = new Buffer('珠峰培');
buffer1.copy(buffer,9);
buffer2.copy(buffer,0);
console.log(buffer.toString());
//concat拼接
var buffer1 = new Buffer('训');
var buffer2 = new Buffer('珠峰培');
var buffer3 = new Buffer('你好');
//返回一个拼接好的buffer
var newBuffer = Buffer.concat([buffer2,buffer1,buffer3]);
console.log(newBuffer.toString());
//myConcat(Buffer对象上)
//1.要求 如果传入长度过小，保存能放下的,如果过长截取有效长度
//2.判断长度有木有 ，没有的话手动维护长度
//3.构建一个返回的buffer
//4.使用copy方法将每一个小buffer拷贝到大buffer上
//5.如果长度过长 截取有效长度
//6.返回buffer
Buffer.myConcat = function (list,totalLength) {
    //这里不能使用原生自带的concat方法
    if(typeof totalLength=='undefined'){
        totalLength = 0;
        list.forEach(function (item,index) {
            totalLength += item.length;//获取总的长度
        });
    }
    var buffer = new Buffer(totalLength);
    var index = 0;//每次拷贝的偏移量
    list.forEach(function (item) {
        item.copy(buffer,index);
        index+=item.length;
    });
    return buffer.slice(0,index);
};
console.log(Buffer.myConcat([buffer2,buffer1,buffer3]).toString());
//是不是Buffer isBuffer
console.log(Buffer.isBuffer(newBuffer)); // true false

//write copy toString slice concat
//定义的三种方式 字符 数组 数字







