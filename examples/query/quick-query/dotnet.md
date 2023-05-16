```csharp
var result = await repository.QueryAsync(
    new QueryContentRequest { ContentQuery = "Id:<42 .QUICK" }, cancel);

// foreach (dynamic content in result)
//    Console.WriteLine($"{content.Id} {content.Name}");
```
