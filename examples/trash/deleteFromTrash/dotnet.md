```csharp
var result = await RESTCaller.GetResponseStringAsync(
    "/Root/Trash/TrashBag-20200622234314", "Delete", HttpMethod.Post);
Console.WriteLine(result);
```
