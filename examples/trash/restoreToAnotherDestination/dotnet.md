```csharp
var body = @"models=[{""destination"": ""/Root/target""}]";
var result = await RESTCaller.GetResponseStringAsync(
    "/Root/Trash/TrashBag-20200622232234", "Restore", HttpMethod.Post, body);
Console.WriteLine(result);
```
