---
title: FsWriterArgs
metaTitle: "sensenet API - FsWriterArgs"
metaDescription: "FsWriterArgs"
---

## FsWriterArgs


### Configuration example:
``` json
{
  "fsWriter": {
    "Path": "_value_",
    "Name": "_value_",
    "Flatten": true
  }
}
```
### Environment variables example:
```
fsWriter__Path="_string_value_"
fsWriter__Name="_string_value_"
fsWriter__Flatten="_bool?_value_"
```
### Properties:
- **Path** (`string`): Target file system folder path.
- **Name** (`string`): File or folder name in the file system. Default: name of the reader's root.
- **Flatten** (`bool?`): Write everything in a single directory. Default: false.

