```csharp
await repository.GetResponseStringAsync(
    new Uri(repository.Server.Url + "/OData.svc/Root/Content/('IT')/DisplayName/$value"),
    HttpMethod.Get,
    postData: null,
    additionalHeaders: null,
    cancel);
);
```
