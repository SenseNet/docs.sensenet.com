```csharp
await repository.LoadContentAsync(new LoadContentRequest
{
	Path = "/Root/Content/Cars/AAKE452",
	Select = new[] { "Make", "Model", "Color" }
}, cancel)
```
