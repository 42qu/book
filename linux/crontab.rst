Crontab命令简介
==================
    crontab命令常见于Unix和类Unix的操作系统之中，用于设置周期性被执行的指令。

    该命令从标准输入设备读取指令，并将其存放于“crontab”文件中，以供之后读取和执行。

crontab文件
-----------
    该文件通常存放于/etc或者/etc之下的子目录中，而这个文件只能由系统管理员来修改。

    crontab文件的每一行均遵守特定的格式，由空格或tab分隔为数个领域，每个领域可以放置单一或多个数值。

语法介绍
-----------
　　使用权限: root用户和crontab文件的所有者
　　
    crontab格式语法:
　　
    crontab [-e [UserName]|-l [UserName]|-r [UserName]|-v [UserName]|File ]

　　参数:
　　
    -e [UserName]: 执行文字编辑器来设定时程表，内定的文字编辑器是 VI，如果你想用别的文字编辑器，则请先设定 VISUAL 环境变数来指定使用那个文字编辑器(比如说 setenv VISUAL joe)

　　-r [UserName]: 删除目前的时程表

　　-l [UserName]: 列出目前的时程表

　　-v [UserName]:列出用户cron作业的状态

    **时程表的格式如下:**

　　f1 f2 f3 f4 f5 program

　　其中 f1 是表示分钟，f2 表示小时，f3 表示一个月份中的第几日，f4 表示月份，f5 表示一个星期中的第几天。program 表示要执行的程式。

　　当 f1 为 * 时表示每分钟都要执行 program，f2 为 * 时表示每小时都要执行程式，其余类推

　　当 f1 为 a-b 时表示从第 a 分钟到第 b 分钟这段时间内要执行，f2 为 a-b 时表示从第 a 到第 b 小时都要执行，其余类推

　　当 f1 为 */n 时表示每 n 分钟个时间间隔执行一次，f2 为 */n 表示每 n 小时个时间间隔执行一次，其余类推

　　当 f1 为 a, b, c,... 时表示第 a, b, c,... 分钟要执行，f2 为 a, b, c,... 时表示第 a, b, c...个小时要执行，其余类推

　　使用者也可以将所有的设定先存放在档案 file 中，用 crontab file 的方式来设定时程表。

　　由于unix版本不一样，所以部分语法有差别，例如在hp unix aix 中设定间隔执行如果采用*/n 方式将出现语法错误，在这类unix中 ，间隔执行只能以列举方式，详请见例子。

使用方法
----------
　　用VI编辑一个文件 cronfile，然后在这个文件中输入格式良好的时程表。编辑完成后，保存并退出。

　　在命令行输入
　　$: crontab cronfile

　　这样就将cronfile文件提交给c r o n进程，同时，新创建cronfile的一个副本已经被放在/var/spool/cron目录中，文件名就是用户名。

　　例子:

    每月每天每小时的第 0 分钟执行一次 /bin/ls :
    
    0 * * * * /bin/ls

    在 12 月内, 每天的早上 6 点到 12 点中，每隔 20 分钟执行一次 /usr/bin/backup :
    
    */20 6-11 * 12 * /usr/bin/backup

    周一到周五每天下午 5:00 寄一封信给 alex_mail_name :
    
    0 17 * * 1-5 mail -s "hi" alex_mail_name < /tmp/maildata

    每月每天的午夜 0 点 20 分, 2 点 20 分, 4 点 20 分....执行 echo "haha"
    
    20 0-23/2 * * * echo "haha"

    晚上11点到早上8点之间每两个小时，早上8点
    
    0 23-7/2，8 * * * date

　　在hp unix,中，每20分钟执行一次，表示为：0,20,40 * * * * 而不能采用*/n方式，否则出现语法错误
　　
    **注意:**
　　1. 当程式在你所指定的时间执行后，系统会寄一封信给你，显示该程式执行的内容，若是你不希望收到这样的信，请在每一行空一格之后加上 > /dev/null 2>&1 即可。

　　2. %在crontab中被认为是newline，要用\来escape才行。比如crontab执行行中，如果有"date +%Y%m%d"，必须替换为："date +\%Y\%m\%d"

创建crontab
------------
　　在考虑向cron进程提交一个crontab文件之前，首先要做的一件事情就是设置环境变量EDITOR。cron进程根据它来确定使用哪个编辑器编辑crontab文件。99 %的UNIX和LINUX用户都使用vi，如果你也是这样，那么你就编辑$HOME目录下的.profile文件，在其中加入这样一行：

　　EDITOR=vi; export EDITOR

　　然后保存并退出。

　　不妨创建一个名为<user>cron的文件，其中<user>是用户名，为了提交你刚刚创建的crontab文件，可以把这个新创建的文件作为cron命令的参数：

　　$ crontab davecron

　　现在该文件已经提交给cron进程，同时，新创建文件的一个副本已经被放在/var/spool/cron目录中，文件名就是用户名（即，dave）。
列出crontab文件
-----------------
　　为了列出crontab文件，可以用：

　　$crontab -l

编辑crontab文件
---------------
　　如果希望添加、删除或编辑crontab文件中的条目，而EDITOR环境变量又设置为vi，那么就可以用vi来编辑crontab文件，相应的命令为：

　　$ crontab -e

　　可以像使用vi编辑其他任何文件那样修改crontab文件并退出。

删除crontab文件
----------------
　　为了删除crontab文件，可以用：

　　$ crontab -r

恢复丢失的crontab文件
---------------------
　　如果不小心误删了crontab文件，假设你在自己的$HOME目录下还有一个备份，
    那么可以将其拷贝到/var/spool/cron/<username>，其中<username >是用户名。
    如果由于权限问题无法完成拷贝，可以用：

　　$ crontab <filename>

　　其中，<filename>是你在$HOME目录中副本的文件名。

crontab中的输出配置
----------------------
　　crontab中经常配置运行脚本输出为：>/dev/null 2>&1，来避免crontab运行中有内容输出。

　　shell命令的结果可以通过‘> ’的形式来定义输出

　　/dev/null 代表空设备文件

　　> 代表重定向到哪里，例如：echo "123" > /home/123.txt

　　1 表示stdout标准输出，系统默认值是1，所以">/dev/null"等同于"1>/dev/null"

　　2 表示stderr标准错误

　　& 表示等同于的意思，2>&1，表示2的输出重定向等同于1

　　那么重定向输出语句的含义：

　　1>/dev/null 首先表示标准输出重定向到空设备文件，也就是不输出任何信息到终端，不显示任何信息。

　　2>&1 表示标准错误输出重定向等同于标准输出，因为之前标准输出已经重定向到了空设备文件，所以标准错误输出也重定向到空设备文件。
