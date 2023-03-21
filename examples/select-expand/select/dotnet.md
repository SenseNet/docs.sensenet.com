```csharp
await repository.LoadContentAsync(new LoadContentRequest
{
	Path = "/Root/Content/IT",
	Select = new[] { "DisplayName", "Description" }
}, cancel)
```
