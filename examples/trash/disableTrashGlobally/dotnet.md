```csharp
var body = @"models=[{""IsActive"": false}]";
var result = await RESTCaller.GetResponseStringAsync(
    "/Root/Trash", null, HttpMethod.Patch, body);
Console.WriteLine(result);
```
