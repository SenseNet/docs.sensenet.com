```csharp
var result = await repository.QueryAsync(
    new QueryContentRequest { ContentQuery = "InFolder:/Root/Content/Cars AND IsFolder:true" }, cancel);
```
