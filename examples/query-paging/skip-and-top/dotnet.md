```csharp
var result = await repository.QueryAsync(
    new QueryContentRequest { ContentQuery = "TypeIs:Car .SKIP:3 .TOP:3" }, cancel);
```
