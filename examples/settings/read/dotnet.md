```csharp
dynamic settings = await repository.GetResponseJsonAsync(new ODataRequest
{
    Path = "/Root/Content/IT",
    ActionName = "GetSettings",
    Parameters = { {"name", "MySettings" } }
}, HttpMethod.Get, cancel);
```
