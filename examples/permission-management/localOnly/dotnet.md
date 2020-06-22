```csharp
var content = await Content.LoadAsync("/Root/Content/IT/Document_Library");
var permissionRequest = new[]
{
    new SetPermissionRequest
    {
        Identity = "/Root/IMS/Public/Editors",
        LocalOnly = true,
        AddNew = PermissionValue.Allow,
    }
};
await SecurityManager.SetPermissionsAsync(content.Id, permissionRequest);
```
