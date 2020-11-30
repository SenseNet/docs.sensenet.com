```csharp
var result = await Content.QueryAsync("TypeIs:User +CreationDate:<@@CurrentUser.Manager.CreationDate@@");

// foreach (dynamic content in result)
//     Console.WriteLine($"{content.Id} {content.Name}");
```
