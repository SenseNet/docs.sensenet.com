```csharp
var result = await repository.QueryAsync(
    new QueryContentRequest { ContentQuery = "InTree:'/Root/Content/IT/Document_Library'" }, cancel);

// foreach (dynamic content in result)
//    Console.WriteLine($"{content.Id} {content.Name}");
```
