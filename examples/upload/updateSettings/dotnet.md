```csharp
await repository.UploadAsync(
    request: new UploadRequest
    {
        ParentPath = "/Root/System/Settings",
        ContentName = "MyCustom.settings",
        ContentType = "Settings"
    },
    fileText: "{Key:'Value'}",
    cancel);
```
