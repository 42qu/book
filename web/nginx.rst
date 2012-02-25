nginx
==================================================================





安装nginx
------------------------------------------------------------------





配置nginx
------------------------------------------------------------------
配置文件目录 /etc/nginx/nginx.conf

配置信息 ::

    user www-data;
    worker_processes  1;

    error_log  /var/log/nginx/error.log;
    pid        /var/run/nginx.pid;


    events {
    worker_connections  1024;
    }

    http {
    include       /etc/nginx/mime.types;
    default_type  application/octet-stream;

    access_log  /var/log/nginx/access.log;

    sendfile        on;
    #tcp_nopush     on;

    #keepalive_timeout  0;
    keepalive_timeout  65;
    tcp_nodelay        on;

    gzip  on;

    #include /etc/nginx/conf.d/*.conf;
    include /etc/nginx/sites-enabled/*;

    server {
         listen 80;
        server_name book.42qu.com;

        location / {
        root /home/huhuchen/book/_build/html;
        
        index index.html index.htm;

        }
        }
    }
   

错误日志查看
-----------------------------------------------------------------
上文中配置文件中错误日志目录为/var/log/nginx/error.log


输入命令 tail /var/log/nginx/error.log,则每次浏览器访问站点的错误信息都会被更新至该日志 



