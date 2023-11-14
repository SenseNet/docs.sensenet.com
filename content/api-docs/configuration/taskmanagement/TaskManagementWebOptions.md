---
title: TaskManagementWebOptions
metaTitle: "sensenet API - TaskManagementWebOptions"
metaDescription: "TaskManagementWebOptions"
---

## TaskManagementWebOptions


### Configuration example:
``` json
{
  "TaskManagement": {
    "TaskExecutionTimeoutInSeconds": 0,
    "Applications": [
      {}
    ]
  }
}
```
### Environment variables example:
```
TaskManagement__TaskExecutionTimeoutInSeconds="_int_value_"
TaskManagement__Applications="_RepositoryOptions[]_value_"
```
### Properties:
- **TaskExecutionTimeoutInSeconds** (`int`): After this timeout the task lock will expire so any agent can claim the task.
- **Applications** (`RepositoryOptions[]`): 

