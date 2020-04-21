```csharp
var result = await Content.QueryAsync("Type:ContentType .AUTOFILTERS:OFF");

// foreach (dynamic content in result)
//     Console.WriteLine($"{content.Id} {content.Name}");
```
