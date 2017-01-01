console.log(this); //{}
//在文件（外层多一层闭包）中直接访问this不是global属性
//后台中的全局对象是我们的global,而且服务端没有window的概念
// global.a = 100;
// console.log(global.a); var的属性不会自动声明在global属性
//1)
console.log(global);
console.log('日志');
console.dir('结构');
console.warn('警告');
console.info('信息');
global.console.error('错误'); //顺序不确定

/*console.time('s1');
for(var i = 0; i<1000000000;i++){}
console.timeEnd('s1'); //可以计算时间*/
//2)
/*setTimeout(function () {
 console.log(this); //setTimeout自己
 },1000);*/

function eat(who,aa) {console.log(who+aa);}
var timer = setTimeout(eat,1000,'人','你');//不需要加匿名函数直接通过参数传传递
clearTimeout(timer);

//3)进程 所有代码执行结束后会提示进程结束
/*setInterval(function () {
    //退出进程
    //process.exit(0); //结束进程
    //console.log(process.pid);
    //process.kill(process.pid);//杀死别人的进程
},100);*/
//4）当前文件目录的绝对路径
console.log(__dirname); //不是global上的属性，是外面函数的形参,在文件中可以直接访问
//5) 当前文件的绝对路径
console.log(__filename);
/*
 global
 process 进程
 Buffer 缓存区 （内存）
 clearImmediate: [Function], 清除立即
 clearInterval: [Function],
 clearTimeout: [Function],
 setImmediate: [Function], 立即
 setInterval: [Function],
 setTimeout: [Function],
 console: [Getter] }
*
* */