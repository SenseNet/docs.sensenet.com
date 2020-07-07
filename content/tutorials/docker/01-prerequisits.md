---
title: "Prerequisits"
metaTitle: "sensenet - Docker prerequisits"
metaDescription: "sensenet - Docker prerequisits"
---

Requirements
This tutorial use the following tools:

Git CLI
Docker 
Certificate
    mkcert
    openssl CLI

We have a GitHub repository with a set of sample projects for various cases.

Git CLI

This tool will be used to clone our example project templates repository. If you use your own project created as Install from scratch you can skip this.

Docker 

This tutorial will use Docker Desktop for Windows(https://docs.docker.com/docker-for-windows/install/) to demonstrate sensenet with docker containers.

Certificate

Sensenet API uses https and so we will need a certificate to use with containers. As I experienced docker containers doesn't appreciate dev certificates so I will create a self signed certificate to use. Of course if you have a certificate you can use that and skip this part. For this I will use mkcert(https://github.com/FiloSottile/mkcert/releases) and openssl(http://wiki.overbyte.eu/wiki/index.php/ICS_Download#Download_OpenSSL_Binaries_.28required_for_SSL-enabled_components.29) cli.

First to create a crt file:
```bash
. \sensenet\tools\mkcert\mkcert-v1.4.1-windows-amd64.exe -cert-file \sensenet\cert\host.docker.internal.crt -key-file \sensenet\cert\host.docker.internal.key -install host.docker.internal *.host.docker.internal localhost 127.0.0.1 ::1
```

these files are created:
    host.docker.internal.crt
    host.docker.internal.key

2.
```bash
. \sensenet\tools\openssl\openssl.exe pkcs12 -export -out \sensenet\cert\host.docker.internal.pfx -inkey \sensenet\cert\host.docker.internal.key -in \sensenet\cert\host.docker.internal.crt -password pass:secretpassword
```

the file is created:
    host.docker.internal.pfx

This pfx will be used with the docker containers.