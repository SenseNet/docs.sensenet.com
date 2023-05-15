```csharp
await repository.GetResponseStringAsync(new ODataRequest
{
    Path = "/Root/Content/IT",
    PropertyName = "DisplayName"
}, HttpMethod.Get, cancel);
```
