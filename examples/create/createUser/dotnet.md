```csharp
var content = Content.CreateNew("/Root/IMS/Public", "User", "alba");
content["LoginName"] = "alba";
content["Enable"] = true;
await content.SaveAsync();
```
