```csharp
var result = await repository.QueryAsync(
    new QueryContentRequest { ContentQuery = "StartingDate:'2021-04-22'" }, cancel);
```
