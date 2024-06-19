```csharp
var result1 = await repository.QueryAsync(
    new QueryContentRequest { ContentQuery = "DisplayName:'(1+1):2'" }, cancel);
// or
var result2 = await repository.QueryAsync(
    new QueryContentRequest { ContentQuery = "DisplayName:\"(1+1):2\"" }, cancel);
```
