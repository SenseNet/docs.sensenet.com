```csharp
var result = await RESTCaller.GetResponseJsonAsync(new ODataRequest
{
    IsCollectionRequest = false,
    Path = "/Root/Content/IT/Document_Library/Calgary/BusinessPlan.docx",
    ActionName = "GetPreviewComments",
    Parameters = { { "page", "3" } }
});

//Console.WriteLine(result);
```
