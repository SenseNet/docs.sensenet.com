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

> To learn more about the sensenet authentication flow and components, please visit [this article](/concepts/basics/06-authentication).
>
> If you do not have a repository yet, please head over to [www.sensenet.com](https://www.sensenet.com) to get one.
>
> This workflow requires the client application to have a **sensenet repository url**, a **client id** and also a **client secret**. To acquire these values, please visit your profile page and select the repository you want to connect to.

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
   services.AddSenseNetRepository(options => { Configuration.Bind("sensenet", options); });
   
   // add other services...
}
```

The `AddSenseNetRepository` method above registers the necessary client services and loads the configuration from the `sensenet` segment. The structure of the configuration must be the following:

```json
{
  "sensenet": {
    "Url": "https://example.sensenet.cloud",
    "Authentication": {
      "ClientId": "",
      "ClientSecret": ""
    }
  }
}
```

## Get the server connection
You can get an authenticated server context from a factory service. The first time you get the object the api will do the authentication steps in the background and cache the server context. All subsequent requests will be fast, so you do not have to pin the server object - in fact, it is advisable to **only pin the factory service** and get the server context from it every time you need to access the repository.

```csharp
// load the factory service through the constructor in another service or controller
public ContentController(IServerContextFactory serverFactory)
{
   _serverFactory = serverFactory;
}

// use it in an action method
public void MyMethod()
{
    // get the server every time
   var server = await _serverFactory.GetServerAsync();
   var content = await Content.LoadAsync(path, server);
}
```

> Please note that it is also possible to register and get server objects by name. This way you can connect to multiple sensenet repositories at the same time.

From now on you'll be able to send authenticated requests to the server. The permission level of the request is determined by the client id you provide here: it represents a user in the content repository.

To learn more about the client API we offer for .Net developers and example requests you can make from a .Net Core client application, please visit the following articles:

- [Getting started with .Net Client](/tutorials/getting-started/getting-started-dotnet)
- [Content management](/api-docs/content-management) 
