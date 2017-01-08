var fs = require('fs');
//读64k 写16k
function pipe(source,target) {
    //可读流  可写流  读一点写一点
    //1.上来先读一次rs.on('data')，写入后有返回值ws.write(),如果返回值为false，暂停可读流rs.pause();
    //2.ws.on('drain')抽干后调用 rs.resume();
    //3.读完后rs.end() 关闭可写流 ws.end();
    var rs = fs.createReadStream(source);
    var ws = fs.createWriteStream(target);
    rs.on('data',function (data) { //打开水管
        var flag = ws.write(data); //向里写入
        if(!flag){ //写入不进去
            rs.pause(); //暂停
        }
    });
    ws.on('drain',function () { //水用完后
        rs.resume();//继续开水管
    });
    rs.on('end',function () { //当没水了
        ws.end(); //关掉
    });
}
pipe('./1.txt','./2.txt');