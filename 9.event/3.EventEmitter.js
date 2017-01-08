//node给我们提供了自带的事件库 (核心模块 内置模块)
var EventEmitter = require('events');
var util = require('util');
function Man() {}
util.inherits(Man,EventEmitter);//只继承原型上的方法
var man = new Man();
function buyPack(a,b) {console.log('买包'+a,b);}
man.on('有钱',buyPack);
//man.removeListener('有钱',buyPack);
man.removeAllListeners('有钱');
man.emit('有钱','妹子','媳妇');
man.emit('有钱','妹子','媳妇');
man.emit('有钱','妹子','媳妇');
//on=addListener, 增加方法
//removeListener, 删除监听
//once 绑定一次
//emit 发射事件
//removeAllListener 删除监听