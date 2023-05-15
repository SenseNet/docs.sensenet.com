```csharp
var workspaceContentType = await repository.LoadContentAsync(
    "Root/System/Schema/ContentTypes/GenericContent/Folder/Workspace", cancel);

string? ctd = null;
await repository.ProcessWebResponseAsync(
    relativeUrl: $"/binaryhandler.ashx?nodeid={workspaceContentType.Id}&propertyname=Binary",
    HttpMethod.Get,
    additionalHeaders: null,
    httpContent: null,
    responseProcessor: async (message, cancellation) =>
    {
        ctd = await message.Content.ReadAsStringAsync(cancellation);
    },
    cancel);
```
