---
title: ExclusiveLockOptions
metaTitle: "sensenet API - ExclusiveLockOptions"
metaDescription: "ExclusiveLockOptions"
---

## ExclusiveLockOptions


### Configuration example:
``` json
{
  "sensenet": {
    "ExclusiveLock": {
      "LockTimeoutInSeconds": 0,
      "PollingTimeInSeconds": 0,
      "WaitTimeoutInSeconds": 0
    }
  }
}
```
### Environment variables example:
```
sensenet__ExclusiveLock__LockTimeoutInSeconds="_int_value_"
sensenet__ExclusiveLock__PollingTimeInSeconds="_int_value_"
sensenet__ExclusiveLock__WaitTimeoutInSeconds="_int_value_"
```
### Properties:
- **LockTimeoutInSeconds** (`int`): Gets or sets the timeout of the obtained exclusive lock.
 If the time runs out, the lock is automatically released.
- **PollingTimeInSeconds** (`int`): Gets or sets the length of the lock monitoring period. Used in algorithms
 that wait for releasing the lock.
- **WaitTimeoutInSeconds** (`int`): Gets or sets the lock monitoring timeout. After this time a _TimeoutException_ will be thrown.

