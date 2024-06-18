```csharp
var result = await repository.QueryAsync(
    new QueryContentRequest {ContentQuery = "Type:Car AND Name:'AA?E642'" }, cancel);

```
