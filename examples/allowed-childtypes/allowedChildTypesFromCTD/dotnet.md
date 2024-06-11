```csharp
var result = await repository.InvokeFunctionAsync<string>(new OperationRequest
{
    Path = "Root/Content",
    OperationName = "GetAllowedChildTypesFromCTD"
}, cancel);
```
