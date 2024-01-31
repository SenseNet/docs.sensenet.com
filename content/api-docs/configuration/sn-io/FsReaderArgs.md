---
title: FsReaderArgs
metaTitle: "sensenet API - FsReaderArgs"
metaDescription: "FsReaderArgs"
---

## FsReaderArgs


### Configuration example:
``` json
{
  "fsReader": {
    "Path": "_value_",
    "Skip": [
      "_value_"
    ]
  }
}
```
### Environment variables example:
```
fsReader__Path="_string_value_"
fsReader__Skip="_string[]_value_"
```
### Properties:
- **Path** (`string`): Source file system folder path.
- **Skip** (`string[]`): A string array containing relative paths of the skipped subtrees.

