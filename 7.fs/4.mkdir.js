var fs = require('fs');
//创建文件夹,需要保证父级存在，才能创建子级
//fs.mkdirSync('a/b');
function makepSync(paths) {
    var arrs = paths.split('/');
    arrs.forEach(function (item,index) {
        var cur = arrs.slice(0,index+1).join('/');
        if(!fs.existsSync(cur)){ //创建之前先判断文件是否存在
            fs.mkdirSync(cur);
        } // a  a,b  a,b,c  a,b,c,d
    });
}
makepSync('a/b/c/d/e/f');
//fs.existsSync
//作业:写一个异步的创建文件夹  递归创建
//作业:对用户的增删改查
//mkdir exists
//fs.mkdir('a',function (err) {/*错误对象*/})
fs.exists('./c',function (stat) {
    console.log(stat);
});
//readFile readFileSync
//writeFile writeFileSync
//appendFile appendFileSync
//mkdir  mkdirSync
//exists existsSync