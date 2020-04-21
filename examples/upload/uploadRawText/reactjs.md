```javascript
const result = await repository.upload.textAsFile({
  parentPath: "/Root/Content/IT/Document_Library",
  text: " *** file text data ***",
  fileName: "MyMarkdown.md",
  binaryPropertyName: "Binary",
  overwrite: true,
});
```
