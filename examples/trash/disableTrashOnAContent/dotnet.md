```csharp
var body = @"models=[{""TrashDisabled"": true}]";
var result = await RESTCaller.GetResponseStringAsync(
    "/Root/Content/IT", null, HttpMethod.Patch, body);
Console.WriteLine(result);
```
