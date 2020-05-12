```csharp
var body = @"models=[{
    ""query"": ""+TypeIs:File +InTree:/Root/Content/IT"",
    ""displayName"": ""Public query"",
    ""queryType"": ""Public""}]";
var result = await RESTCaller.GetResponseStringAsync(
   "/Root/Content/IT/Document_Library", "SaveQuery", HttpMethod.Post, body);
Console.WriteLine(result);
```
