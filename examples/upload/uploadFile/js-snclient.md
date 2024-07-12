```javascript
/**
 * upload.file will check if the file is bigger than the chunkSize
 * property in the repository object and if it is bigger it will upload in chunks.
 * file property should come from a file input
 */
const result = await repository.upload.file({
  parentPath: "/Root/Content/Documents",
  file,
  fileName: "MyFile.txt",
  binaryPropertyName: "File",
  overwrite: false,
});
```
