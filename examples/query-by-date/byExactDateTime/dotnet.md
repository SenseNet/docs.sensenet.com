```csharp
var result = await repository.QueryAsync(
    new QueryContentRequest { ContentQuery = "StartDate:'2019-02-15 09:30:00'" }, cancel);

// foreach (dynamic content in result)
//    Console.WriteLine($"{content.Id} {content.Name}");
```
