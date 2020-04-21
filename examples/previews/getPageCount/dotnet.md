```csharp
var result = await RESTCaller.GetResponseStringAsync(
    "/Root/Content/IT/Document_Library/Calgary/BusinessPlan.docx", "GetPageCount", HttpMethod.Post);

//Console.WriteLine(result);
```
