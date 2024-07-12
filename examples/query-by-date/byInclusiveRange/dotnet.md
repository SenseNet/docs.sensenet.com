```csharp
var result = await repository.QueryAsync(
    new QueryContentRequest { ContentQuery = "StartingDate:{'2010-01-01' TO '2016-01-01'}" }, cancel);
```
