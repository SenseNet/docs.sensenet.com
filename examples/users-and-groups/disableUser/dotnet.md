```csharp
var content = await Content.LoadAsync("/Root/IMS/Public/editormanatee");
content["Enabled"] = false;
await content.SaveAsync();
```
