```csharp
var result = await repository.QueryAsync(
    new QueryContentRequest { ContentQuery = "StartDate:@@NextMonth@@" }, cancel);
```
