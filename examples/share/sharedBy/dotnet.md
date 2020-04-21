```csharp
var result = await Content.QueryAsync("SharedBy:@@CurrentUser@@");

//foreach (dynamic content in result)
//    Console.WriteLine($"{content.Id} {content.Name}");
```
