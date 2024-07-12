```csharp
var result = await repository.QueryAsync(
    new QueryContentRequest { ContentQuery = "ModifiedBy:{{Name:'jjohnson'}}" }, cancel);
```
