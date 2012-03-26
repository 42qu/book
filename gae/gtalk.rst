在 Google App Engine 建立Gtalk群
=============================================================================

参考文章：http://tiant.me/archives/22

这个项目在 http://code.google.com/p/gtalkgroups/ ，下载最新版本的源码：
http://gtalkgroups.googlecode.com/files/gtalkgroup_release.tar.gz

帮助资料在 http://io43.com/ ，也包括安装教程，不过是英文的。

第一步，创建。

这一步需要在GAE上创建一个APP_ID。未使用过GAE的先用Gmail账号密码登录 https://appengine.google.com/ ，点击 Create an Application ，输入自己的手机号，注意前面需要写 +86 。手机收到验证码后输入验证，验证成功后GAE申请完成。然后开始创建新的APP_ID，如你创建的ID是abc ，到时获得的Gtalk群号便是 abc@appspot.com 。

第二步，部署。

1. 到 http://www.python.org/download/ 和 http://code.google.com/intl/zh-CN/appengine/downloads.html 上下载和安装 Python 和 Google App Engine SDK for Python，为部署搭建 GAE 的开发环境。已安装过的跳过这一步。
2. 解压 gtalkgroup_release.tar.gz 到任意目录。修改 m2ggg_config.py ：可以用写字板打开，修改 root_gmail 后的 Email 为你的 Gmail ，修改 protect_key1 、 protect_key2 为两个任意数。
修改 app.yaml ，把第一行的 your_program_name 改为你前面申请的ID，如 abc ；把第十行 url: / 后的 chatbridge 改成你喜欢的名字，如 ilovemim 。
3. 打开 Google App Engine Launcher ，添加这个项目：点击菜单上的 File ，点 add Existing Application ，在弹出的窗口里点 Browse... ，找到你前面解压的 gtalkgroup_release 目录 ，然后点 add 添加。
接着，点 Deploy ，输入Gmail 账号和密码，点 OK 开始上传，等待一两分钟，当看到“You can close this window now.” 这句话就表示上传已完成。


4. 打开自己的GAE，进入该应用程序的管理界面，进入 Data → Datastore Indexes ，等待右侧的 Status 全变成 Serving。部署就已经完成了。


第三步，使用。

打开 Gtalk ，输入群号添加为联系人，如 abc@appspot.com 。
打开聊天窗口，在输入框输入“//add 你的Gmail”，发送，把自己加为成员。同样，用“//admin 你的Gmail”把自己设置成管理员。
剩下的就是告诉你的好友们群号，让他们加群聊天了。群成员列表可以在 Datastore Viewer 里查看。
各种命令的使用可以到 http://io43.com/ 上看，或发送 //help 查看。
