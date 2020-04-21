```csharp
var result = await Content.QueryAsync("Ingredients:apple AND Ingredients:melon");

// foreach (dynamic content in result)
//     Console.WriteLine($"{content.Id} {content.Name}");
```
