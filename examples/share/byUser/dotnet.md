```csharp
var body = @"models=[{
  ""token"": ""alba@sensenet.com"",
  ""level"": ""Open"",
  ""mode"": ""Private"",
  ""sendNotification"": true}]";
var result = await RESTCaller.GetResponseStringAsync(
    "/Root/Content/IT", "Share", HttpMethod.Post, body);

//Console.WriteLine(result);
```
