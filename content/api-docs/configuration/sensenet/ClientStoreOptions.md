---
title: ClientStoreOptions
metaTitle: "sensenet API - ClientStoreOptions"
metaDescription: "ClientStoreOptions"
---

## ClientStoreOptions

// This class is a mirror of some parts of the AuthenticationOptions class in the services layer
// so that we can have the same property values here without having to configure them twice.

### Configuration example:
``` json
{
  "sensenet": {
    "Authentication": {
      "Authority": "_value_",
      "RepositoryUrl": "_value_",
      "DefaultClientUserInternal": "_value_",
      "DefaultClientUserExternal": "_value_"
    }
  }
}
```
### Environment variables example:
```
sensenet__Authentication__Authority="_string_value_"
sensenet__Authentication__RepositoryUrl="_string_value_"
sensenet__Authentication__DefaultClientUserInternal="_string_value_"
sensenet__Authentication__DefaultClientUserExternal="_string_value_"
```
### Properties:
- **Authority** (`string`): Url of the authentication authority - for example IdentityServer.
- **RepositoryUrl** (`string`): Repository url.
- **DefaultClientUserInternal** (`string`): 
- **DefaultClientUserExternal** (`string`): 

