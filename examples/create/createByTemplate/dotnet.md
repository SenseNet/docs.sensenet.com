```csharp
var content = repository.CreateContentByTemplate("/Root/Content/IT", "EventList", "My Calendar",
    "/Root/ContentTemplates/DemoWorkspace/Demo_Workspace/Calendar");
content["DisplayName"] = "Calendar";
content["Index"] = 2;
await content.SaveAsync(cancel);
```
