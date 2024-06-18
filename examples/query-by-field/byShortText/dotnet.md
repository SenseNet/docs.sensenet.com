```csharp
var result = await repository.QueryAsync(
    new QueryContentRequest { ContentQuery = "Color:Yellow" }, cancel);
```
