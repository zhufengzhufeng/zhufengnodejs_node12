//实现一个计算的方法，让其他模块调用，分别使用exports和module.exports导出模块
var calc = {
  '+':function (a,b) {return a+b;},
  '-':function (a,b) {return a-b;}
};