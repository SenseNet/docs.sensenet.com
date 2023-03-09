---
title: Getting started with sensenet and the .Net client
metaTitle: "sensenet Tutorials - Getting started with sensenet and the .Net client"
metaDescription: "This tutorial shows you how to start using sensenet with the .Net client API."
---

In this tutorial we will connect to a sensenet service and load a collection of content items in a folder, using the .Net Client library for sensenet.

> You'll find a similar sample application on [GitHub](https://github.com/SenseNet/sn-client-dotnet/src/SenseNet.Client.DemoConsole).

<note severity="info">If you do not have a repository yet, please head over to <a href="https://www.sensenet.com">www.sensenet.com</a> to get one.</note>
<div>&nbsp;</div>

If you already have an application set up with the client API, you can learn more about how to work with content items using this client API if you visit the [following article]("/tutorials/content/manage-content-dotnet").

## Create a new console application
Create a new .Net console application either in command line (`dotnet new`), Visual Studio or VS Code.

Install the following NuGet packages:

```
SenseNet.Client
Microsoft.Extensions.Configuration.Json
Microsoft.Extensions.DependencyInjection
Microsoft.Extensions.Hosting
Microsoft.Extensions.Logging.Console
```

Add the following namespace registrations to the beginning of your `Program.cs` file:

```csharp
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using SenseNet.Client;
using SenseNet.Extensions.DependencyInjection;
```

## Register services
Although this is a command line tool, we recommend using the same dependency injection technique as in a web application. This makes working with our features a lot easier.

```csharp
// The default host builder adds all the necessary features
// for logging and configuration.
var host = Host.CreateDefaultBuilder()
    .ConfigureServices((context, services) =>
    {
        // add the sensenet client feature and configure the repository
        services
            .AddLogging(logging => logging.AddConsole())
            .AddSenseNetClient()
            .ConfigureSenseNetRepository(repositoryOptions =>
            {
                // Load configuration from a path of your choice.
                // This configuration should contain at least the repository url
                // and optionally authentication values.
                context.Configuration.GetSection("sensenet:repository").Bind(repositoryOptions);
            });
    }).Build();
```

### Configuration
The registration code above loads connection values from configuration. It is also possible to simply set them here in source code, but making these things configurable is always a good idea.

A sample `appsettings.json` file. 

```json
{
    "sensenet": {
        "repository": {
            "url": "https://example.sensenet.cloud",
            "authentication": {
                "ClientId": "",
                "ClientSecret": "",
                "ApiKey": ""
            }
        }
    }
}
```

> When you add a configuration file (like the default one above), please do not forget to set its `Copy to output directory` property so that .Net copies the file automatically when building the app.

## Access the repository
A sensenet repository service is represented by an **IRepository** object. This is an instance that contains methods for creating or loading content items. You can get the repository through the **IRepositoryCollection** service the following way:

```csharp
// Get the main entry point for the client API. In a web app you would
// get this service through the constructor of you controllers or other
// services.
var repositoryCollection = host.Services.GetRequiredService<IRepositoryCollection>();

// Get the repository instance. This instance is already set up with
// authentication, can be pinned or you can get it using this API 
// any number of times (as it is cached in the background).
var repository = await repositoryCollection.GetRepositoryAsync(CancellationToken.None);
```

## Load and iterate through a content collection
First we want to load all child items in an existing folder.

```csharp
var children = await repository.LoadCollectionAsync(repositoryPath, CancellationToken.None);
```

Iterate through the collection. 

```csharp
foreach (Content child in children)
{
    // process content items
    Console.WriteLine(child.Path);
}
```

To learn more about how to work with content items using this client API, please visit the [following article]("/tutorials/content/manage-content-dotnet").

## Connect to multiple repositories
It is possible to register and access multiple repositories using this client API. In that case you have to configure the repositories by name:

```csharp
services
    .AddSenseNetClient() // call this only once
    .ConfigureSenseNetRepository("repo1", repositoryOptions =>
    {
        context.Configuration.GetSection("sensenet:repo1").Bind(repositoryOptions);
    })
    .ConfigureSenseNetRepository("repo2", repositoryOptions =>
    {
        context.Configuration.GetSection("sensenet:repo2").Bind(repositoryOptions);
    });
```

Note that you have to configure urls and authentication separately for the two repositories.
To work with these repositories you access the repository objects by name:

```csharp
var repository1 = await repositoryCollection.GetRepositoryAsync("repo1", CancellationToken.None);
var repository2 = await repositoryCollection.GetRepositoryAsync("repo2", CancellationToken.None);
```

Connecting to multiple repositories is usually required in a migration or import/export scenario. In that case please consider using the [Import-export tool]("/tutorials/content/import-export") or library that adds more features specifically for this use case.