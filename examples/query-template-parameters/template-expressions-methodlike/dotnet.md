```csharp
var result = await repository.QueryAsync(
    new QueryContentRequest { ContentQuery = "TypeIs:Task AND StartDate:<@@CurrentDate.AddDays(-5)@@" }, cancel);
```
