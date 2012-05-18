42qu.com 代码实战篇 
========================================

首先 , 每天开始写代码前先hg fetch一下代码 , 更新到最新版本 ;

这是个好习惯, 可以避免很多不必要的代码冲突 ; 

另外, fork的分支 , 需要先 fetch 42qu (参考SSH开发帐号开通邮件的教程), 可能才能看到以下的教程中的分支和改动


然后我们开始一个新模块前会新建一个新的分支 ::

    hg branch zuroc_20120518_vps_ip

注意这里的分支命名规则 ::
    
    自己常用英文名字_日期_分支名称


分支创建完成后建议先commit一次 , 方便将来查看这个分支的修改diff ::

    z32@e1 ~/zpage $ hg commit -m"fix"
    committed changeset 14277:8367ebf5b632


在 $HOME/.hgrc 中的[alias]小结下添加这一行 ::

    bdiff = diff -r "max(ancestors('$1') and branch(default)):'$1'"

然后可以通过::

    hg bdiff zuroc_20120518_vps_ip

来方便查看这个分支的改动了 :)


实战案例
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. toctree::

    war/1

