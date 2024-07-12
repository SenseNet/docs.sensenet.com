```csharp
var result = await repository.QueryAsync(
    new QueryContentRequest {ContentQuery = "Color:White OR Color:Red"}, cancel);
```
