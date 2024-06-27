```csharp
var content = repository.CreateContent("/Root/IMS/Public", "User", "jsmith");
content["LoginName"] = "jsmith";
content["Email"] = "jsmith@example.com";
content["Password"] = "I8rRp2c9P0HJZENZcvlz";
content["FullName"] = "John Smith";
content["Enabled"] = true;
await content.SaveAsync(cancel);
```
