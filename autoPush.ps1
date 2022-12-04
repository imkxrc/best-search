Function Auto-push-git {
 Set-Location D:\study-project\vue3\best-search # 绝对路径 切换到你要推送的本地仓库地址
 $now = Get-Date # 获取时间日期对象. 对!PowerShell是面向对象的
 $msg = "==> " + $now.ToString("yyyy-MM-dd HH:mm:ss:ffff") + " <=="# 提交的消息
 Write-Output $msg >> .\gitpush.log # 追加输出到 日志文件gitpush.log
 git status >> .\gitpush.log # 将代码的相关信息追加输出到日志,下面几行也是 -u origin master
 git add . >> .\gitpush.log
 git commit -m $msg >> .\gitpush.log
 git push >> .\gitpush.log
}
# 上面实际上定义了一个函数
Auto-push-git
# 好! 函数运行起来了 Win + R 打开运行窗口, 输入 taskschd.msc 然后回车打开创建任务