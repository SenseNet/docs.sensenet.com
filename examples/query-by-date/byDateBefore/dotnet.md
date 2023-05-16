```csharp
var result = await repository.QueryAsync(
    new QueryContentRequest { ContentQuery = "CreationDate:<'2019-01-10'" }, cancel);

// foreach (dynamic content in result)
//    Console.WriteLine($"{content.Id} {content.Name}");
```
