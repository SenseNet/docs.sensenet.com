```csharp
var result = await Content.QueryAsync("(EventType:Demo AND EventType:Meeting) OR EventType:Deadline");

// foreach (dynamic content in result)
//     Console.WriteLine($"{content.Id} {content.Name}");
```
