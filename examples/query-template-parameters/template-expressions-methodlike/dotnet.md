```csharp
var result = await Content.QueryAsync("CreationDate:<@@CurrentDate.AddDays(-5)@@");

// foreach (dynamic content in result)
//     Console.WriteLine($"{content.Id} {content.Name}");
```
