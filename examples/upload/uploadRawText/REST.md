```
POST https://localhost:44362/OData.svc/Root/Content('Documents')/Upload?metadata=no

models=[{
  "FileName":"MyFile.txt",
  "ContentType":"File",
  "PropertyName":"Binary",
  "UseChunk":false,
  "Overwrite":true,
  "FileLength":24,
  "FileText":"**** file text data ****"
}]
```
