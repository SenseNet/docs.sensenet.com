---
title: GrpcClientOptions
metaTitle: "sensenet API - GrpcClientOptions"
metaDescription: "GrpcClientOptions"
---

## GrpcClientOptions


### Configuration example:
``` json
{
  "sensenet": {
    "search": {
      "service": {
        "ServiceAddress": "_value_",
        "ValidateServerCertificate": true,
        "ChannelOptions": { }
      }
    }
  }
}
```
### Environment variables example:
```
sensenet__search__service__ServiceAddress="_string_value_"
sensenet__search__service__ValidateServerCertificate="_bool_value_"
sensenet__search__service__ChannelOptions="_GrpcChannelOptions_value_"
```
### Properties:
- **ServiceAddress** (`string`): Url for the Grpc channel.
- **ValidateServerCertificate** (`bool`): Gets or sets a value that may be used by the app start process to set a certificate validation
 callback that skips validation.
 Default value is true. Do not set this to false unless in a development environment.
- **ChannelOptions** (`GrpcChannelOptions`): 

