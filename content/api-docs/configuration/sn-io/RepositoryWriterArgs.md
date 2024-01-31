---
title: RepositoryWriterArgs
metaTitle: "sensenet API - RepositoryWriterArgs"
metaDescription: "RepositoryWriterArgs"
---

## RepositoryWriterArgs


### Configuration example:
``` json
{
  "repositoryWriter": {
    "Url": "_value_",
    "Path": "_value_",
    "Name": "_value_",
    "Authentication": {
      "ClientId": "_value_",
      "ClientSecret": "_value_",
      "ApiKey": "_value_"
    },
    "UploadChunkSize": 0,
    "CreateOnly": true
  }
}
```
### Environment variables example:
```
repositoryWriter__Url="_string_value_"
repositoryWriter__Path="_string_value_"
repositoryWriter__Name="_string_value_"
repositoryWriter__Authentication="_RepositoryAuthenticationOptions_value_"
repositoryWriter__UploadChunkSize="_int_value_"
repositoryWriter__CreateOnly="_bool_value_"
```
### Properties:
- **Url** (`string`): Repository url.
- **Path** (`string`): Content path in the repository. Default: /
- **Name** (`string`): Target name under the container. Default: name of the reader's root.
- **Authentication** (`RepositoryAuthenticationOptions`): 
- **UploadChunkSize** (`int`): Number of bytes sent to the server in one chunk during upload operations. Default: 10 MB
- **CreateOnly** (`bool`): True if only the creation is allowed and updates are omitted.

