---
title: "IdentityServer"
metaTitle: "sensenet - Configuring the IdentityServer authentication service"
metaDescription: "Configuring the IdentityServer authentication service"
---

This section contains configuration for the sensenet authentication service.

## Configuration example

**WARNING** This is a sample configuration containing example values. Do not use it without modifying it to reflect your environment.
``` json
{
  "sensenet": {
    "Notification": {
      "AdminEmail": "_stringValue_"
    },
    "Captcha": {
      "ProjectId": "_stringValue_",
      "PrivateKeyId": "_stringValue_",
      "PrivateKey": "_stringValue_",
      "ClientEmail": "_stringValue_",
      "ClientId": "_stringValue_",
      "ClientCertUrl": "_stringValue_",
      "SiteKey": "_stringValue_",
      "AcceptedScore": 0.1
    }
  }
}
```
