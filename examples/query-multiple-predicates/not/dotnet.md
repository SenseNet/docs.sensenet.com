```csharp
var result = await Content.QueryAsync("apple NOT melon");

// foreach (dynamic content in result)
//     Console.WriteLine($"{content.Id} {content.Name}");
```
