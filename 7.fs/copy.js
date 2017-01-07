var fs = require('fs');
//同步 readFileSync + writeFileSync写
//先读在
function copySync(source, target) {
    var result = fs.readFileSync(source);
    fs.writeFileSync(target, result);
}
//异步 writeFile + readFile
function copy(source, target, cb) {
    fs.readFile(source, function (err, data) {
        if (err)console.log(err);
        fs.writeFile(target, data, function (err) {
            cb(err);
        });
    });
}
copy('./list.png', './list1.png', function (err) {
    console.log('拷贝成功');
});
