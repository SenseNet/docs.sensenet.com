```
url: "/OData.svc/Root('Trash')",
type: 'PATCH',
data: "models=[" + JSON.stringify({
    "SizeQuota": 20,
    "BagCapacity": 100,
    "MinRetentionTime": 14
  }) + "]",
```
