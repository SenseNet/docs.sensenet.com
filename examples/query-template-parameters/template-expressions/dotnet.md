```csharp
var result = await Content.QueryAsync("=CreationDate:<@@CurrentDate-5days@@");

// foreach (dynamic content in result)
//     Console.WriteLine($"{content.Id} {content.Name}");
```
