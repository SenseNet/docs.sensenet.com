---
title: "Docker image"
metaTitle: "sensenet - Docker image"
metaDescription: "sensenet - Docker image"
---

Create deployment

If we have:
- a sensenet Docker image
- an https certificate
- a persistent volume claim

for sensenet we can create a kubernetes deployment for the webapp. 

It is a simpler example of a project that use local indexing. If the project use 
Create a deployment file (sensenet-webapp-deployment.yaml) for lucene directory:
```yaml
kind: Deployment
apiVersion: apps/v1
metadata:
  name: sensenet-repository-sql-tokenauth-deploy
  labels:
        app: sensenet-repository-sql-tokenauth-app
spec:
  replicas: 1
  selector:
    matchLabels:
      app: sensenet-repository-sql-tokenauth-app
  template:
    metadata:
      labels:
        app: sensenet-repository-sql-tokenauth-app
    spec:
      containers:
      - name: sensenet-repository-sql-tokenauth-app
        image: username/sensenet-repository-sql-tokenauth:version
        env:
        - name: sensenet__Container__Name
          value: "sensenet-repository-sql-tokenauth"
        - name: ConnectionStrings__SnCrMsSql
          value: "Persist Security Info=False;Initial Catalog=sensenet.repository.sql.tokenauth;Data Source=your.sql.database.server;User ID=databaseusername;Password=databasepassword"
        - name: sensenet__authentication__authority
          value: "https://your.identity.server/"
        - name: ASPNETCORE_URLS
          value: "https://+;http://+"
        - name: ASPNETCORE_HTTPS_PORT
          value: "443"
        - name: ASPNETCORE_ENVIRONMENT
          value: "Development"
        - name: ASPNETCORE_Kestrel__Certificates__Default__Password
          value: "certificatePassword"
        - name: ASPNETCORE_Kestrel__Certificates__Default__Path
          value: "/https/your.domain.certificate.pfx"
        ports:
        - name: https
          containerPort: 443
          hostPort: 30443
        volumeMounts:
        - name: sn-cert
          mountPath: /https
        - name: sn-index
          mountPath: /app/App_Data/LocalIndex
      volumes:
        - name: sn-cert
          persistentVolumeClaim:
            claimName: sensenet-cert-pvc
        - name: sn-snaas-index
          persistentVolumeClaim:
            claimName: sensenet-index-pvc
```

then apply it for kubernetes:
```bash
kubectl apply -f sensenet-webapp-deployment.yaml
```

When the deployment is created, it will start a pod and a replicaset alongside. But to reach the sensenet repository we will have to publish on a port:
```yaml
kind: Service
apiVersion: v1
metadata:
  name: sensenet-repository-sql-tokenauth-service
spec:
  ports:
    - protocol: TCP
      port: 30443
      targetPort: 443
      nodePort: 30443
  selector:
    app: sensenet-repository-sql-tokenauth-app
  type: LoadBalancer
status:
  loadBalancer:
    ingress:
      - hostname: localhost
```

Now the above example has various metadata that depend on your environment:
- docker image is the image name and availability that you created. If it's in your docker hub, then username is for your account. If the image can be fount locally, then use the image name accordingly.
```yaml
image: username/sensenet-repository-sql-tokenauth:version
```
- connection string is for the database where your sensenet repository is sitting
```yaml
- name: ConnectionStrings__SnCrMsSql
  value: "Persist Security Info=False;Initial Catalog=sensenet.repository.sql.tokenauth;Data Source=your.sql.database.server;User ID=databaseusername;Password=databasepassword"
```
- authentication authority is the url for your idenity service 
```yaml
- name: sensenet__authentication__authority
  value: "https://your.identity.server/"
```
- use the file name for your certificate
```yaml
- name: ASPNETCORE_Kestrel__Certificates__Default__Path
  value: "/https/your.domain.certificate.pfx"
```
- if multiple Kubernetes pods are in use, set different ports if necessary
