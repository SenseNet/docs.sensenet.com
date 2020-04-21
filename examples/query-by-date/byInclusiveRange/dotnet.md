```csharp
var result = await Content.QueryAsync("CreationDate:['2010-08-30' TO '2010-10-30']");

// foreach (dynamic content in result)
//     Console.WriteLine($"{content.Id} {content.Name}");
```
