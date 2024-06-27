```csharp
var result = await repository.QueryAsync(
    new QueryContentRequest { ContentQuery = "MemoType:'Internal audit'" }, cancel);
```
