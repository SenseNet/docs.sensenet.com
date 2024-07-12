```csharp
string? ctd = null;
await repository.ProcessWebResponseAsync(
    relativeUrl: $"/binaryhandler.ashx?nodepath=/Root/System/Schema/ContentTypes/GenericContent/Car&propertyname=Binary",
    HttpMethod.Get,
    additionalHeaders: null,
    httpContent: null,
    responseProcessor: async (message, cancellation) =>
    {
        ctd = await message.Content.ReadAsStringAsync(cancellation);
    },
    cancel);
```
