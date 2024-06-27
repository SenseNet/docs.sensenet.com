```csharp
await repository.GetResponseStringAsync(new ODataRequest
{
    Path = "/Root/Content/Cars",
    PropertyName = "Description"
}, HttpMethod.Get, cancel);
```
