## npm 
- node package manager 包
- 包由模块组成
## 安装，卸载，发布
安装前初始化一个package.json文件
```
npm init -y
```

> 记录依赖,默认json格式 json不能有注释 否则报错

### 全局安装(g)
加-g的安装，安装后只能在命令下使用
```
npm install http-server -g
```
### 本地安装


## 内网
```
npm config set registry "http://172.18.0.199"
npm install nrm -g //安装切换源工具
nrm add zhufeng http://172.18.0.199 //添加珠峰为远程仓库
nrm use zhufeng //使用zhufeng
```

### 查看源
```
nrm ls
```