var school = {};
//读取一般默认为buffer 写入一般是utf8
var fs = require('fs');
//读5秒
fs.readFile('./name.txt','utf8',function (err,data) {
    if(err){console.log(err);}
    school.name = data;
    out();
});
//读3秒
fs.readFile('./age.txt','utf8',function (err,data) {
    if(err){console.log(err);}
    school.age = data;
    out();
});
function out() {//用一个计数器达到条件后 执行callback Promise.all
    Object.keys(school);//将对象的属性转换成数组
    if(Object.keys(school).length == 2){
        console.log(school);
    }
}
//能用异步 不用同步 （异步不会阻塞主线程），默认将文件全部读入到内存中，readFile不能读取比内存大的文件，一般读取 64k以下，pipe分段读取

/*
var name = fs.readFileSync('./name.txt','utf8');
school.name = name;
var age = fs.readFileSync('./age.txt','utf8');
school.age = age;
console.log(school);
*/
