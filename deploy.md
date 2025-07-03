###### Server

# 更新系统
sudo apt update && sudo apt upgrade -y

# 安装基础工具
sudo apt install -y curl git build-essential

# 使用 NodeSource 安装最新 LTS 版本
curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
sudo apt install -y nodejs

# 验证安装
node -v
npm -v

# 安装 Nginx
sudo apt install -y nginx

# 启动并启用开机自启
sudo systemctl start nginx
sudo systemctl enable nginx

```bash
# 克隆您的 React 项目
git clone https://github.com/your-username/your-react-app.git
cd your-react-app

# 安装依赖
npm install

# 构建生产版本
npm run build

# 将构建文件移动到 Nginx 目录
sudo mkdir -p /var/www/your-domain.com
sudo cp -r build/* /var/www/your-domain.com

# 设置权限
sudo chown -R www-data:www-data /var/www/your-domain.com
sudo chmod -R 755 /var/www/your-domain.com
```

sudo nano /etc/nginx/sites-available/your-domain.com

server {
    listen 80;
    listen [::]:80;
    
    server_name your-domain.com www.your-domain.com;
    
    root /var/www/your-domain.com;
    index index.html;
    
    # 启用 Gzip 压缩
    gzip on;
    gzip_vary on;
    gzip_proxied any;
    gzip_comp_level 6;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;
    
    # 安全头
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-XSS-Protection "1; mode=block" always;
    add_header Strict-Transport-Security "max-age=31536000; includeSubDomains; preload" always;
    
    # React 路由支持
    location / {
        try_files $uri $uri/ /index.html;
    }
    
    # 静态资源缓存
    location ~* \.(?:js|css|png|jpg|jpeg|gif|ico|svg)$ {
        expires 1y;
        add_header Cache-Control "public, no-transform";
        access_log off;
    }
    
    # 禁止访问隐藏文件
    location ~ /\. {
        deny all;
        access_log off;
        log_not_found off;
    }
    
    # 错误页面
    error_page 404 /404.html;
    location = /404.html {
        internal;
    }
    
    error_page 500 502 503 504 /50x.html;
    location = /50x.html {
        internal;
    }
}

sudo ln -s /etc/nginx/sites-available/your-domain.com /etc/nginx/sites-enabled/
sudo rm /etc/nginx/sites-enabled/default  # 移除默认配置
sudo nginx -t  # 测试配置
sudo systemctl reload nginx  # 重新加载 Nginx


# 安装 Certbot
sudo apt install -y certbot python3-certbot-nginx

# 获取并安装 SSL 证书
sudo certbot --nginx -d your-domain.com -d www.your-domain.com

# 设置自动续期
sudo certbot renew --dry-run


# 启用防火墙
sudo ufw enable

# 允许 SSH
sudo ufw allow OpenSSH

# 允许 HTTP/HTTPS
sudo ufw allow 'Nginx Full'

# 查看状态
sudo ufw status

##### 8. 优化配置 (可选但推荐)
#1. 启用 Brotli 压缩:
sudo nano /etc/nginx/nginx.conf

# 在 http 块中添加
brotli on;
brotli_comp_level 6;
brotli_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript image/svg+xml;

#2. 性能调优:
# 在 /etc/nginx/nginx.conf 的 http 块中添加
server_tokens off;  # 隐藏 Nginx 版本
client_max_body_size 20M;  # 最大上传大小
keepalive_timeout 30;  # 保持连接时间

#3. 文件缓存:
# 在 http 块中添加
open_file_cache max=1000 inactive=20s;
open_file_cache_valid 30s;
open_file_cache_min_uses 2;
open_file_cache_errors on;


# 实时查看访问日志
sudo tail -f /var/log/nginx/access.log

# 查看错误日志
sudo tail -f /var/log/nginx/error.log


##### 设置自动部署脚本 (deploy.sh):

```
#!/bin/bash

# 进入项目目录
cd /path/to/your-react-app

# 获取最新代码
git pull origin main

# 安装依赖
npm install

# 构建应用
npm run build

# 复制构建文件
sudo rm -rf /var/www/your-domain.com/*
sudo cp -r build/* /var/www/your-domain.com

# 设置权限
sudo chown -R www-data:www-data /var/www/your-domain.com

# 重启 Nginx
sudo systemctl restart nginx

echo "Deployment completed!"
```
# 设置可执行权限：

chmod +x deploy.sh



##### 4. 性能优化
使用 npm run build -- --profile 分析构建

在 React 中启用代码分割

使用 React.lazy() 延迟加载组件


# 5. 安全加固
# 防止点击劫持
sudo nano /etc/nginx/snippets/security-headers.conf

add_header X-Frame-Options "SAMEORIGIN" always;
add_header Content-Security-Policy "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data:;" always;

# 在 Nginx 配置中包含：
include snippets/security-headers.conf;

# 设置日志轮转：
# /etc/logrotate.d/nginx
/var/log/nginx/*.log {
    daily
    missingok
    rotate 14
    compress
    delaycompress
    notifempty
    create 0640 www-data adm
    sharedscripts
    postrotate
        /etc/init.d/nginx reload >/dev/null 2>&1
    endscript
}

# 启用Nginx缓存：

# 在http块中添加
proxy_cache_path /var/cache/nginx levels=1:2 keys_zone=static_cache:10m inactive=60d use_temp_path=off max_size=1g;

# 在server块中使用
location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg)$ {
    proxy_cache static_cache;
    proxy_cache_valid 200 60d;
    add_header X-Cache-Status $upstream_cache_status;
}