var sum = 0;
//当前位的值*当前进制^所在位的索引
for(var i =0; i<8; i++){
    sum+= Math.pow(2,i);
}
console.log(sum);
//16进制最大 0xff 10进制中255
//15*16^1+15*16^0
//在buffer中每一个字节是多少 0-255之间
