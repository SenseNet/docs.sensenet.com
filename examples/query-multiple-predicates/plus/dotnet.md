```csharp
var result = await Content.QueryAsync("+EventType:Demo AND +EventType:Meeting");

// foreach (dynamic content in result)
//     Console.WriteLine($"{content.Id} {content.Name}");
```
