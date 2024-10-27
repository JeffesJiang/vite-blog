# Linux

## Node 阿里云源

### n

```shell
# 设定环境变量

export NODE_MIRROR=https://mirrors.aliyun.com/nodejs-release/

# 然后正常使用 n 即可

sudo n stable
```

### fnm

```shell
# 设定环境变量

export FNM_NODE_DIST_MIRROR=https://mirrors.aliyun.com/nodejs-release/

# 然后正常使用 fnm 即可

fnm install <version>
```

### nvm

```shell
# 设定环境变量

export NVM_NODEJS_ORG_MIRROR=https://mirrors.aliyun.com/nodejs-release/

# or

export NVM_NODEJS_ORG_MIRROR=https://npmmirror.com/mirrors/node/


# 然后正常使用 nvm 即可

nvm install <version>
```

## Node 腾讯云源

- 公网访问地址：
  http://mirrors.tencent.com/

- 内网访问地址：
  http://mirrors.tencentyun.com/

### n

```shell
# 设定环境变量

export NODE_MIRROR=http://mirrors.cloud.tencent.com/nodejs-release/

# 然后正常使用 n 即可

sudo n stable
```

### fnm

```shell
# 设定环境变量

export FNM_NODE_DIST_MIRROR=http://mirrors.cloud.tencent.com/nodejs-release/

# 然后正常使用 fnm 即可

fnm install <version>
```

### nvm

```shell
# 设定环境变量

export NVM_NODEJS_ORG_MIRROR=http://mirrors.cloud.tencent.com/nodejs-release/

# 然后正常使用 nvm 即可

nvm install <version>
```

# Windows

## nvm

```text
# settings.txt

root: D:\dev\nvm
path: D:\dev\nodejs
node_mirror: https://npmmirror.com/mirrors/node/
npm_mirror: https://npmmirror.com/mirrors/npm/
```

# npm

```shell
npm config set registry https://registry.npmmirror.com
```

#

```shell
sudo docker image pull rustdesk/rustdesk-server
sudo docker run --name hbbs -p 21115:21115 -p 21116:21116 -p 21116:21116/udp -p 21118:21118 -v `pwd`:/root -td --net=host rustdesk/rustdesk-server hbbs -r <relay-server-ip[:port]>
sudo docker run --name hbbr -p 21117:21117 -p 21119:21119 -v `pwd`:/root -td --net=host rustdesk/rustdesk-server hbbr

docker run --name hbbs -v `pwd`:/root -td --net=host rustdesk/rustdesk-server hbbs
docker run --name hbbr -v `pwd`:/root -td --net=host rustdesk/rustdesk-server hbbr
```
