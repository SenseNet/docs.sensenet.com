```csharp
var result = await Content.QueryAsync("Type:Folder .SKIP:3 .TOP:3");

// foreach (dynamic content in result)
//     Console.WriteLine($"{content.Id} {content.Name}");
```
