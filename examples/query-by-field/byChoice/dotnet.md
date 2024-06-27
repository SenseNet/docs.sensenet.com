```csharp
var result = await repository.QueryAsync(
    new QueryContentRequest {ContentQuery = "Style:$roadster"}, cancel);
```
