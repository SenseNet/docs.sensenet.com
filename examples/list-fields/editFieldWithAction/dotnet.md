```csharp
var body = @"models=[{""Name"": ""MyField1"", ""MinValue"": 3, ""MaxValue"": 19}]";
var result = await RESTCaller.GetResponseStringAsync(
    "/Root/Content/IT/Document_Library", "EditField", HttpMethod.Post, body);
Console.WriteLine(result);
```
