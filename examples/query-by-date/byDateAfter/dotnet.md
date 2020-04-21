```csharp
var result = await Content.QueryAsync("ModificationDate:>'2019-01-10'");

// foreach (dynamic content in result)
//     Console.WriteLine($"{content.Id} {content.Name}");
```
