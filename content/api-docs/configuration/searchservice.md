---
title: "SearchService"
metaTitle: "sensenet - Configuring sensenet SearchService"
metaDescription: "Configuring sensenet SearchService"
---

This section contains configuration for sensenet SearchService.

## Configuration example

**WARNING** This is a sample configuration containing example values. Do not use it without modifying it to reflect your environment.
``` json
{
  "sensenet": {
    "rabbitmq": {
      "ServiceUrl": "_stringValue_",
      "MessageExchange": "_stringValue_"
    },
    "search": {
      "service": {
        "ServiceAddress": "_stringValue_",
        "ValidateServerCertificate": true,
        "ChannelOptions": {}
      }
    },
    "security": {
      "messaging": {
        "DistributableSecurityActivityMaxSize": 0,
        "CommunicationMonitorRunningPeriodInSeconds": 0,
        "SecurityActivityLifetimeInMinutes": 0,
        "SecurityActivityTimeoutInSeconds": 0,
        "MessageProcessorThreadCount": 0,
        "MessageProcessorThreadMaxMessages": 0
      },
      "rabbitmq": {
        "ServiceUrl": "_stringValue_",
        "MessageExchange": "_stringValue_"
      }
    }
  }
}
```
