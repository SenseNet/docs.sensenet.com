```csharp
var body = @"models=[{""id"": ""1b9abb5f-ed49-48c8-8edd-2c7e634bd77b""}]";
var result = await RESTCaller.GetResponseStringAsync(
    "/Root/Content/IT", "RemoveSharing", HttpMethod.Post, body);

//Console.WriteLine(result);
```
