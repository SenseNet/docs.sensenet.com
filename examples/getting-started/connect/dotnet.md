```csharp
// define sensenet service url
var server = new ServerContext
{
    Url = "https://dev.demo.sensenet.com"
};

// Token authentication
// For an example on fetching a token from an authority, please
// look at the client console app source code mentioned above.
server.Authentication.AccessToken = "token";

ClientContext.Current.AddServer(server);
```
