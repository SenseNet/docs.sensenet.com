```csharp
var result = await repository.QueryAsync(
    new QueryContentRequest { ContentQuery = "Id:1607" }, cancel);

// foreach (dynamic content in result)
//    Console.WriteLine($"{content.Id} {content.Name}");
```
