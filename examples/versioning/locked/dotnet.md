```csharp
dynamic content = await Content.LoadAsync(new ODataRequest
{
    IsCollectionRequest = false,
    Path = "/Root/Content/IT/Document_Library/Calgary/BusinessPlan.docx",
    Expand = new List<string> { "CheckedOutTo" },
    Select = new List<string> { "Locked", "CheckedOutTo/Name" },
});
var locked = content.Locked;
var lockedBy = content.CheckedOutTo.Name;
Console.WriteLine($"Locked: {locked}, LockedBy: {lockedBy}");
```
