//实现一个计算的方法，让其他模块调用，分别使用exports和module.exports导出模块
var calc = {
  '+':function (a,b) {return a+b;},
  '-':function (a,b) {return a-b;}
};
console.log(1);
//module.exports = calc;
//exports.calc = calc;
//console.log(this==module.exports);

//module.exports = exports = {}

/*
* (function(exports,module,require,__dirname,__filename){
*     this = module.exports
*     module.exprots = exports = {}
*     return module.exports
* })()
* */
