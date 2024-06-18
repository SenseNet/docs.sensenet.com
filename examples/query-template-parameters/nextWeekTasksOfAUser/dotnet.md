```csharp
var result = await repository.QueryAsync(new QueryContentRequest
    { ContentQuery = "+TypeIs:Task +DueDate:>@@NextWeek@@ +AssignedTo:'@@CurrentUser@@'" }, cancel);
```
