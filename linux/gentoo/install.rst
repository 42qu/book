Windows下硬盘安装Gentoo
*************************************************


在电脑城配服务器 的时候 , 预装了windows7 , 我并没有买光驱, 因而硬盘安装gentoo

首先下载 gentoo Weekly Minimal Install CD ( 网址
http://www.gentoo.org/main/en/where.xml )

我用的版本 是 install-amd64-minimal-20100408.iso

下载后, 新开一份分区 格式化为 FAT32 .

解压iso 中的 livecd, image.squashfs 和 isolinux 到新建分区的根目录 .

解压工具可以用 7zip ( http://www.7-zip.org/  ).

然后下载 超级急救盘 2010.01.02 硬盘版 ( http://www.onlinedown.net/soft/33878.htm ), 安装.

在 windows的  文件 -> 查看 -> 选择显示隐藏文件

进入 C:\dosh\gho1 用记事本打开 menu.lst, 加入类似如下的内容 ::

    title gentoo
    root (h0,1)
    kernel /isolinux/gentoo root=/dev/ram0 init=/linuxrc looptype=squashfs
    loop=/image.squashfs cdroot udev nodevfs  vga=791 dokeymap
    initrd /isolinux/gentoo.igz


其中 root (h0,1) 是用来标识启动所需文件所在的分区


分区编号
...............................................................

hd（X,Y）中的X是指计算机中的第几块硬盘,编号从0开始，在BIOS中设置引导的第一块硬盘为0，其他的硬盘按照IDE号的顺序排列，依次为 1，2，3，……。

Y是指硬盘中划分出来的第几个分区。编号从0开始，其他的分区依次为1，2，3，……

需要注意的是：0，1，2，3是指硬盘中 的主分区

如是扩展分区，那么编号将从4 开始，一直到最后一个扩展分区。


