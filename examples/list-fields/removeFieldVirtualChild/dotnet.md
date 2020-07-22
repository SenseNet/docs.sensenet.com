```csharp
var result = await RESTCaller.GetResponseStringAsync(
    "/Root/Content/IT/Document_Library/MyField1", null, HttpMethod.Delete, null);
Console.WriteLine(result);
```
