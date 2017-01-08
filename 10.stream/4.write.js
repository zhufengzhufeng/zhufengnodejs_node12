var fs = require('fs');
var ws  = fs.createWriteStream('./2.txt',{highWaterMark:5});
//写0-9个数 10b
var index = 0;
function write() {
    var flag = true; //每次进来 为能吃状态
    while (flag&&index<10){
        flag = ws.write(index+++'');
    }
}
ws.on('drain',function () {
    console.log('吃完了');
    write()
});
write();
//write end on('drain');
