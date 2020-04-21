```csharp
var result = await Content.QueryAsync("CalendarEvent AND StartDate:@@Today@@");

// foreach (dynamic content in result)
//     Console.WriteLine($"{content.Id} {content.Name}");
```
