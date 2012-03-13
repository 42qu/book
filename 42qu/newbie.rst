42qu.com 入门指南 : 程序员 篇  
==============================================


#.  参阅  :ref:`SSH 登录 Linux服务器 流程说明 <ssh_login>`, 登录服务器 

    注意 : ssh key 已经生成 , ssh-keygen 生成密钥 命令这一句可以跳过 

    登录后请 执行 passwd 命令 , 修改密码


#. Fork zpage 项目 到自己的帐号 ( `项目主页 <https://bitbucket.org/zuroc/zpage/src>`_ )

    .. image::  _image/newbie/fork.png

   然后 , 克隆代码库 :: 

        hg clone ssh://hg@bitbucket.org/帐号/zpage


管理员 备忘 
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

#. 开通开发人员的帐号

    #. 登录主机 e1 @ e1.42qu.us ::

        cd ~/zpage/misc/vps $ 
        vi vps_new.py  



