```csharp
var result = await repository.QueryAsync(
    new QueryContentRequest { ContentQuery = "CreationDate:@@PreviousYear@@" }, cancel);
```
