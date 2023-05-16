```csharp
var result = await repository.QueryAsync(
    new QueryContentRequest { ContentQuery = "MemoType:'Internal audit'" }, cancel);

// foreach (dynamic content in result)
//    Console.WriteLine($"{content.Id} {content.Name}");
```
