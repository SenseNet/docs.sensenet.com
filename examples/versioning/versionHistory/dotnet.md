```csharp
var request = new ODataRequest(repository.Server)
{
    Path = "/Root/Content/IT/Document_Library/Calgary/BusinessPlan.docx",
    ActionName = "Versions"
};
var result = await repository.GetResponseStringAsync(request, HttpMethod.Get, cancel);
Console.WriteLine(result);
```
