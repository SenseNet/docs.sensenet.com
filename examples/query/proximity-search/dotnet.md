```csharp
var result = await Content.QueryAsync("Description:'Lorem amet'~3");

// foreach (dynamic content in result)
//    Console.WriteLine($"{content.Id} {content.Name}");
```
