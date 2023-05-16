```csharp
var result = await repository.QueryAsync(
    new QueryContentRequest { ContentQuery = @"Name:\(apps\) .AUTOFILTERS:OFF" }, cancel);

// foreach (dynamic content in result)
//    Console.WriteLine($"{content.Id} {content.Name}");
```
