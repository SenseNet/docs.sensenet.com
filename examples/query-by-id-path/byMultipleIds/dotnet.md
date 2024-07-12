```csharp
var result = await repository.QueryAsync(
    new QueryContentRequest { ContentQuery = "Id:(7 8 11)" }, cancel);
```
