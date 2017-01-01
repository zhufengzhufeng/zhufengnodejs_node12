function Person() {}
Person.prototype.learn = function () {
    console.log('我会学习');
};
//exports.Person = Person;//module.exports=exports={Person}
//module.exports = Person;
//在exports上增加属性可以导致module.exports的变化，最终导出的是module.exports
//直接改module.exports 导出的也是module.exports  导出引用数据类型






//别的模块获取其他模块，默认获取到的module.exports


/*
(function (exports,module,require,__dirname,filename) {
     module.exports = exports = {Function,Function}
     exports.Function = Function;
     return module.exports {}
})()*/
