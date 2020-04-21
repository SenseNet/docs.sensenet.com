```csharp
var result = await Content.QueryAsync("SharedWith:@@CurrentUser@@");

// foreach (dynamic content in result)
//     Console.WriteLine($"{content.Id} {content.Name}");
```
