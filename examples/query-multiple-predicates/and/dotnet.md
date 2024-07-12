```csharp
var result = await repository.QueryAsync(
    new QueryContentRequest { ContentQuery = "Color:White AND Style:Sedan" }, cancel);
```
