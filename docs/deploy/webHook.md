---
id: webHook
title: 持续化部署
---

#### 部署到服务器上

一、再远程服务器上建立一个仓库

```bash
mkdir reps
cd reps
git init projectName.git  --bare
```

二、到仓库的hooks文件夹中创建post-receive,  保存后为其增加执行权限（chmod +x post-receive）

在 post-receive编写

```base
cd yourdirpath
git --git-dir=/reps/projectName.git --work-tree=yourdirpath checkout master -f
npm install \
&&npm run build
```

三、本地添加远程仓库

```git
git remote add prod ssh://username@ip/reps/projectName.git
git remote -v
```

