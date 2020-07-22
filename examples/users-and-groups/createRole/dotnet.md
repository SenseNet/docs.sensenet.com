```csharp
var content = Content.CreateNew("/Root/IMS/Public", "Group", "Publishers");
content["Members"] = new[] { 1155, 1156 };
await content.SaveAsync();
```
