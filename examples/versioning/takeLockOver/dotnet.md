```csharp
var request = new ODataRequest(repository.Server)
{
    Path = "/Root/Content/IT/Document_Library/Calgary/BusinessPlan.docx",
    ActionName = "TakeLockOver",
    PostData = new {user = "12345"}
};
var result = await repository.GetResponseStringAsync(request, HttpMethod.Post, cancel);
Console.WriteLine(result);
```
