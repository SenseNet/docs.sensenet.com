```csharp
var postData = new Dictionary<string, object>
{
    {"DisplayName", "Fiat 126"},
    {"Color", "Yellow"}
};
var content = await repository.LoadContentAsync("/Root/Content/Cars/OT1234", cancel);
await content.ResetAsync(postData, cancel);
```
