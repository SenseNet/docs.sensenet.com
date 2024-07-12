```javascript
const result = await repository.upload.textAsFile({
  parentPath: "/Root/Content/My Documents",
  text: " *** file text data ***",
  fileName: "MyFile.txt",
  binaryPropertyName: "Binary",
  overwrite: true,
});
```
