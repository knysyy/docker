# docker-nginx-ssl

## 概要
dockerにsslでアクセスする用。

例) PWA(ファイアーウォールの許可が必要)
```
> netsh interface portproxy add v4tov4 listenport=443 listenaddress=<local ip> connectport=443 connectaddress=0.0.0.0
# リセット方法
> netsh interface portproxy reset
```

## 使用方法
ssl.confを差し替えて使用を想定。

```
$ docker build -t nginx:<label> .
$ docker run -d --name nginx -p 443:443 nginx:<label>
```
