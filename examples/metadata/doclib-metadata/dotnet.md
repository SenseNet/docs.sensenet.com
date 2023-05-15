```csharp
await repository.GetResponseStringAsync(
    new Uri(repository.Server.Url + "/OData.svc/Root/Content/IT/Document_Library/$metadata"),
    HttpMethod.Get,
    postData: null,
    additionalHeaders: null,
    cancel);
```
