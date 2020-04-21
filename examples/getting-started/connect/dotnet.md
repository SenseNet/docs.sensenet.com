```csharp
// define service url and access credentials (basic authentication)
ClientContext.Current.AddServer(new ServerContext
{
    Url = "https://dev.demo.sensenet.com",
    Username = "builtin\\admin",
    Password = "admin"
});

// alternative: token authentication
var server = new ServerContext
{
    Url = "https://dev.demo.sensenet.com"
};
server.Authentication.AccessToken = "token";

ClientContext.Current.AddServer(server);
```
