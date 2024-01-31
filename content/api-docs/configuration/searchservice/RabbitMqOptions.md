---
title: RabbitMqOptions
metaTitle: "sensenet API - RabbitMqOptions"
metaDescription: "RabbitMqOptions"
---

## RabbitMqOptions

Contains options for connecting to RabbitMQ.

### Configuration example:
``` json
{
  "sensenet": {
    "rabbitmq": {
      "ServiceUrl": "_value_",
      "MessageExchange": "_value_"
    }
  }
}
```
### Environment variables example:
```
sensenet__rabbitmq__ServiceUrl="_string_value_"
sensenet__rabbitmq__MessageExchange="_string_value_"
```
### Properties:
- **ServiceUrl** (`string`): Gets or sets the service url of the RabbitMQ server.
- **MessageExchange** (`string`): Gets or sets the name of the message exchange. The default value is 'snmessaging'. This value should be unique for the application. If you have multiple applications using the same RabbitMQ server, you should use app-specific different values for this property.
If you have multiple instances of the same application using the same RabbitMQ server, you should use the same value for all instances so that they can communicate with each other.

