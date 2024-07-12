```csharp
await repository.GetResponseStringAsync(
    new Uri(repository.Server.Url + "/OData.svc/$metadata"),
    HttpMethod.Get,
    postData: null,
    additionalHeaders: null,
    cancel);
```
