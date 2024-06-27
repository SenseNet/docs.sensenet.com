```csharp
var result = await repository.QueryAsync(
    new QueryContentRequest {ContentQuery = "TypeIs:Article .LIFESPAN:ON"}, cancel);
```
