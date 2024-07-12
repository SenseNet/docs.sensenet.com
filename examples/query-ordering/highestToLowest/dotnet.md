```csharp
var result = await repository.QueryAsync(
    new QueryContentRequest { ContentQuery = "Type:Car .REVERSESORT:Name" }, cancel);
```
