## git remote -v   查看远程仓库地址
## git branch -a 查看所有分支
## git branch (branchname)  创建分支
## git checkout (branchname)  切换分支
## git merge 合并分支
## git branch -v 查看所有分支
## git checkout -b dev 新建并切换到本地dev分支
## git push -u origin <本地分支名> 将本地分支与远程同名分支相关联
## git pull origin <远程分支名>:<本地分支名>  将远程指定分支 拉取到 本地指定分支上
## git pull origin <远程分支名>  将远程指定分支 拉取到 本地当前分支上
## git push origin <本地分支名>:<远程分支名>  将本地当前分支 推送到 远程指定分支上
## git push origin <本地分支名>  将本地当前分支 推送到 与本地当前分支同名的远程分支上


<!-- 第一次提交流程 -->
git init
git add .
git remote add origin 远程仓库地址
git commit -m "第一次提交"
创建新的分支
git branch -M main
git push -u origin main

如果在创建仓库时创建了README.md文件 导致出现错误error: failed to push some refs to 'https://github.com/lingkong333/interview.git'
使用如下命令
## git pull --rebase origin master
## git push -u origin master
