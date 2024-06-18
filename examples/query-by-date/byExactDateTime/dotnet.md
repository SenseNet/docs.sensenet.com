```csharp
var result = await repository.QueryAsync(
    new QueryContentRequest { ContentQuery = "StartingDate:'2023-12-29 09:30:00'" }, cancel);
```
