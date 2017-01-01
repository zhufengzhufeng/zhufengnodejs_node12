//文件模块要有相对路径
var calc1 = require('./calc.js');
//一般不会操作缓存
delete require.cache[require.resolve('./calc.js')];
var calc2 = require('./calc.js');
//多次引用同一个模块会被缓存
//console.log(require);
//将引用的模块的绝对路径，放到require.cache
//console.log(require.cache);
//根据"存在"的模块解析出一个绝对路径
//console.log(require.resolve('./calc.js'));
