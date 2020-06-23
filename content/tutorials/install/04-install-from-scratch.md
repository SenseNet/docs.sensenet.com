---
title: "Install from scratch"
metaTitle: "sensenet - Install sensenet from scratch"
metaDescription: "sensenet - How to install sensenet from scratch"
---

> Before you start installing sensenet into a new web application, please consider using one of the available project templates to save some time installing NuGet packages and assembling your repository.
> 
> Or better yet: try [SNaaS]() where you do not have to install anything and get a cloud hosted repository.

# First things first: the environment
A sensenet application architecture contains a couple of components and we offer several implementations for those:

- web applcation
- database: in-memory or SQL
- Lucene index: local or centralized
- communication: RabbitMQ, MSMQ
- authentication: IdentityServer

Choosing the required packages is based on which implementation you want to use. In this article we will provide examples for different component combinations, but new combinations are also possible.

> Although sensenet can be installed in a .Net Framework environment, this article is about installing sensenet in a modern, **.Net Core 3.1+** environment.

## Database
This is likely the fist decision you make. If you only want to try sensenet without having a _persistent_ content repository, the easiest and fastest way to start is to use an **in-memory repository** - without having to install a SQL database. Please bear in mind that in that case all your changes will be lost when you stop the application: your modifications live only for the life cycle of the application.

In any other case you will have to create a **console application** as an installer tool. This application can be used later to install additional sensenet packages and perform export or import operations.

To learn more about installing the database, follow [this link]().

# The web application
You will need either an existing or a new Asp.Net web application to start with. You can use any of the built-in Asp.Net web app templates, because sensenet provides only the platform and the repository - authentication, UI and all app-specific layers are the responsibility of the application.

![Web application](../img/tutorials/install/web-create.png)

## NuGet packages
As we mentioned before: the list of packages to install depends on the environment. Please choose the ones you need from this list, and add all additional packages later when you need extra features.

##### Mandatory
```
SenseNet.Services.Core
SenseNet.OData
```

A lightweight in-memory repository:

```
SenseNet.ContentRepository.InMemory
```

Or in case of a persistent environment, we recommend starting with local storage and index implementations:

```
SenseNet.Search.Lucene29.Local
SenseNet.Security.EFCSecurityStore
```

##### Optional but useful
```
SenseNet.Tools
```

##### Non-sensenet packages
In this example we rely on the official JWT authentication package, but you can use the authentication method you want.

```
Microsoft.AspNetCore.Authentication.JwtBearer
```

## Application start
There are two things you need to do at app start time:

- start the repository
- configure sensenet-related services for the application

#### In-memory app start
Please put the following code in your `Program.cs` file in case you chose the in-memory repository.

The following repository start sequence is defined in the in-memory package above.

```csharp
public static void Main(string[] args)
{
    var builder = CreateHostBuilder(args);
    var host = builder.Build();

    using (InMemoryExtensions.StartInMemoryRepository(repositoryBuilder =>
    {
        // access provider designed for a web environment
        repositoryBuilder.UseAccessProvider(new UserAccessProvider());
    }))
    {
        // put repository initialization here (e.g. import)
        host.Run();
    }
}
```

#### Persistent repository app start
Please put the following code in your `Program.cs` file in case you chose the real database repository.

```csharp
public static void Main(string[] args)
{
    var builder = CreateHostBuilder(args);
    var host = builder.Build();
    var config = host.Services.GetService(typeof(IConfiguration)) as IConfiguration;
    var environment = host.Services.GetService(typeof(IHostEnvironment)) as IHostEnvironment;

    var repositoryBuilder = GetRepositoryBuilder(config, environment);

    using (Repository.Start(repositoryBuilder))
    {
        host.Run();
    }
}
```

The `GetRepositoryBuilder` method above is a helper method that assembles the necessary providers for this repository instance - e.g. db and indexing provider.

```csharp
internal static RepositoryBuilder GetRepositoryBuilder(IConfiguration configuration, IHostEnvironment environment)
{
    // assemble a SQL-specific repository

    var repositoryBuilder = new RepositoryBuilder()
        .UseConfiguration(configuration)
        .UseLogger(new SnFileSystemEventLogger())
        .UseTracer(new SnFileSystemTracer())
        .UseAccessProvider(new UserAccessProvider())
        .UseDataProvider(new MsSqlDataProvider())
        .UseSecurityDataProvider(new EFCSecurityDataProvider(connectionString: ConnectionStrings.ConnectionString))
        .UseLucene29LocalSearchEngine(Path.Combine(Environment.CurrentDirectory, "App_Data", "LocalIndex"))
        .StartWorkflowEngine(false)
        .UseTraceCategories("Event", "Custom", "System") as RepositoryBuilder;

    Providers.Instance.PropertyCollector = new EventPropertyCollector();

    return repositoryBuilder;
}
```

#### Startup class
To define the necessary services for the application, please add the following lines to the `ConfigureServices` method in your `Startup` class.

> The following example relies on the _JwtBearer_ package mentioned above. You can learn more about authentication later in this article.

```csharp
// Authentication: this relies on an auth service (e.g. IdentityServer). Change this to your
// preferred authentication mechanism.
services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
    .AddJwtBearer(options =>
    {
        options.Authority = Configuration["sensenet:authentication:authority"];
        options.RequireHttpsMetadata = false;
        options.SaveToken = true;
        options.Audience = "sensenet";
    });

// add allowed client SPA urls
services.AddSenseNetCors();
```

Add the following middlewares to the pipeline in the `Configure` method (after routing):

```csharp
// custom CORS policy
app.UseSenseNetCors();
// use Authentication and set User.Current
app.UseSenseNetAuthentication(options =>
{
    options.AddJwtCookie = true;
});

app.UseAuthorization();

// Add the sensenet binary handler
app.UseSenseNetFiles();
// OData middleware
app.UseSenseNetOdata();
```

### Configuration
sensenet works with the official `IConfiguration` API provided by .Net Core. That means you can define config values in any of the well-known ways (appSettings.json, environment, etc.).

sensenet features rely on predefined configuration values that usually reside under the `sensenet` section - with the exception of database connection strings that are stored in the standard `ConnectionStrings` section.

The following is an appSettings example that contains the connection string and IdentityServer url as the authority. These are the two values required by this example app.

```json
{
  "ConnectionStrings": {
    "SnCrMsSql": "[your sql connection string]"
  },
  "sensenet": {
    "authentication": {
      "authority": "https://localhost:5001"
    } 
  }
}
```