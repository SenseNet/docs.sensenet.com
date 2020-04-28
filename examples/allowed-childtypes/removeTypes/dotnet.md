```csharp
var body = @"models=[{""contentTypes"": [""Task"", ""Image""]}]";
var result = await RESTCaller.GetResponseStringAsync(
    "/Root/Content/IT", "RemoveAllowedChildTypes", HttpMethod.Post, body);
Console.WriteLine(result);
```
