```csharp
var result = await repository.QueryAsync(
    new QueryContentRequest { ContentQuery = "Color:White AND (Style:Sedan OR Price:<10000000)" }, cancel);
```
