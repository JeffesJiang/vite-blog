# 数据库

## 安裝

### MySQL

Docker下安裝最新版

```shell
docker run --name mysql --restart=always -p 3306:3306 -e MYSQL_ROOT_PASSWORD=123456 -d mysql
```