---
title: EmailOptions
metaTitle: "sensenet API - EmailOptions"
metaDescription: "EmailOptions"
---

## EmailOptions

Email options for sending emails.

### Configuration example:
``` json
{
  "sensenet": {
    "Email": {
      "Server": "_value_",
      "Port": 0,
      "FromAddress": "_value_",
      "SenderName": "_value_",
      "Username": "_value_",
      "Password": "_value_",
      "ServerCertificateValidationCallback": { }
    }
  }
}
```
### Environment variables example:
```
sensenet__Email__Server="_string_value_"
sensenet__Email__Port="_int_value_"
sensenet__Email__FromAddress="_string_value_"
sensenet__Email__SenderName="_string_value_"
sensenet__Email__Username="_string_value_"
sensenet__Email__Password="_string_value_"
sensenet__Email__ServerCertificateValidationCallback="_RemoteCertificateValidationCallback_value_"
```
### Properties:
- **Server** (`string`): Mail server address.
- **Port** (`int`): Mail server port.
- **FromAddress** (`string`): Default sender address.
- **SenderName** (`string`): Default sender name.
- **Username** (`string`): Username for authentication if required.
- **Password** (`string`): Password for authentication if required.
- **ServerCertificateValidationCallback** (`RemoteCertificateValidationCallback`): Optional SSL certificate validation callback. Developers may
 use this to accept all certificates (by always returning true)
 in a development environment.

