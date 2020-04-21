```csharp
await Content.UploadTextAsync("/Root/System/Settings", "MyCustom.settings",
    "{Key:'Value'}", CancellationToken.None, "Settings");
```
