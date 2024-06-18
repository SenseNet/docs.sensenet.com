```csharp
var result = await repository.QueryAsync(
    new QueryContentRequest { ContentQuery = "ModificationDate:@@Yesterday@@" }, cancel);
```
