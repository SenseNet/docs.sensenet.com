```csharp
var body = @"models=[{""Name"": ""MyField1""}]";
var result = await RESTCaller.GetResponseStringAsync(
    "/Root/Content/IT/Document_Library", "DeleteField", HttpMethod.Post, body);
Console.WriteLine(result);
```
