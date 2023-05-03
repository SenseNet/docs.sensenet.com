```csharp
var request = new ODataRequest(repository.Server)
{
    Path = "/Root/Content/IT/Document_Library/Calgary/BusinessPlan.docx",
    ActionName = "RestoreVersion",
    PostData = new { version = "V1.0.A" }
};
var result = await repository.GetResponseStringAsync(request, HttpMethod.Post, cancel);
Console.WriteLine(result);
```
