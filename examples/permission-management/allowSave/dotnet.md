```csharp
var permissionRequest = new[]
{
    new SetPermissionRequest
    {
        Identity = "/Root/IMS/BuiltIn/Portal/Visitor",
        Save = PermissionValue.Allow,
    }
};
var content = await Content.LoadAsync("/Root/Content/IT");
await SecurityManager.SetPermissionsAsync(content.Id, permissionRequest);
```
