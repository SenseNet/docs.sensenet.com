---
title: RegistrationOptions
metaTitle: "sensenet API - RegistrationOptions"
metaDescription: "RegistrationOptions"
---

## RegistrationOptions


### Configuration example:
``` json
{
  "sensenet": {
    "Registration": {
      "Groups": ["_value1_", "_value2_"],
      "UserType": "_value_",
      "ParentPath": "_value_"
    }
  }
}
```
### Environment variables example:
```
sensenet__Registration__Groups="_ICollection<string>_value_"
sensenet__Registration__UserType="_string_value_"
sensenet__Registration__ParentPath="_string_value_"
```
### Properties:
- **Groups** (`string[]`): A list of group ids or paths that newly registered users should be added to.
- **UserType** (`string`): Content type of newly created users. Default: User.
- **ParentPath** (`string`): Container of newly created users. Default: /Root/IMS/Public

