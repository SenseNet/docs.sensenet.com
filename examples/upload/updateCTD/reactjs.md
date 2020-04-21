```javascript
const result = await repository.upload.textAsFile({
  parentPath: "/Root/System/Schema/ContentTypes",
  contentTypeName:"ContentType",
  text: " *** file text data ***",
  fileName: "MyContentType.xml",
  binaryPropertyName: "Binary",
  overwrite: true,
});
```
