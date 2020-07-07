---
title: "Prerequisits"
metaTitle: "sensenet - Docker prerequisits"
metaDescription: "sensenet - Docker prerequisits"
---

Requirements
This tutorial use the following tools:

- Docker repository
- Docker Desktop
- Mount disk space
- Certificate
- Services
    - identity service
    - search service*
    - sql database
- Dashboard

Docker Repository

To use docker image with kubernetes you will have to either have a docker repository (e.g. Docker hub) or with local instances set kubernetes to use local images only (imagePullPolicy: Never).

Create a Docker image for sensenet webapp or use a published example (we do not have example images yet).

Docker Desktop

This tutorial will use Docker Desktop for Windows(https://docs.docker.com/docker-for-windows/install/) to demonstrate sensenet with docker containers. Start kubernetes with Docker Desktop:
- Open Docker Desktop Dashboard
- Open Settings with cog wheel
- Select Kubernetes tab
- Check in Enable Kubernetes
- Click Apply & Restart button

You can alternatively use Minikube, but it will slightly works differently at some points.

Mount disk space

Kubernetes containers are essentially immutable instances of an application, but sensenet makes changes on filesystem at certain levels. For example it uses lucene index, can create log files. So we will have to mount a drive or folder to kubernetes. With Docker Desktop it is easy as
- open Dashboard 
- open settings with cogwheel
- select Resources tab
- select File sharing options
- with the plus sign browse a drive or a specific folder 
- click apply & restart

From now on we can use this to create a persistentVolume.

Certificate

Sensenet API uses https and so we will need a certificate to use with containers. (in progress)

This pfx will be used with the docker containers.

Services

External services, like identity service, search service or sql server are still needed, but these are not part of this tutorial. If Kubernetes environment is needed for them these can be created quite similarly.

Dashboard

Kubernetes Dashboard is not necessary for this tutorial, but nice to see visually if our efforts are not in vain. Docker Desktop not provides Kubernetes Dashboard. So it have to be deployed as well and a solution for this can be found on this link https://github.com/kubernetes/dashboard

You will probably need a token for the dasboard, it can be created with powershell as:
```powershell
$TOKEN=((kubectl -n kube-system describe secret default | Select-String "token:") -split " +")[1]
kubectl config set-credentials docker-desktop --token="${TOKEN}"
```

Then apply the dashboard
```yaml
kubectl apply -f https://raw.githubusercontent.com/kubernetes/dashboard/v2.0.3/aio/deploy/recommended.yaml
```

To make it available:
```powershell
kubectl proxy
```

Now you can use it with browser:
http://localhost:8001/api/v1/namespaces/kubernetes-dashboard/services/https:kubernetes-dashboard:/proxy/#/login

