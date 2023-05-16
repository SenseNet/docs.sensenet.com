```csharp
var result = await repository.QueryAsync(
    new QueryContentRequest { ContentQuery = "InFolder:'/Root/Content/IT/Document_Library/Calgary'" }, cancel);

// foreach (dynamic content in result)
//    Console.WriteLine($"{content.Id} {content.Name}");
```
