## 将本地的"历史"区提交到github
commit -> push github

## 初始化
```
git init
```

## 创建忽略文件
```
touch .gitignore
```

## 将文件放入到历史区中
```
git add .
git commit -m'initial commit'
```

## 将本地的内容推送到远程上
- 如果远程上有内容，你需要先将远程的内容拉取到本地合并后再提交

## 创建关联远程仓库
```
git remote add origin 地址
```
## 移除关联远程仓库
```
git remote rm 地址名
```

## 推送到远程仓库
- upstream
```
git push origin master -u
```

## 本地和线上版本内容不一致
- 先进行拉去，如果拉取后有冲突，手动绝决冲突

## -f参数覆盖掉线上代码

> 不要使用

## 在github上挂载静态页
- 挂载静态页必须将代码提交到固定的分支上(gh-pages)
```
git checkout -b gh-pages
git add .
git commit -m''
```
- 将这个分支推送到github上
```
git push origin gh-pages
```
- 在settings中可以看到提供的网址


