```csharp
var result = await Content.QueryAsync("Type:Folder .TOP:10");

// foreach (dynamic content in result)
//     Console.WriteLine($"{content.Id} {content.Name}");
```
