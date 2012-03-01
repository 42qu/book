Gentoo 发行版
===============================================

软件安装 - 包管理 
---------------------------------

eix : 搜索软件
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
安装eix ::

    emerge eix

#. 软件包搜索（搜索名字）::
    
    eix key_word

#. 软件包搜索（搜索内容）::
    
    eix -S key_word

#. 与本地portage同步 ::

    eix-update

#. 把emerge --sync 与 eix-update 一并做成 ::

    eix-sync

#. 在某个具体类别中搜索软件名 ::

    eix -C media-video cam

#. 在已安装包中搜索软件名 ::

    eix -I key_word

emerge : 安装软件
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

#. 安装软件 ::

    emerge package_name

#. 更新软件并更新它直接依赖的其它软件包 ::

    emerge -u package_name

#. 更新一个软件并更新它依赖的软件包以及它们依赖的所有软件包, 这里大写的D相当于--deep ::
    
    emerge -uD package_name

#. 软件包卸载::
    
    emerge -C package_name

#. 清除所有失去依赖关系的软件包::
    
    emerge -c


equery : 查看已安装的软件
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

安装此工具： emerge gentoolkit

#. 列出所有已安装包::

        equery list 

   简写::

        equery l

#. 查看已安装包装了哪些内容 ::
         
        equery files package_name
 
   简写 ::

        equery f package_name

#. 查看一个程序foo隶属于哪个包 ::

        equery belongs foo 

   简写::

        query b foo

#. 查看哪些包依赖于package_name ::

        equery depends package_name 
    
   简写 ::
        
        equery d package_name

#. 查看已安装包用了哪些USE ::
    
        equery uses package_name

   简写::

        equery u package_name



