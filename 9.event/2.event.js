function Man() {
    this._events = {};
}
// {'有钱',[buyPack]}
Man.prototype.on = function (eventName,callback) {
    if(this._events[eventName]){
        this._events[eventName].push(callback);
    }else{
        this._events[eventName] = [callback];
    }
};


Man.prototype.emit = function (eventName) {
    var args = Array.prototype.slice.call(arguments,1);
    if(this._events[eventName]){
        this._events[eventName].forEach((item)=>{
            item.apply(this,args);
        })
    }
};
Man.prototype.removeListener = function (eventName,callback) {
    if(this._events[eventName]){
        this._events[eventName] = this._events[eventName].filter(function (item) {
            //如果其中有一个就返回false
            return item!=callback&&item.g!=callback
        })
    }
};
//{有钱：[one.buyPack,buyPack]}   buyPack
Man.prototype.once = function (eventName,callback) {
    function one() { //arguments =['妹子']
        callback.apply(this,arguments);
        this.removeListener(eventName,one);
    }
    one.g = callback;
    this.on(eventName,one);
};
//on removeListener emit once
var man = new Man();
function buyPack(who) {
    console.log('买包'+who);
}
man.once('有钱',buyPack);
//没触发之前就干掉此函数
man.removeListener('有钱',buyPack);
man.emit('有钱','妹子');
man.emit('有钱','妹子');
man.emit('有钱','妹子');
man.emit('有钱','妹子');