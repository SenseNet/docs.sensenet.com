```csharp
var result = await repository.QueryAsync(
    new QueryContentRequest {ContentQuery = "TypeIs:Article .LIFESPAN:ON"}, cancel);

// foreach (dynamic content in result)
//    Console.WriteLine($"{content.Id} {content.Name}");
```
