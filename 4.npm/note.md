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
npm install http-server -g //安装http-server模块
http-server//启动一个本地的服务器
```
### 本地安装
- 代码中需要用到的，需采用本地安装
#### 开发依赖
- 在开发时使用的，上线后不需要用的
```
npm install 包名 --save-dev或-D
```
#### 发布依赖
- 发布项目时仍需要的模块
```
npm install 包名 --save或-S
```
#### 卸载
```
npm uninstall gulp
```
## 查看jq版本
```
npm info jquery
```
## 指定版本安装
```
npm install jquery@ --save
```
## 安装依赖
```
npm install
```

## 删除全局安装
```
npm uninstall http-server -g
```

> 会将开发依赖和依赖全部下载

## bower管理前端代码
- 安装bower
```
npm install bower -g
```
- 初始化bower.json
``` 
bower init
```
- 安装"前端"包
```
bower install jquery#3.0.0 --save
```
> 默认安装到bower_components下

- 可以指定安装目录  
创建文件 .bowerrc
```
{"directory":"./lib"}
```
## 内网
```
npm config set registry "http://172.18.0.199"
npm install nrm -g //安装切换源工具
nrm add zhufeng http://172.18.0.199 //添加珠峰为远程仓库
nrm ls //查看源
nrm use zhufeng //使用zhufeng
```
### 查看全局安装路径
```
npm root -g
```

> npm是在path目录下的，npm中的快捷也可以在命令下直接访问



