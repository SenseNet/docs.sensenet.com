---
title: AuthenticationOptions
metaTitle: "sensenet API - AuthenticationOptions"
metaDescription: "AuthenticationOptions"
---

## AuthenticationOptions


### Configuration example:
``` json
{
  "sensenet": {
    "Authentication": {
      "Authority": "_value_",
      "MetadataHost": "_value_",
      "ClientApplicationUrl": "_value_",
      "AddJwtCookie": true,
    }
  }
}
```
### Environment variables example:
```
sensenet__Authentication__Authority="_string_value_"
sensenet__Authentication__MetadataHost="_string_value_"
sensenet__Authentication__ClientApplicationUrl="_string_value_"
sensenet__Authentication__AddJwtCookie="_bool_value_"
sensenet__Authentication__FindUserAsync="_Func<ClaimsPrincipal, Task<User>>_value_"
```
### Properties:
- **Authority** (`string`): Url of the authentication authority - for example IdentityServer.
- **MetadataHost** (`string`): Internal url of the authentication authority - for example IdentityServer.
 Used in a containerized environment when the public authority url
 and metadata url must be different.
- **ClientApplicationUrl** (`string`): Default url of the application that connects to the repository. Features may use this
 url as a return url after authentication operations.
- **AddJwtCookie** (`bool`): Add a cookie containing the JWT bearer token if it was sent in the
 request header. If this cookie is sent by the client later and
 there is no authorization header, the system will set the value
 in the header.
 Use this setting only if you need to authenticate requests (e.g file
 download) where it is not possible to send the JWT token in the header.
 Default is false.

