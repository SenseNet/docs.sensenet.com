```csharp
var body = @"models=[{""contentIds"": [ 1157 ]}]";
var result = await RESTCaller.GetResponseStringAsync(
    "/Root/IMS/Public/developers", "RemoveMembers", HttpMethod.Post, body);
Console.WriteLine(result);
```
