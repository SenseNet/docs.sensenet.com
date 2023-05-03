```csharp
dynamic content = await repository.LoadContentAsync(new LoadContentRequest
{
    Path = "/Root/Content/IT/Document_Library/Calgary/BusinessPlan.docx",
    Expand = new List<string> { "CheckedOutTo" },
    Select = new List<string> { "Locked", "CheckedOutTo/Name" },
}, cancel);
var locked = content.Locked;
var lockedBy = content.CheckedOutTo.Name;
Console.WriteLine($"Locked: {locked}, LockedBy: {lockedBy}");
```
