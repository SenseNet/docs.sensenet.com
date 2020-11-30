```csharp
var result = await Content.QueryAsync("+TypeIs:Task +DueDate:@@NextWeek@@ +AssignedTo:'@@CurrentUser@@'");

// foreach (dynamic content in result)
//     Console.WriteLine($"{content.Id} {content.Name}");
```
