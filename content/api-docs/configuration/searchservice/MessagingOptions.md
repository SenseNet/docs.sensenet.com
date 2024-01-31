---
title: MessagingOptions
metaTitle: "sensenet API - MessagingOptions"
metaDescription: "MessagingOptions"
---

## MessagingOptions


### Configuration example:
``` json
{
  "sensenet": {
    "security": {
      "messaging": {
        "DistributableSecurityActivityMaxSize": 0,
        "CommunicationMonitorRunningPeriodInSeconds": 0,
        "SecurityActivityLifetimeInMinutes": 0,
        "SecurityActivityTimeoutInSeconds": 0,
        "MessageProcessorThreadCount": 0,
        "MessageProcessorThreadMaxMessages": 0
      }
    }
  }
}
```
### Environment variables example:
```
sensenet__security__messaging__DistributableSecurityActivityMaxSize="_int_value_"
sensenet__security__messaging__CommunicationMonitorRunningPeriodInSeconds="_int_value_"
sensenet__security__messaging__SecurityActivityLifetimeInMinutes="_int_value_"
sensenet__security__messaging__SecurityActivityTimeoutInSeconds="_int_value_"
sensenet__security__messaging__MessageProcessorThreadCount="_int_value_"
sensenet__security__messaging__MessageProcessorThreadMaxMessages="_int_value_"
```
### Properties:
- **DistributableSecurityActivityMaxSize** (`int`): Maximum size of a security activity distributed through messaging.
 Activities bigger than this will be loaded from the database
 on the target server. Default is 200000 bytes.
- **CommunicationMonitorRunningPeriodInSeconds** (`int`): Health check and cleanup monitor execution period. Default: 30 seconds.
- **SecurityActivityLifetimeInMinutes** (`int`): Waiting period after an activity is deleted. Default: 42 minutes.
- **SecurityActivityTimeoutInSeconds** (`int`): Waiting period after a long-running activity fails. Default: 120 seconds.
- **MessageProcessorThreadCount** (`int`): Number of message processor threads. Default is 3.
- **MessageProcessorThreadMaxMessages** (`int`): Maximum number of messages processed by a single message processor thread. Default is 100.

