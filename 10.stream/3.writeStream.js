var fs = require('fs');
var ws = fs.createWriteStream('./2.txt');
//highWaterMark 16k
//encoding utf8 默认写入为utf8格式
var flag = ws.write("1", function () {
    console.log('写入');
});//write方法中需要buffer或者字符串
//flag 是一个boolean值，你喂完我这一口，我还能不能继续吃
ws.end("2"); //先将没吃完的饭吃完，再将参数吃完，之后合上嘴
// write after end
//ws.write  ws.end

//> 无论是否能吃，都会吃下去，不会导致数据丢失

//createReadStream 不停的读  如果写不进去就不要浪费可用内存，先暂停不要读了，等会都写完了 在继续读