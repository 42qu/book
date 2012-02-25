开始战斗吧 ...
===========================================

准备 bitbucket.org 的帐号
-------------------------------------------

#TODO


克隆代码库
-------------------------------------------

在自己的 ~/ 目录下 创建 .hgrc , 内容如下, 并修改 username 为自己的个人信息

.hgrc ::
    
    [ui]
    username = XXX <xxx@gmail.com>
    verbose = True
    ssh = ssh -i ~/.ssh/id_rsa -C
    ignore = ~/.hgignore

    [extensions]
    hgext.purge=
    color=
    hgext.fetch=
    bookmarks =
    hggit =

    [color]
    status.modified = blue underline red_background
    status.added = green
    status.removed = red blue_background
    status.deleted = cyan underline
    status.unknown = magenta underline
    status.ignored = black

    diff.diffline =
    diff.extended = cyan
    diff.file_a = red
    diff.file_b = green
    diff.hunk = magenta
    diff.deleted = red
    diff.inserted = green
    diff.changed = white
    diff.trailingwhitespace = red_background

    [alias]
    blame = annotate --user --number

在自己的 ~/ 目录下 创建 .hgignore , 内容如下 ; .hgignore 用来注明不需要进行版本控制的文件

.hgignore ::
    
    syntax: glob
    *.elc
    *.pyc
    *~
    *.swp
    *.bak
    .svn
    supervise
    nohup.out

    *.htm.py
    *.txt.py
    local_config.py
    my_local_config.py
    __init_file_hash__.py
    .*.js
    .*.css
    .css_hash
    .js_hash


然后 , 克隆代码库 :: 

    hg clone ssh://hg@bitbucket.org/zuroc/zpage


配置域名解析
-------------------------------------------

网络的设置参见 http://doc.42qu.me/vmware.html

以下以 huhuchen 用户作为演示 , 大家请用自己相应的用户名 

打开 /etc/dnsmasq.conf

加入 ::

    address=/huhuchen.xxx/192.168.1.103

重启 dnsmasq ::

    sudo /etc/init.d/dnsmasq restart

访问 http://huhuchen.xxx/ 可以看到 nginx 404 的页面提示

#TODO dnsmasq 是什么?


配置 nginx
-------------------------------------------

编辑 ~/zpage/config/nginx.py  , 在这里加上自己的用户名 ::

    render_machine('krios', """
    huhuchen
    zuroc
    wooparadog
    work
    realfex
    """)

~/zpage/config/user 目录下 ::

    cp zuroc.py huhuchen.py
    hg add huhuchen.py 

修改其中域名和端口为自己的


运行脚本, 重新生成nginx配置文件 ::

    zuroc@krios ~/zpage/config $ python nginx.py
 
这里可以看到新生成的nginx配置文件 ::

    zuroc@krios ~/zpage/config $ vi nginx/krios/huhuchen.conf

重启 nginx 服务器 ::

    sudo /etc/init.d/nginx restart

注意 , 可能需要修改 /etc/nginx/nginx.conf 里面以下两行为自己的目录 ::

    include /home/zuroc/zpage/config/nginx/zpage.conf;
    include /home/zuroc/zpage/config/nginx/krios/*.conf;


运行 42qu.com zpage框架
-------------------------------------------

首先编译静态文件 ::

    huhuchen@krios ~/zpage $ python static/make.py 


然后启动开发服务器 ::

    huhuchen@krios ~/zpage $ ./server_ctrl_dev.py 


访问 http://huhuchen.xxx 就可以看到42qu.com了 :)


创建自己的分支
-------------------------------------------

首先新建自己分支 ::

    hg fetch
    hg branch huhuchen_20091012_my_first
    hg commit -m"fix"
    hg push

分支的命名规则 :  用户名_日期_功能描述


hg的用法 http://doc.42qu.me/HgUsge.html



进入开发流程
-------------------------------------------
http://doc.42qu.me/step.html
