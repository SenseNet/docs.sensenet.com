---
title:  "Authentication from a .Net web application"
metaTitle: "sensenet Tutorials - Authentication from a .Net web application"
category: Tutorials
index: 0
version: v7.0
tags: [dotnet, getting started, web]
description: This tutorial shows you how to make authenticated calls to sensenet from a .net core web application using the .Net client API.
---

# How to authenticate with a sensenet repository from an Asp.Net Core web application
Unless you are working with publicly available content - like blog posts - it is necessary to make **authenticated** calls to the sensenet repository to access content items. In this article you'll see how to achieve that in a .Net web application.

This process is almost the same as authenticating from a [console application](/tutorials/authentication/how-to-authenticate-dotnet), only the service registration is different.

<note severity="info">If you do not have a repository yet, please head over to <a href="https://www.sensenet.com">www.sensenet.com</a> to get one.<br/>
To learn more about the sensenet authentication flow and components, please visit <a href="/concepts/basics/06-authentication">this article</a>.
<br/>
This workflow requires the client application to have a <strong>sensenet repository url</strong> and either a <strong>client id</strong> and also a <strong>client secret</strong>, or alternatively an <a href="/tutorials/authentication/how-to-authenticate-apikey">API key</a>. To acquire these values, please visit your profile page and select the repository you want to connect to, or directly log in to the admin UI of your repository. There you can get the security values on the <a href="/guides/settings/api-and-security">Api and security</a> page.
</note>
<div>&nbsp;</div>

## Create a new Asp.Net Core web application
Create a new Asp.Net Core web application either in command line (`dotnet new`), Visual Studio or VS Code.

Install the following NuGet packages:

```
SenseNet.Client
Microsoft.Extensions.DependencyInjection
Microsoft.Extensions.Logging.Console
```

Add the following namespace registrations to the beginning of your `Program.cs` file:

```csharp
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using SenseNet.Client;
using SenseNet.Extensions.DependencyInjection;
```

## Add the repository feature
In the `ConfigureServices` method of the `Startup` class register the feature.

```csharp
public void ConfigureServices(IServiceCollection services)
{
    // register the repository feature
   services.AddSenseNetClient()
            .ConfigureSenseNetRepository(repositoryOptions =>
            {
                // Load configuration from a path of your choice.
                // This configuration should contain at least the repository url
                // and optionally authentication values.
                context.Configuration.GetSection("sensenet:repository").Bind(repositoryOptions);
            })
   
   // add other services...
}
```

The `AddSenseNetClient` method above registers the necessary client services. `ConfigureSenseNetRepository` lets you configure connection values for a particular repository. The example above loads the configuration from the `sensenet:repository` segment. The structure of the configuration must be the following:

```json
{
  "sensenet": {
    "repository": {
      "Url": "https://example.sensenet.cloud",
      "Authentication": {
        "ClientId": "",
        "ClientSecret": ""
      }
    }
  }
}
```

## Get the repository service
You can get an authenticated repository instance from the `IRepositoryCollection` service. The first time you get the object the api will do the authentication steps in the background and cache the instance. All subsequent requests will be fast, so you do not have to pin the repository object - but you can do so if you want to.

```csharp
// load the factory service through the constructor in another service or controller
public ContentController(IRepositoryCollection repositoryCollection)
{
   _repositoryCollection = repositoryCollection;
}

// use it in an action method
public void MyMethod()
{
    // get the repository
   var repository = await _repositoryCollection.GetRepositoryAsync(cancellationToken);
   var content = await repository.LoadContentAsync(path, cancellationToken);
}
```

> Please note that it is also possible to register and get repositories by name. This way you can connect to **multiple sensenet repositories** at the same time.

From now on you'll be able to send authenticated requests to the sensenet service. The permission level of the request is determined by the client id (or API key) you provide in your configuration: it represents a user in the content repository.

To learn more about the client API we offer for .Net developers and example requests you can make from a .Net Core client application, please visit the following articles:

- [Getting started with .Net Client](/tutorials/getting-started/getting-started-dotnet)
- [Content management](/api-docs/content-management) 
