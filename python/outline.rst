讲义
====

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

    + 默认参数、具名参数、变长参数表(``*argli``)、变长具名参数表(``**argdi``)
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

  - 控制结构不引入内层名字空间……demo
  - 闭包 (closure)
  - 变量的引用语义

    + 不可变对象(数值类型、str, tuple)
    + ``id()`` 内建函数
    + 小对象池
    + dict 的键须为不可变对象； ``hash`` 和 ``__hash__()``

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

    + 手工调用的父类 ``__init__`` (Explicit is better than implicit)


