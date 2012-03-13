42qu.com 入门指南 : 程序员 篇  
==============================================


#.  参阅  :ref:`SSH 登录 Linux服务器 流程说明 <ssh_login>`, 登录服务器 

    注意 : ssh key 已经生成 , ssh-keygen 生成密钥 命令这一句可以跳过 

    登录后请 执行 passwd 命令 , 修改密码


#. Fork zpage 项目 到自己的帐号 

    .. image::  _image/newbie/fork.png

    `项目主页 <https://bitbucket.org/zuroc/zpage/src>`_  

    注意 :
 
        #. fork的那个板块可能被折叠,  导致你看不见fork的链接 , 点击就可以把它展开

        #. 如果bitbucket提示出错, 不管它


#. 添加自己的密钥到bitbucket  
 
    ssh中 ::
    
        cat ~/.ssh/id_rsa.pub

    然后 , 复制粘贴

    .. image::  _image/newbie/bkssh.png

    
#. 克隆代码库 
   
    访问 https://bitbucket.org/repo/mine , 点击进入自己的项目
    
    .. image::  _image/newbie/hg_ssh.png

    找到自己fork的项目ssh的地址 ( 注意不是https的地址 )

    .. image::  _image/newbie/hg_clone.png
    

#. 加入42qu的官方项目到 hgrc

   .. image::  _image/newbie/hg_clone.png

   在 ~/zpage/.hg/hgrc 中加入 ::

        42qu = ssh://hg@bitbucket.org/zuroc/zpage

   以后就可以通过 ::

        hg fetch 42qu
    
   来同步官方代码到自己的fork




管理员 备忘 
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

#. 开通开发人员的帐号

    #. 登录主机 e1 @ e1.42qu.us ::

        cd ~/zpage/misc/vps $ 
        vi vps_new.py  



