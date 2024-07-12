```csharp
var result = await repository.QueryAsync(
    new QueryContentRequest { ContentQuery = "StartingDate:<'2019-01-10'" }, cancel);
```
