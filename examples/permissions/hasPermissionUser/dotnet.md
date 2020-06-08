```csharp
var content = await Content.LoadAsync("/Root/Content/IT").ConfigureAwait(false);
var hasPermission = await content.HasPermissionAsync(new[] { "Open" }, "/Root/IMS/Public/devdog");
```
