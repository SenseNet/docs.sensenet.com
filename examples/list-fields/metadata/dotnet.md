```csharp
var result = await RESTCaller.GetResponseStringAsync(
    "/Root/Content/IT/Document_Library", "$metadata", HttpMethod.Get);
Console.WriteLine(result);
```
