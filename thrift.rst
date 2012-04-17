Thrift 
=======================



安装
~~~~~~~~~~~~~~~~~~~~~~~

Centos 和 Ubuntu 可以直接安装 , 参见

    http://thrift.apache.org/docs/install/

Gentoo 安装方式 如下 ::

    emerge layman
    echo 'source /var/lib/layman/make.conf' >> /etc/make.conf
    layman -sync
    layman -a OSSDL
    eix-update
    emerge dev-libs/thrift


使用
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

教程见

http://svn.apache.org/repos/asf/thrift/trunk/tutorial/

看 tutorial.thrift 即可

thrift --gen <language> <Thrift filename> 

python 的 language 名称是 py

生成以后 看

http://svn.apache.org/repos/asf/thrift/trunk/tutorial/py/

这里 , 学习怎么写
