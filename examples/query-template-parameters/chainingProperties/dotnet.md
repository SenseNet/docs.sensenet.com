```csharp
var result = await repository.QueryAsync(
    new QueryContentRequest { 
        ContentQuery = "TypeIs:Task +CreationDate:<@@CurrentUser.Manager.CreationDate@@" }, cancel);
```
