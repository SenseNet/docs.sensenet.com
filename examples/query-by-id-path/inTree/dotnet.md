```csharp
var result = await repository.QueryAsync(
    new QueryContentRequest { ContentQuery = "InTree:'/Root/Content/Cars'" }, cancel);
```
