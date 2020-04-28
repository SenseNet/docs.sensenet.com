```csharp
var body = @"models=[{""targetPath"": ""/Root/Content/IT/Document_Library/Munich"",
            ""paths"": [""/Root/Content/IT/Document_Library/Chicago/100Pages.pdf""]}]";
var result = await RESTCaller.GetResponseStringAsync(
    "/Root", "CopyBatch", HttpMethod.Post, body);
Console.WriteLine(result);
```
