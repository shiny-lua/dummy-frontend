
```shell
scp -r ./build/* username@server_ip:/var/www/your_domain/html
shell

```conf
server {
    listen 443 ssl;
    server_name mongolpay-admin.deamtest.com;
    ssl_certificate /home/pawel/certs/deamtest.com.crt;
    ssl_certificate_key /home/pawel/certs/deamtest.com.key;
    root  /opt/mongolpay-admin-bundle;
    location / {
        try_files $uri /index.html;
    }
}

server {
    listen 443 ssl;
    server_name mongolpay-api.deamtest.com;
    ssl_certificate /home/pawel/certs/deamtest.com.crt;
    ssl_certificate_key /home/pawel/certs/deamtest.com.key;

    location / {
        proxy_pass http://127.0.0.1:10001;

    }
}
```

sudo vi /var/log/nginx/error.log