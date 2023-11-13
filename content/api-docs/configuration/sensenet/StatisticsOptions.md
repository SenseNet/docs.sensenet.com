---
title: StatisticsOptions
metaTitle: "sensenet API - StatisticsOptions"
metaDescription: "StatisticsOptions"
---

## StatisticsOptions


### Configuration example:
``` json
{
  "sensenet": {
    "statistics": {
      "Enabled": true,
      "Retention": {
        "ApiCalls": {
          "Momentary": 0,
          "Minutely": 0,
          "Hourly": 0,
          "Daily": 0,
          "Monthly": 0
        },
        "WebHooks": {
          "Momentary": 0,
          "Minutely": 0,
          "Hourly": 0,
          "Daily": 0,
          "Monthly": 0
        },
        "DatabaseUsage": {
          "Momentary": 0,
          "Minutely": 0,
          "Hourly": 0,
          "Daily": 0,
          "Monthly": 0
        },
        "General": {
          "Momentary": 0,
          "Minutely": 0,
          "Hourly": 0,
          "Daily": 0,
          "Monthly": 0
        }
      }
    }
  }
}
```
### Environment variables example:
```
sensenet__statistics__Enabled="_bool_value_"
sensenet__statistics__Retention="_RetentionSection_value_"
```
### Properties:
- **Enabled** (`bool`): 
- **Retention** (`RetentionSection`): 

