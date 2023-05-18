```csharp
var response = await repository.GetResponseStringAsync(new ODataRequest
{
    Path = "/Root/Content",
    ActionName = "WriteSettings",
    PostData = new
    {
        name = "MySettings",
        settingsData = new { P1 = "V11"}
    }
}, HttpMethod.Post, cancel);
```
