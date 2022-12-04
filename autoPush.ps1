Function Auto-push-git {
 Set-Location  # 绝对路径 切换到你要推送的本地仓库地址
 $now = Get-Date # 获取时间日期对象. 对!PowerShell是面向对象的
 $msg = "==> " + $now.ToString('yyyy年MM月dd日 HH:mm:ss') + " 提交 <=="# 提交的消息
 Write-Output $msg >> .\gitpush.log # 追加输出到 日志文件gitpush.log
 git status >> .\gitpush.log # 将代码的相关信息追加输出到日志,下面几行也是
 git add . >> .\gitpush.log
 git commit -m $msg >> .\gitpush.log
 git push -u origin master >> .\gitpush.log
}
# 上面实际上定义了一个函数
Auto-push-git
# 好! 函数运行起来了