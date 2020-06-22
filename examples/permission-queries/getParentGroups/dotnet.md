```csharp
var result = await RESTCaller.GetResponseStringAsync(new ODataRequest
{
    Path = "/Root/IMS/Public/businesscat",
    ActionName = "GetParentGroups",
    Select = new[] { "Id", "Path", "Type" },
    Parameters = { { "directOnly", "true" } }
});
Console.WriteLine(result);
```
