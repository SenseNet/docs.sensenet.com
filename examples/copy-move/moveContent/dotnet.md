```csharp
var result = await repository.InvokeActionAsync<string>(new OperationRequest
{
    Path = "/Root",
    OperationName = "MoveBatch",
    PostData = new
    {
        targetPath = "/Root/Content/Cars/out-of-order",
        paths = new[] {"/Root/Content/Cars/AAKE452"}
    }
}, cancel);
```
