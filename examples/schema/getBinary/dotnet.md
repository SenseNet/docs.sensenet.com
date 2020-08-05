```csharp
string ctd = null;
await RESTCaller.GetStreamResponseAsync(1064, async message =>
{
    ctd = await message.Content.ReadAsStringAsync();
}, CancellationToken.None);
```
