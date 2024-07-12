```csharp
await repository.InvokeActionAsync(new OperationRequest
{
    Path = "/Root/Content",
    OperationName = "RemoveAllowedChildTypes",
    PostData = new { contentTypes = new[] { "Car", "File" } }
}, cancel);
```
