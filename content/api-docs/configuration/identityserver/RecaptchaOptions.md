---
title: RecaptchaOptions
metaTitle: "sensenet API - RecaptchaOptions"
metaDescription: "RecaptchaOptions"
---

## RecaptchaOptions

Captcha options for configuring Google reCaptcha.

### Configuration example:
``` json
{
  "sensenet": {
    "Captcha": {
      "ProjectId": "_value_",
      "PrivateKeyId": "_value_",
      "PrivateKey": "_value_",
      "ClientEmail": "_value_",
      "ClientId": "_value_",
      "ClientCertUrl": "_value_",
      "SiteKey": "_value_",
      "AcceptedScore": 0.0
    }
  }
}
```
### Environment variables example:
```
sensenet__Captcha__ProjectId="_string_value_"
sensenet__Captcha__PrivateKeyId="_string_value_"
sensenet__Captcha__PrivateKey="_string_value_"
sensenet__Captcha__ClientEmail="_string_value_"
sensenet__Captcha__ClientId="_string_value_"
sensenet__Captcha__ClientCertUrl="_string_value_"
sensenet__Captcha__SiteKey="_string_value_"
sensenet__Captcha__AcceptedScore="_float_value_"
```
### Properties:
- **ProjectId** (`string`): 
- **PrivateKeyId** (`string`): 
- **PrivateKey** (`string`): 
- **ClientEmail** (`string`): 
- **ClientId** (`string`): 
- **ClientCertUrl** (`string`): 
- **SiteKey** (`string`): 
- **AcceptedScore** (`float`): 0.1 is worst (probably a bot), 0.9 is best (probably human)

