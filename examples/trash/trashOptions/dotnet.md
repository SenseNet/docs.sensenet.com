```csharp
var body = @"models=[{""SizeQuota"": 20,
    ""BagCapacity"": 100,
    ""MinRetentionTime"": 14}]";
var result = await RESTCaller.GetResponseStringAsync(
    "/Root/Trash", null, HttpMethod.Patch, body);
Console.WriteLine(result);
```
