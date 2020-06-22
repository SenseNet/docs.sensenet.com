```csharp
var result = await RESTCaller.GetResponseStringAsync(new ODataRequest
{
    Path = "/Root/Content/IT/Document_Library/Chicago/BusinessPlan.docx",
    ActionName = "GetAllowedUsers",
    Select = new[] { "Id", "Path", "Type" },
    Parameters = { { "permissions", "Open" } }
});
Console.WriteLine(result);
```
