```csharp
var content = Content.CreateNew("/Root/IMS/Public", "User", "alba");
content["LoginName"] = "alba";
content["Email"] = "alba@sensenet.com";
content["Password"] = "alba";
content["Enabled"] = true;
await content.SaveAsync();
```
