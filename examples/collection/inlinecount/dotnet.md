```csharp
var result = await repository.LoadCollectionAsync(new LoadCollectionRequest
{
    Path = "/Root/Content/Cars",
    Top = 3,
    Skip = 4,
    InlineCount = InlineCountOptions.AllPages
}, cancel);
Console.WriteLine($"TotalCount: {result.TotalCount}, Count: {result.Count}");
```
