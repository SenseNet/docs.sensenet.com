```csharp
var result = await RESTCaller.GetResponseJsonAsync(new ODataRequest
{
    IsCollectionRequest = false,
    Path = "/Root/Content/IT/Document_Library/Calgary/BusinessPlan.docx",
    ActionName = "GetQueries",
    Parameters = { { "onlyPublic", "true" } }
});
Console.WriteLine(result);
```
