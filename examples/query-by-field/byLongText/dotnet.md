```csharp
var result = await repository.QueryAsync(
    new QueryContentRequest {ContentQuery = "Description:*company*"}, cancel);

// foreach (dynamic content in result)
//    Console.WriteLine($"{content.Id} {content.Name}");
```
