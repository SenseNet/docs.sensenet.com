```
POST https://example.com/OData.svc/Root/System('Settings')/Upload?metadata=no

models=[{
  "FileName":"MyCustom.settings",
  "ContentType":"Settings",
  "PropertyName":"Binary",
  "UseChunk":false,
  "Overwrite":true,
  "FileLength":13,
  "FileText":"{Key:'Value'}"
}]
```
