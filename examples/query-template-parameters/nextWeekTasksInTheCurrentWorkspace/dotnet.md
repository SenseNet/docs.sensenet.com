```csharp
var result = await Content.QueryAsync("+TypeIs:Task +DueDate:@@NextWeek@@ +InTree:'@@CurrentWorkspace.Path@@'");

// foreach (dynamic content in result)
//     Console.WriteLine($"{content.Id} {content.Name}");
```
