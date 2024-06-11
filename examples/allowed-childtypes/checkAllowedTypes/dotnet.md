```csharp
await repository.InvokeFunctionAsync<string>(new OperationRequest
{
    Path = "/Root/Content",
    OperationName = "CheckAllowedChildTypesOfFolders"
}, cancel);
```
