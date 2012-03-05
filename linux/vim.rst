Linux
=====

* Unix - what defines Unix?

  - 统一的名字空间 (一切皆文件, fd)

    + ``mount(1)``, devfs - udev(7)
    + 虽然在网络和 GUI 编程方便被背弃——BSD 风格套接字

  - 标准化的命令行交互环境
  - 简短的系统调用名字……
  - Plan 9 from Bell Labs

    + 真正统一的 API 和名字空间
    + /proc 和 /sys 对 Unix 的回归

* Linux

  - 和 \*BSD 一起，最流行的自由的 Unix 的变体
  - 最为成功的自由软件项目之一
  - `GNU/Linux`
  - 各种 distro

    + Redhat / CentOS / Scientific; Fedora
    + SUSE; openSUSE
    + Debian; Ubuntu
    + Arch
    + Gentoo

* Shell

  - 概览：历史、各种乱七八糟的变种(bourne shell, csh; tcsh, bash, zsh)
  - POSIX, POSIX shell, POSIX 工具集, man 1p
  - POSIX ~= Unix (~=: 约等于)

* shell 基本命令和工具

  - 命令：分词和展开； intro(1) 
  - 内建命令 cd, pwd, exec, exit, type
  - 目录操作 ls, mkdir, rmdir
  - 文件操作 touch, mv, cp, chmod, chown

    + mod bit: [ugo]rwx, ls -l

  - 通用选项 -R, -f, -i (Thanks to POSIX)
  - . 和 ..；dotfile
  - man, manpage section

    + Linux has 1. user command 2. syscall 7. misc 8: admin command etc.
    + ascii(7)
    + section 1p and 3p (p for POSIX)

  - 很多常用工具都是对系统调用的封装

    + cd(1) - chdir(2)
    + chmod(1) - chmod(2)
    + mkdir(1) - mkdir(2)
    + stat(1) - stat(2)
    + ...

* 文本工具

  - cat (文本连接；管道中的单位元), tee (文本流复用)
  - grep (过滤 filter), sed (映射 map)
  - Unix 正则表达式(BRE, ERE)

    + BRE 和 ERE 表达力是一样的……只是语法不同
    + BRE: first-class meta-characters: ^ $ [ ] . *
    + ERE: grep -E, sed -r

  - diff
  - 用例： sed -i 和 diff

* I/O 重定向和管道

  - stdin(fd=0), stdout(fd=1), stderr(fd=2)
  - 简单重定向 demo
  - 用例：随机噪音生成器::
    cat /dev/urandom | base64 | seq '10q'

  - 用例： ``tar c file1 file2 > a.tar`` 和 ``tar x < a.tar``

.. 以上是第一节课

