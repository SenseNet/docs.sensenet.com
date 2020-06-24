```csharp
var body = @"models=[{
    ""__ContentType"": ""IntegerFieldSetting"",
    ""Name"": ""MyField1"",
    ""DisplayName"": ""My Field 1"",
    ""Compulsory"": true,
    ""MinValue"": 10}]";
var result = await RESTCaller.GetResponseStringAsync(
    "/Root/Content/IT/Document_Library", null, HttpMethod.Post, body);
Console.WriteLine(result);
```
