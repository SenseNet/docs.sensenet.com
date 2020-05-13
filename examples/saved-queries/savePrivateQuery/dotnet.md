```csharp
var body = @"models=[{
    ""query"": ""+TypeIs:File +InTree:/Root/Content/IT"",
    ""displayName"": ""My query"",
    ""queryType"": ""Private""}]";
var result = await RESTCaller.GetResponseStringAsync(
   "/Root/Content/IT/Document_Library", "SaveQuery", HttpMethod.Post, body);
Console.WriteLine(result);
```
