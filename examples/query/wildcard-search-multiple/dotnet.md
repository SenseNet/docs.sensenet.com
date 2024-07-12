```csharp
var result = await repository.QueryAsync(
    new QueryContentRequest { ContentQuery = "Name:'adm*'" }, cancel);
```
