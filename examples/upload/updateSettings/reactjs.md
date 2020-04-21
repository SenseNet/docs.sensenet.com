```javascript
const result = await repository.upload.textAsFile({
  parentPath: "/Root/System/Settings",
  contentTypeName:"Settings",
  text: " *** file text data ***",
  fileName: "MyCustom.settings",
  binaryPropertyName: "Binary",
  overwrite: true,
});
```
