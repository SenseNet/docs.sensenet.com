---
title: IndexingOptions
metaTitle: "sensenet API - IndexingOptions"
metaDescription: "IndexingOptions"
---

## IndexingOptions


### Configuration example:
``` json
{
  "sensenet": {
    "indexing": {
      "IndexDirectoryPath": "_value_",
      "IndexHealthMonitorRunningPeriod": 0,
      "IndexingActivityTimeoutInSeconds": 0,
      "IndexingActivityQueueMaxLength": 0,
      "TextExtractTimeout": 0,
      "IndexingActivityDeletionPeriodInMinutes": 0,
      "IndexingActivityMaxAgeInMinutes": 0
    }
  }
}
```
### Environment variables example:
```
sensenet__indexing__IndexDirectoryPath="_string_value_"
sensenet__indexing__IndexHealthMonitorRunningPeriod="_int_value_"
sensenet__indexing__IndexingActivityTimeoutInSeconds="_int_value_"
sensenet__indexing__IndexingActivityQueueMaxLength="_int_value_"
sensenet__indexing__TextExtractTimeout="_int_value_"
sensenet__indexing__IndexingActivityDeletionPeriodInMinutes="_int_value_"
sensenet__indexing__IndexingActivityMaxAgeInMinutes="_int_value_"
```
### Properties:
- **IndexDirectoryPath** (`string`): 
- **IndexHealthMonitorRunningPeriod** (`int`): Gets or sets the periodicity of executing lost indexing tasks in seconds. Default: 60.
- **IndexingActivityTimeoutInSeconds** (`int`): 
- **IndexingActivityQueueMaxLength** (`int`): 
- **TextExtractTimeout** (`int`): 
- **IndexingActivityDeletionPeriodInMinutes** (`int`): Gets or sets the periodicity of deleting old IndexingActivities. Default: 10 minutes.
- **IndexingActivityMaxAgeInMinutes** (`int`): Gets or sets the age threshold for IndexingActivities that are periodically deleted. The default age threshold is set to 480 (8 hours).

