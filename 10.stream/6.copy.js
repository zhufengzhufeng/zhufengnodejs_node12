var fs = require('fs');
function copy(source,target) {
    var rs = fs.createReadStream(source);
    var ws = fs.createWriteStream(target);
    rs.pipe(ws); //pipe异步
    //可读流.pipe(可写流)，会调用可写流的write方法 ，最后end
}
copy('./1.txt','./2.txt');
