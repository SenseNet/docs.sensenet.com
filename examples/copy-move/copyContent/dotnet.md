```csharp
var result = await repository.InvokeActionAsync<string>(new OperationRequest
{
    Path = "/Root",
    OperationName = "CopyBatch",
    PostData = new
    {
        targetPath = "/Root/Content/Cars/Backup",
        paths = new[]{"/Root/Content/Cars/AAKE452"}
    }
}, cancel);
```
