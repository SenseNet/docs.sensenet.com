```csharp
var content = repository.CreateContent("/Root/IMS/Public", "User", "alba");
content["LoginName"] = "alba";
content["Enable"] = true;
await content.SaveAsync(cancel);
```
