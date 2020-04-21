```csharp
var result = await Content.QueryAsync("TypeIs:File .SORT:ModificationDate");

// foreach (dynamic content in result)
//     Console.WriteLine($"{content.Id} {content.Name}");
```
