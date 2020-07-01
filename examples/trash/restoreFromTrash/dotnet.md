```csharp
var result = await RESTCaller.GetResponseStringAsync(
    "/Root/Trash/TrashBag-20200622231439", "Restore", HttpMethod.Post);
Console.WriteLine(result);
```
