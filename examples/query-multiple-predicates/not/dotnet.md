```csharp
var result = await repository.QueryAsync(
    new QueryContentRequest { ContentQuery = "Color:White AND NOT Style:Sedan" }, cancel);
```
