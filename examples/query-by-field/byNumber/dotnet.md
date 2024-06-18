```csharp
var result = await repository.QueryAsync(
    new QueryContentRequest { ContentQuery = "Price:<1000000" }, cancel);
```
