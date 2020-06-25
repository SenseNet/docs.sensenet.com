```csharp
var body = @"models=[{""contentIds"": [ 1155, 1157 ]}]";
var result = await RESTCaller.GetResponseStringAsync(
   "/Root/IMS/Public/developers", "AddMembers", HttpMethod.Post, body);
Console.WriteLine(result);
```
