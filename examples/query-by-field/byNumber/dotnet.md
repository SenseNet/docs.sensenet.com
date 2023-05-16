```csharp
var result = await repository.QueryAsync(
    new QueryContentRequest { ContentQuery = "TaskCompletion:<50" }, cancel);

// foreach (dynamic content in result)
//    Console.WriteLine($"{content.Id} {content.Name}");
```
