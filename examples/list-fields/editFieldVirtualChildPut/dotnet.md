```csharp
var body = @"models=[{""MinValue"": 5, ""DisplayName"": ""My field 2""}]";
var result = await RESTCaller.GetResponseStringAsync(
    "/Root/Content/IT/Document_Library/MyField1", null, HttpMethod.Put, body);
Console.WriteLine(result);
```
