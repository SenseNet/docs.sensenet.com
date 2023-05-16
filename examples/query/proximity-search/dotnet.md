```csharp
var result = await repository.QueryAsync(
    new QueryContentRequest { ContentQuery = "Description:'Lorem amet'~3" }, cancel);

// foreach (dynamic content in result)
//    Console.WriteLine($"{content.Id} {content.Name}");
```
