var url = require('url');
console.log(url.parse('https://username:password@www.baidu.com:80/s?wd=a&rsv_spt=1&rsv_iqid=0xc03691d600040a37&issp=1&f=8&rsv_bp=0&rsv_idx=2&ie=utf-8&tn=baiduhome_pg&rsv_enter=1&rsv_sug3=1&rsv_sug1=1&rsv_sug7=100&rsv_sug2=0&inputT=133057&rsv_sug4=133056#aa',true));
//query 加true参数为对象
//pathname 请求的路径