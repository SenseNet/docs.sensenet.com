---
title: DataOptions
metaTitle: "sensenet API - DataOptions"
metaDescription: "DataOptions"
---

## DataOptions


### Configuration example:
``` json
{
  "sensenet": {
    "Data": {
      "DbCommandTimeout": 0,
      "TransactionTimeout": 0.0,
      "LongTransactionTimeout": 0.0
    }
  }
}
```
### Environment variables example:
```
sensenet__Data__DbCommandTimeout="_int_value_"
sensenet__Data__TransactionTimeout="_double_value_"
sensenet__Data__LongTransactionTimeout="_double_value_"
```
### Properties:
- **DbCommandTimeout** (`int`): Gets the configured db command timeout value in seconds.
- **TransactionTimeout** (`double`): Maximum execution time of transactions.
- **LongTransactionTimeout** (`double`): Maximum execution time of long-running transactions. Use this in exceptional cases,
 e.g. when copying a huge stream or performing a batch db operation.

