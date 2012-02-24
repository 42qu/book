开始旅程
==============================

准备工作
------------------------------

Editplus - Windows下的编写工具
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
#. 下载安装 ( 张沈鹏注: 我喜欢用360软件管家 ) 

#. 设置新建文件的默认编码为UTF-8 :: 

        Document -> Parmannet Setting -> File 

#. 设置默认显示HTML工具栏 ::
        
    Document -> Parmannet Setting -> File
             -> Setting & syntax -> Show HTML toolbar

#. 创建新的HTML文件 ::
    
    快捷键 Ctrl+Shift+N

HTML 基础
------------------------------

一个最基本的HTML ::

    <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
    <html>
        <head>
            <meta charset="UTF-8">
        </head>
        <body></body>
    </html>

更简单的写法 , 非标准  , Google首页是这样写的 ::

    <!doctype html>
    <html>
        <head>
            <meta charset="UTF-8">
        </head>
        <body></body>
    </html>

张沈鹏注: 我喜欢简单的写法


head 
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

标题 ::

    <title>42qu.com - 找到给你答案的人</title>

 
meta
.......................................... 

- 网页编码(字符集) ::

        <meta charset="UTF-8">

- 描述(供搜索引擎显示的这个页面的摘要) ::

        <meta name="description" content="无数故事，读完后， 一笑而过。
              下班的地铁，你还是你，我还是我。
              认识一个人， 要多少缘分？
              茫茫人海，擦肩而过多少陌生人。
              42区，这是相遇的地方 ...">




