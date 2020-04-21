```csharp
var content = Content.CreateNew("/Root/Content/IT", "EventList", "My Calendar",
    "/Root/ContentTemplates/DemoWorkspace/Demo_Workspace/Calendar");
content["DisplayName"] = "Calendar";
content["Index"] = 2;
await content.SaveAsync();
```
