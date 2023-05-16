```csharp
var result = await repository.QueryAsync(
    new QueryContentRequest {ContentQuery = "Description:abbreviate~0.8"}, cancel);

// foreach (dynamic content in result)
//    Console.WriteLine($"{content.Id} {content.Name}");
```
