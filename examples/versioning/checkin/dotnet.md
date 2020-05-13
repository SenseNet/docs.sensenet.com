```csharp
var result = await RESTCaller.GetResponseJsonAsync(method: HttpMethod.Post, requestData: new ODataRequest
{
   IsCollectionRequest = false,
   Path = "/Root/Content/IT/Document_Library/Calgary/BusinessPlan.docx",
   ActionName = "CheckIn",
   Parameters = { { "checkInComments", "Adding new contract" } }
});
Console.WriteLine(result);
```
