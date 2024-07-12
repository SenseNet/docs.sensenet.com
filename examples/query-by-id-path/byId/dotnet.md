```csharp
var result = await repository.QueryAsync(
    new QueryContentRequest { ContentQuery = "Id:6" }, cancel);
```
