```csharp
string schema = await repository.GetResponseStringAsync(
    new ODataRequest {Path = "/Root", ActionName = "GetSchema"}, HttpMethod.Get, cancel);
```
