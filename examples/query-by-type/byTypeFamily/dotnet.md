```csharp
var result = await repository.QueryAsync(
    new QueryContentRequest { ContentQuery = "TypeIs:Folder" }, cancel);
```
