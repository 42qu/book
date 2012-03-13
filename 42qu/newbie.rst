42qu.com 入门指南 : 程序员 篇  
==============================================


登录服务器 
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

参阅  :ref:`SSH 登录 Linux服务器 流程说明 <ssh_login>` 

注意 : ssh key 已经生成 , ssh-keygen 生成密钥 命令这一句可以跳过 

登录后请 执行 passwd 命令 , 修改密码


Fork zpage 项目 到自己的帐号 
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. image::  _image/newbie/fork.png

`项目主页 <https://bitbucket.org/zuroc/zpage/src>`_  

注意 :

    #. fork的那个板块可能被折叠,  导致你看不见fork的链接 , 点击就可以把它展开

    #. 如果bitbucket提示出错, 不管它


添加自己的密钥到bitbucket  
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 
ssh中 ::

    cat ~/.ssh/id_rsa.pub

然后 , 复制粘贴 ( https://bitbucket.org/account/ssh-keys/ )

.. image::  _image/newbie/bkssh.png

    
克隆代码库
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 
   
访问 https://bitbucket.org/repo/mine , 点击进入自己的项目

.. image::  _image/newbie/hg_ssh.png

注意 , 不要用privite的项目 , 不然将来没法给官方项目提交自己的修改   

找到自己fork的项目ssh的地址 ( 注意不是https的地址 ) , 然后clone

.. image::  _image/newbie/hg_clone.png

人生充满了等待  ...


加入42qu的官方项目到 hgrc
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 

.. image::  _image/newbie/hg_clone.png

在 ~/zpage/.hg/hgrc 中加入 ::

    42qu = ssh://hg@bitbucket.org/zuroc/zpage

以后就可以通过 ::

    hg fetch 42qu

来同步官方代码到自己的fork


配置SMTP邮件服务器
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 
到 `mailgun.net <http://mailgun.net/>`_ 注册一个免费的帐号   

    .. image::  _image/newbie/mailgun.png

    找到用户名密码

    .. image::  _image/newbie/smtp.png

    编辑自己的配置文件 ::
 
        vi ~/zpage/config/user/$USER.py

    修改为刚刚注册的SMTP服务器

    .. image::  _image/newbie/smtp_config.png


数据库
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 

管理的地址 http://e1sql.42qu.us/ , 用户名密码见邮件

注意  : zpage 和 zpage_google 的共用的开发数据库 , 请不要乱动 

你可以创建自己的 zpage_xxx 数据库玩




备忘 : 管理员 
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

#. 开通开发人员的帐号

    #. 登录主机 e1 @ e1.42qu.us ::

        cd ~/zpage/misc/vps $ 
        vi vps_new.py  #设置需要开通哪些帐号 
        ./vsp_new.sh


