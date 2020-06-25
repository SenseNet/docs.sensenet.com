```csharp
var body = @"models=[{""MinValue"": 5, ""MaxValue"": 20}]";
var result = await RESTCaller.GetResponseStringAsync(
    "/Root/Content/IT/Document_Library/MyField1", null, HttpMethod.Patch, body);
Console.WriteLine(result);
```
0