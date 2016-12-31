## git特点
- 分布式,svn(集中式)
- 回到过去,回到未来(更改状态点)
- 多端共享
- 解决冲突（手动解决）
- 控制版本

## 安装git  
需要选择在cmd下使用linux命令

## cd 
change directory改变文件夹

## pwd  
打印当前工作目录  print working directory

## 告诉git你是谁(配置一次即可)    
如果没有配置过git是不能进行提交操作的
```
git config --global user.name 'github账号'
git config --global user.email 'github邮箱'
git config --list  //查看所有配置
```



## 删除文件夹
```
rm -rf .git
```

## 创建"文件夹"
```
mkdir 文件夹的名字
```

## 初始化git
```
git init 初始化git 当前目录归git所管理
```

## git有三个区
- 工作 暂存 历史

## 创建文件
```
touch 文件名
echo 内容 >> 1.txt //一个大于号清空 创建 并写入 2个大于追加
cat 文件名  查看
```

## 修改内容
```
vi 文件名  
```
- 修改按i键 esc退出编辑模式 :wq保存并退出 :q! 强制退出

## 查看状态
```
git status
```

## 添加到暂存区   
过渡区 保护历史区和工作区，没有加入到暂存区是红色，加入后是绿色
```
git add ./-A/文件名
```

## 添加到版本库
永远内容不会丢失
```
git commit -m"write one"
```

## 查看提交的版本号
```
git log --oneline //--oneline显示记录为一行
```

## 从暂存区中拉回工作区
```
git checkout 文件名
```

## 放入到暂存区中，移除暂存区中新加内容
```
git reset HEAD 文件名
```

## 一步提交到历史区
```
git commit -a -m'提交信息' //不针对于某个文件的首次提交
```

## 在历史区中查询关键字
```
git log --grep/--author=one 
```

## 回滚用某一个版本回退到工作区中(穿越)
```
git reset --hard 版本号 
git reset --hard HEAD~3/HEAD^ 去上一级
```

> git log是只能看到当前版之前的内容

## 查看所有操作历史
```
git reflog
```

## 代码比较
- 工作区和暂存区
```
git diff
```
- 暂存区和历史区
```
git diff --cached
```
- 工作区和历史区
```
git diff 分支的名字
```

## 分支
- 主要是写代码时，不会影响主代码
###  创建分支
``` 
git branch dev
```
### 查看分支
```
git branch
```
### 进入到分支里
```
git checkout 分支名
```

## 删除分支
```
git branch -D 分支名
```

## 创建并切入
```
git checkout -b dev  //创建并切入到dev分支上
```

## 合并分支
```
git merge 合并分支
```

> 每个人都会拥有有一条分支，开发自己的代码，自己的代码开发完成后提交到自己的历史区，主分支来进行合并分支

## 冲突产生原因
两个同时改变了同一个文件。git不知道谁是对的，要让自己裁决，裁决好后再次提交

> 只能手动合并
