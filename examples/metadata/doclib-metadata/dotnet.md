```csharp
await repository.GetResponseStringAsync(
    new Uri(repository.Server.Url + "/OData.svc/Root/Content/Cars/$metadata"),
    HttpMethod.Get,
    postData: null,
    additionalHeaders: null,
    cancel);
```
