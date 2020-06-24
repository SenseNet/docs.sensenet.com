```csharp
var body = @"models=[{""newname"": true}]";
var result = await RESTCaller.GetResponseStringAsync(
    "/Root/Trash/TrashBag-20200622233412", "Restore", HttpMethod.Post, body);
Console.WriteLine(result);
```
