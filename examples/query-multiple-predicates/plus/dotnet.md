```csharp
var result = await repository.QueryAsync(
    new QueryContentRequest { ContentQuery = "+Color:White +Style:Sedan" }, cancel);
```
