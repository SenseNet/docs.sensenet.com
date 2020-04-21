```csharp
var result = await Content.QueryAsync("Type:Folder .SORT:Name .SORT:Index");

// foreach (dynamic content in result)
//     Console.WriteLine($"{content.Id} {content.Name}");
```
