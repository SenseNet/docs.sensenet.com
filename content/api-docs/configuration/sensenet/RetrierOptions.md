---
title: RetrierOptions
metaTitle: "sensenet API - RetrierOptions"
metaDescription: "RetrierOptions"
---

## RetrierOptions

Configuration values for the Retrier feature.
 All properties have default values, none of them is mandatory.

### Configuration example:
``` json
{
  "sensenet": {
    "Retrier": {
      "Count": 0,
      "WaitMilliseconds": 0
    }
  }
}
```
### Environment variables example:
```
sensenet__Retrier__Count="_int_value_"
sensenet__Retrier__WaitMilliseconds="_int_value_"
```
### Properties:
- **Count** (`int`): Gets or sets how many times an operation is retried if the caller
 did not provide a different value. Default: 10.
- **WaitMilliseconds** (`int`): Gets or sets how many milliseconds will the module wait between two attempts. Default: 1000.

