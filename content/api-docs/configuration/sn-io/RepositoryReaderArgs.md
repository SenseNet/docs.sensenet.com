---
title: RepositoryReaderArgs
metaTitle: "sensenet API - RepositoryReaderArgs"
metaDescription: "RepositoryReaderArgs"
---

## RepositoryReaderArgs


### Configuration example:
``` json
{
  "repositoryReader": {
    "Url": "_value_",
    "Path": "_value_",
    "BlockSize": 0,
    "Filter": "_value_",
    "Authentication": {
      "ClientId": "_value_",
      "ClientSecret": "_value_",
      "ApiKey": "_value_"
    }
  }
}
```
### Environment variables example:
```
repositoryReader__Url="_string_value_"
repositoryReader__Path="_string_value_"
repositoryReader__BlockSize="_int?_value_"
repositoryReader__Filter="_string_value_"
repositoryReader__Authentication="_RepositoryAuthenticationOptions_value_"
```
### Properties:
- **Url** (`string`): Repository url.
- **Path** (`string`): Content path in the repository. Default: /Root
- **BlockSize** (`int?`): Number of loaded contents per request. Default: 10.
- **Filter** (`string`): Content query filter for reading contents from the repository.
- **Authentication** (`RepositoryAuthenticationOptions`): 

