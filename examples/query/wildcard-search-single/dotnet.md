```csharp
var result = await repository.QueryAsync(
    new QueryContentRequest {ContentQuery = "tru?k"}, cancel);

// foreach (dynamic content in result)
//    Console.WriteLine($"{content.Id} {content.Name}");
```
