新机器上线流程
===============================================


做RAID 10 , 将所有硬盘整合为一个 /sda  , 也就是安装系统的时候只看到一个硬盘

安装 CentOS 系统 , 选择英文 , 机器命名 为 e2 , e3 , e3 ... e5 ...

所有东西都默认


配置网卡 
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

进入目录 /etc/sysconfig/network-scripts 

编辑或新建如下的3个文件

将其中的IP修改为机器的IP

ifcfg-eth0 
------------------------------------------
DEVICE="eth0"
HWADDR="00:25:90:66:3F:EE" #装完系统是什么就是什么, 不需要修改
NM_CONTROLLED="yes"
BOOTPROTO=none
ONBOOT="yes"
USERCTL=no
BRIDGE=xenbr0

ifcfg-eth1 
------------------------------------------
DEVICE="eth1"
HWADDR="00:25:90:66:3F:EF" #装完系统是什么就是什么, 不需要修改
NM_CONTROLLED="yes"
ONBOOT="yes"
BOOTPROTO=none
IPADDR="10.10.2.8"
NETMASK="255.255.255.0"

ifcfg-xenbr0 
------------------------------------------
DEVICE=xenbr0
TYPE=bridge
ONBOOT="yes"
BOOTPROTO=none
IPADDR="113.11.199.8"
GATEWAY="113.11.199.1"
NETMASK="255.255.255.0"



强氧 （supermicro x8dt6(e)）BIOS 设置
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
boot feature 
----------------------------------------------

quick boot :  enable
quiet boot: disable
addon rom display mode: force bios
Hit ‘DEL’Messgae Display: enable
wait for F1 if error: disable
Interrupt 19 Capture: enable

power button function : instant off
restore on ac power loss: last state
watch dog function: disable

processor & clock settings 
----------------------------------------------
C1E support: disable
Hardware Prefetcher: disabled   失败的预取会降低性能浪费内存带宽
Adjacent Cache Line Prefetcher: disable  同上
DCU Prefetcher: disable 同上
Data Reuse Optimization: enabled
MPS and ACPI MADT ordering: 默认 Modern ordering
Max CPUID Value Limit: disabled
Intel VIrtualization Tech: enabled
Execute-Disable Bit Capability: Enabled
Intel AES-NI: disable
Simultaneous Multi-Threading :enabled
Active Processor Cores: ALL
Intel EIST tech : enabled
Intel Turbo Boost: enabled
Performance/Watt select: Tranditional
Intel C-STATE tech : disabled
clock spread spectrum: disabled

==== advanced chipset settings ==========
-----CPU bridge------
QPI links speed : full
QPI Frequency: auto
QPI L0s and L1 : diabled

Memory Frequency: Auto
Memory Mode : Independent
Demand Scrubbing : disabled
pratrol Scrubbing: enabled
throttling - closed loop: disable

------ north bridge -----
Intel I/OAT:  enabled
DCA tech: enabled
DCA prefetch delay: 32
IOH PCI-e Max Payload size: 256B
Intel VT-d: enabled
active state power management: enable

===== IDE configuration =====

Configure SATA#1 as IDE   (因为有pci的raide 卡)
Hot plug : eanble

===== PCI/ PnP ====
clear NVRAM: no
SR-IOV supported: enabled

=== Advanced ACPI =====
ACPI aware O/S : yes
ACPI version feature: ACPI v2
ACPI APIC support: enabled
APIC ACPI SCI IRQ: enabled
Headless mode: disable
NUMA support: enabled
WHEA support : disabled

High precision Event Timer: enabled
PCIE native support: enabled



======参考 =======
hardware prefetch is not recommanded by oracle；
有人说  c-state不稳定且降低性能；

With both sandy and the previous gen, turbo gets disabled if you disable EIST.

QPI:
http://www.hardwaresecrets.com/printpage/Everything-You-Need-to-Know-About-The-QuickPath-Interconnect-QPI/610

Memory Mode:
http://hardforum.com/showthread.php?t=1589710

memory scrubbing:
http://www.proz.com/kudoz/english_to_spanish/computers_general/3129299-patrol_scrubbing.html

memory throttling:
http://www.infoq.com/articles/power-consumption-servers

SR-IOV
http://fedoraproject.org/wiki/Features/SR-IOV



