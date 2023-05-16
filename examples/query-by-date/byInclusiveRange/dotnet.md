```csharp
var result = await repository.QueryAsync(
    new QueryContentRequest { ContentQuery = "CreationDate:{'2010-08-30' TO '2010-10-30'}" }, cancel);

// foreach (dynamic content in result)
//    Console.WriteLine($"{content.Id} {content.Name}");
```