* shell 编程

  - 真与假 (``main()`` 的返回值)
  - && 和 ||
  - 控制流：if, for, while
  - shell 语法原则“只有第一个单词是特殊的”
  - 变量赋值和引用： ``=`` 和 ``$``
  - Quoting hell: POSIX shell 和后 POSIX shell

    + POSIX shell 中未加引号的变量可能展开成多个单词
    + zsh 中一个变量只展开为一个单词

  - ``$()`` 和 ``\`\```

* zsh

  - Mr. Everything

    + 兼容一切！
    + 25696 行的 manpage
    + Evil but practical for interactive use

  - Tab 补全 demo

    + 菜单
    + a.b -> ablah.bblah

  - 语法高亮
  - RPS：右侧提示符

* sysadmin 常用工具

  - sudo
  - ack

    + 插播 shell demo: 计算 ack 源码实际行数::
      cat $(which ack) | sed -r '/^\s*\}?$/d' | wc -l

  - htop, ps
  - ping, mtr
  - ip addr/route, iptables (Linux only)
  - lsof, lsof -i
  - 各个 distro 的包管理器

* Vi 基础

  - Bill Joy 和他的键盘
  - 有模式编辑器：丰富而简短的命令
  - 方向键 hjkl；跳转命令 G gg
  - 动宾结构的编辑命令 dw cW c$ dd
  - 数字修饰符
  - 模式穿梭命令 i a Esc ^C
  - Ex 命令 :wq :s
  - 搜索 / 和 ?

* Vim

  - 丰富而复杂的选项
  - 很挫的脚本语言 (We're stuck with it)

    + 丰富的插件 (不过当然比不上 Emacs 啦)

  - 非常完整的文档
    + :help [keyword]

  - 分屏
    + :split - Think about fork(3)
    + :edit  - Think about exec(3)
    + :split [fname]
    + :vsplit
    + 甚至还有标签页 (:tabnew, gt, gT)

  - 语法高亮
  - 代码折叠 (zo zc ...)
  - tag 跳转 (``ctags -R .``)
  - Tab 补全 (我不用……)
  - 标准插件：文件管理器 netrw
  - 第三方插件： zencoding

.. 以上是第二课

Python
======

* Python 之零

  - Guido van Rossum (CWI, Google)
  - Google 的主力语言之一 (besides Java and C++)
  - 当今最干净的编程语言之一
  - 表达力强大，可惜性能不足

    + 八卦：高性能的动态语言……Lua 和 JavaScript

  - 启发：Perl (基本上都是反例), ABC (CWI)
  - Zen of Python: ``import this``

* Python 之一

  - Python 2 vs Python 3 (stick to py2 for now)
  - Interactive shell (REPL Read-Eval-Print Loop)
  - ipython, bpython

    + ipython 的 ``?``

* 动态类型：抛弃模板

  - 相加的例子……
  - ``def`` 关键字

* 内建数据类型和操作

  - int and long, float, str

    + long: 内建高精度整数运算
    + complex (j)

  - ``+ - * /``

    + / 在 py2 和 py3 中的差异
    + 没有 int/str 的隐式转换
    + str * int

  - ``type()`` 内建函数
  - dict, list, tuple, set

    + 容器都是 heterogeneous 的
    + 类型转换：class as callable
    + ``callable()`` 内建函数
    + 多返回值(tuple)
    + ``del``

  - ``dir()`` 内建函数
  - magical underscore (__xx__)

    + like meta-table in Lua

  - 格式化操作符 ``%``

    + 万能的 ``%s`` 和 ``%r``
    + ``str`` 和 ``repr`` ； ``__str__`` 和 ``__repr__``

* 基本语法结构

  - 基于缩进(和冒号)的层级结构
  - "Words are better than punctuations"

* 基本控制结构

  - 不需要多余的圆括号
  - if, while (nothing special)
  - for - 只有 generic for。模拟传统数值 for::
    for i in range(n):

  - ``break``, ``continue``
  - 占位符 ``pass``
  - 再提 ``def``

    + 默认参数、具名参数、变长参数表、变长具名参数表
    + docstring ``__doc__``

  - 生成器(不对称协程, asymetric coroutine) ``yield`` 关键字
  - 避免名字和关键字冲突：末尾加 ``_``

* 名字空间和模块

  - ``import`` 和 ``from x import y``
  - ``import __builtin__``
  - 全局名字空间和局部名字空间

    + 赋值即绑定
    + ``globals()`` 和 ``locals()``
    + ``global`` 关键字

  - 控制结构不引入名字空间……demo
  - 闭包
  - 变量的引用语义
    + 不可变对象(数值类型、str, tuple)
    + ``id()`` 内建函数
    + 小对象池
    + dict 键值的限制； ``__hash__()``

* 模块层次

  - ``sys.path``
  - module.py or module/__init__.py

.. 以上是第三节课

* OO 初探：内建类型的方法

  - str 内建方法

    + str 是不可变对象。So...

  - list 内建方法

    + 重载的 + 和 *

  - dict 内建方法

* OO 之类定义

  - ``class`` 关键字； ``__init__``
  - 对象方法， ``self``

    + 和 Lua 的不同
    + 被施咒的函数 (bound method)

  - 私有成员 ``__foo``

    + 内部原理：名字修饰
    + No true constants, no true private members

  - 类成员 (shared member, static member)

    + Functions? No way...

* OO 之类层次

  - 继承；根类型 object
  - 没有隐含的 init 传递

    + 父类 ``__init__`` 的手工调用 (Explicit is better than implicit)


