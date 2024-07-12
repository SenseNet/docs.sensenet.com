---
title: "Main sensenet service"
metaTitle: "sensenet - Configuring the main sensenet service"
metaDescription: "Configuring the main sensenet instance"
---

This section contains configuration for the main sensenet service.

## Configuration example

**WARNING** This is a sample configuration containing example values. Do not use it without modifying it to reflect your environment.
``` json
{
  "sensenet": {
    "statistics": {
      "Enabled": true,
      "Retention": {}
    },
    "BlobStorage": {
      "BinaryChunkSize": 0,
      "BinaryBufferSize": 0,
      "BinaryCacheSize": 0,
      "MinimumSizeForBlobProviderInBytes": 0,
      "MinimumSizeForBlobProviderKb": 0,
      "BlobDeletionPolicy": "_enum_value_of_SenseNet.Configuration.BlobDeletionPolicy_"
    },
    "Data": {
      "DbCommandTimeout": 0,
      "TransactionTimeout": 0.1,
      "LongTransactionTimeout": 0.1
    },
    "Authentication": {
      "Authority": "_stringValue_",
      "RepositoryUrl": "_stringValue_",
      "DefaultClientUserInternal": "_stringValue_",
      "DefaultClientUserExternal": "_stringValue_",
      "MultiFactor": {
        "ApplicationName": "_stringValue_",
        "MaxKeyLength": 0,
        "PixelsPerModule": 0,
        "TimeToleranceMinutes": 0
      },
      "MetadataHost": "_stringValue_",
      "ClientApplicationUrl": "_stringValue_",
      "AddJwtCookie": true
    },
    "install": {
      "mssql": {
        "Server": "_stringValue_",
        "DatabaseName": "_stringValue_",
        "DbCreatorUserName": "_stringValue_",
        "DbCreatorPassword": "_stringValue_",
        "DbOwnerUserName": "_stringValue_",
        "DbOwnerPassword": "_stringValue_"
      }
    },
    "ClientRequest": {
      "Clients": {}
    },
    "Registration": {
      "Groups": {},
      "UserType": "_stringValue_",
      "ParentPath": "_stringValue_"
    },
    "HttpRequest": {
      "MaxRequestBodySize": 0
    },
    "cryptography": {
      "CertificateThumbprint": "_stringValue_"
    },
    "indexing": {
      "IndexDirectoryPath": "_stringValue_",
      "IndexHealthMonitorRunningPeriod": 0,
      "IndexingActivityTimeoutInSeconds": 0,
      "IndexingActivityQueueMaxLength": 0,
      "TextExtractTimeout": 0,
      "IndexingActivityDeletionPeriodInMinutes": 0,
      "IndexingActivityMaxAgeInMinutes": 0
    },
    "ExclusiveLock": {
      "LockTimeoutInSeconds": 0,
      "PollingTimeInSeconds": 0,
      "WaitTimeoutInSeconds": 0
    },
    "rabbitmq": {
      "ServiceUrl": "_stringValue_",
      "MessageExchange": "_stringValue_"
    },
    "AsposePreviewProvider": {
      "SkipLicenseCheck": true
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
    },
    "Email": {
      "Server": "_stringValue_",
      "Port": 0,
      "FromAddress": "_stringValue_",
      "SenderName": "_stringValue_",
      "Username": "_stringValue_",
      "Password": "_stringValue_",
      "ServerCertificateValidationCallback": {}
    },
    "Retrier": {
      "Count": 0,
      "WaitMilliseconds": 0
    }
  }
}
```
