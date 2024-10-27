# Docker

## Docker Hub

官方镜像

## Docker 命令

运行容器

```shell
docker container run <name>
```

停止容器

```shell
docker container stop <name or ID>
```

查看正在运行的容器

``` shell
docker container ls
```

查看所有容器

```shell
docker container ps -a
```

查看所有容器的id

```shell
docker container ps -aq
```

操作符

``` shell
$()
```

容器端口映射

```shell
docker container run -p <server port>:<container port> <name>
```

detached模式

```shell
docker run -d -p 80:80 <name>
```

