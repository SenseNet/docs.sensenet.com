```csharp
var result = await Content.QueryAsync(@"Name:\(apps\) .AUTOFILTERS:OFF");

// foreach (dynamic content in result)
//    Console.WriteLine($"{content.Id} {content.Name}");
```
