```csharp
var result = await RESTCaller.GetResponseJsonAsync(new ODataRequest
{
    IsCollectionRequest = false,
    Path = "/Root/Content/IT",
    Select = new[] { "%23CustomField" }, // "%23": url encoded "#"
});
Console.WriteLine(result);
```
