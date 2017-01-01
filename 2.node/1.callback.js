function read(cb) {
    setTimeout(function () {
        console.log('读入成功');
        cb();
    },2000);
}
function write() {
    console.log('写入成功');
}
read(write);