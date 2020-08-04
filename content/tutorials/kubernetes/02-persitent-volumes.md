---
title: "Docker image"
metaTitle: "sensenet - Docker image"
metaDescription: "sensenet - Docker image"
---

Reserved space on file system

As mentioned in prerequisits, sensenet needs file system at some points for various reasons. For this kubernetes provides the Persitent Volumes. 

for example create a pv file (sensenet-index-pv.yaml) for lucene directory:
```yaml
apiVersion: v1
kind: PersistentVolume
metadata:
    name: sensenet-index-pv
    labels:
      type: local
spec:
    storageClassName: hostpath
    capacity:
      storage: 1Gi
    accessModes:
      - ReadWriteOnce 
    hostPath:
      path: "/d/directory/path/for/lucene/index"
```

then apply it for kubernetes:
```bash
kubectl apply -f sensenet-index-pv.yaml
```

Now that we have created this resource we have to claim it to use with a pod (sensenet-index-pvc.yaml). 
```yaml
apiVersion: v1
kind: PersistentVolumeClaim
metadata:
  name: sensenet-index-pvc
spec:
  storageClassName: hostpath
  accessModes:
    - ReadWriteOnce
  resources:
    requests:
      storage: 1Gi
```
*ReadWriteOnce means it can be used with one pod only

then apply it too for kubernetes:
```bash
kubectl apply -f sensenet-index-pvc.yaml
```

Every file operation we will have to use with sensenet, we have to create a Persistent Voluem and a Claim for it.
In this tutorial we use 2 pvc:
- sensenet-index-pvc for lucene indexing
- sensenet-cert-pvc to add a certificate for https
