```csharp
var result = await repository.QueryAsync(
    new QueryContentRequest { ContentQuery = "TypeIs:Car .TOP:5" }, cancel);
```
