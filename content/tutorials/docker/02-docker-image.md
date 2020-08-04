---
title: "Docker image"
metaTitle: "sensenet - Docker image"
metaDescription: "sensenet - Docker image"
---

Clone Repository
You will need a webapp of course, for this example I will clone our example repository:

```bash
git clone https://github.com/SenseNet/sn-vs-projecttemplates
```

Create Docker image

From our examples I've choosed SnWebApplication.Api.InMem.TokenAuth as it don't use that much resources and eligible for this example example. To create a docker image the example template has a sample dockerfile so I will use that.

from solution folder:
```bash
docker build -t sensenet-api-memdb-img -f .\SnWebApplication.Api.InMem.TokenAuth\Dockerfile .
```

```bash
docker build -t sensenet-api-sqldb-img -f .\SnWebApplication.Api.Sql.TokenAuth\Dockerfile .
```
