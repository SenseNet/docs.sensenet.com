---
title: "Import/export tool"
metaTitle: "sensenet - Configuring the import/export tool"
metaDescription: "Configuring the import/export tool"
---

This section contains configuration for the import/export tool.

## Configuration example

**WARNING** This is a sample configuration containing example values. Do not use it without modifying it to reflect your environment.
``` json
{
  "fsReader": {
    "Path": "_stringValue_"
  },
  "fsWriter": {
    "Path": "_stringValue_",
    "Name": "_stringValue_",
    "Flatten": true
  },
  "repositoryReader": {
    "Url": "_stringValue_",
    "Path": "_stringValue_",
    "BlockSize": 0,
    "Filter": "_stringValue_",
    "Authentication": {}
  },
  "repositoryWriter": {
    "Url": "_stringValue_",
    "Path": "_stringValue_",
    "Name": "_stringValue_",
    "Authentication": {},
    "UploadChunkSize": 0
  },
  "display": {
    "Level": "_stringValue_",
    "DisplayLevel": "_enum_value_of_SenseNet.IO.CLI.DisplayLevel_"
  }
}
```
