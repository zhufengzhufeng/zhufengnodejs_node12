//1.异步方法，服务员第二个小本上
setImmediate(function () {
    console.log('马上');
});
setTimeout(function () {
    console.log('过1s');
},0);//6ms
//如果timeout事件为0 ,则setImmediate会给setTimout一些机会让他先执行
//在当前服务员的第一个小本的末尾
process.nextTick(function () {
    console.log('当前任务的末尾');
});
console.log(1);

//同步 > nextTick > setImmediate >= setTimeout(0) > io


//process cwd current working directory
console.log(process.cwd()); //可以切换当前工作目录
console.log(__dirname); //不可改的
//c:\Users\10354_000\Desktop\node12\2.node
/*
process.chdir('..');
console.log(process.cwd());
console.log(__dirname);
*/
