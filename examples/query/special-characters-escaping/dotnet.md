```csharp
var result = await repository.QueryAsync(
    new QueryContentRequest { ContentQuery = @"Name:\(apps\) .AUTOFILTERS:OFF" }, cancel);
```
