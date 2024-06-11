```csharp
await repository.InvokeActionAsync(new OperationRequest
{
    Path = "/Root/Content",
    OperationName = "AddAllowedChildTypes",
    PostData = new {contentTypes = new[] {"Image", "CalendarEvent", "Task"}}
}, cancel);
```
