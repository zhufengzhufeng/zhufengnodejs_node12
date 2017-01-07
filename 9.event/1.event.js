//发布emit    订阅绑定事件on
//一对多的关系  有钱了  给妹子买包  给妹子买车
function Man() {
    this._events = {}
}
var man = new Man();
//{有钱了:['买包','买车']}
Man.prototype.on = function (eventName,callback) {
    if(this._events[eventName]){ //去除当前的盒子通过事件名查找看有没有声明过
        //直接在数组中追加
        this._events[eventName].push(callback);
    }else{ //没声明过 创建一个数组，将函数放入到数组中
        this._events[eventName]=[callback];
    }
};
Man.prototype.emit = function (eventName) {
    //将除了第一项的全部取出传递给 item执行
    var args = [].slice.call(arguments,1);//除了第一项的所有参数 ['妹子']
    if(this._events[eventName]){
        var that = this;
        this._events[eventName].forEach(function (item) {
            item.apply(that,args);//为了保证this是Man的实例 需要改变this
        });
    }
};
//{'有钱了',['买车','买包']}
Man.prototype.removeListener = function (eventName,callback) {
    if(this._events[eventName]) {
        this._events[eventName] = this._events[eventName].filter(function (item) {
            return item != callback;//filter返回false表示删除
        });
    }
};
function buyPack(who) {
    console.log(`买包给${who}`);
}
function buyCar(who) {
    console.log(`买车给${who}`);
}
man.once('有钱了',buyPack);
man.on('有钱了',buyCar);
man.removeListener('有钱了',buyCar);//{'有钱了',【'买包'】}
man.emit('有钱了','妹子');
//once的含义：绑定一次多次执行，只触发一次，触发一次后再数组移除掉
