```csharp
var result = await Content.QueryAsync("TaskCompletion:<50");

//foreach (dynamic content in result)
//    Console.WriteLine($"{content.Id} {content.Name}");
```
