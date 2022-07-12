---
title:  "Authentication from a .Net client"
metaTitle: "sensenet Tutorials - Authentication from a .Net client"
category: Tutorials
index: 0
version: v7.0
tags: [dotnet, getting started, client]
description: This tutorial shows you how to make authenticated calls to sensenet using the .Net client API.
---

# How to authenticate with a sensenet repository from a .Net client
Unless you are working with publicly available content - like blog posts - it is necessary to make **authenticated** calls to the sensenet repository to access content items. In this article you'll see how to achieve that in a .Net application.

<note severity="info">If you do not have a repository yet, please head over to <a href="https://www.sensenet.com">www.sensenet.com</a> to get one.<br/>
To learn more about the sensenet authentication flow and components, please visit <a href="/concepts/basics/06-authentication">this article</a>.
<br/>
This workflow requires the client application to have a <strong>sensenet repository url</strong>, a <strong>client id</strong> and also a <strong>client secret</strong>. To acquire these values, please visit your profile page and select the repository you want to connect to.
</note>
<div>&nbsp;</div>

## Create a new console application
Create a new .Net Core console application either in command line (`dotnet new`), Visual Studio or VS Code.

Install the following NuGet packages:

```
SenseNet.Client
Microsoft.Extensions.Configuration.Json
Microsoft.Extensions.DependencyInjection
Microsoft.Extensions.Logging.Console
```

Add the following namespace registrations to the beginning of your `Program.cs` file:

```csharp
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using SenseNet.Client;
using SenseNet.Extensions.DependencyInjection;
```

## Add config file and load configuration
Add a new json file to your project called `appSettings.json` and set the *Copy to output directory* property to **Copy if newer** in its properties window. This will ensure that the config file will be present when you start the app.

```csharp
IConfiguration config = new ConfigurationBuilder()
    .AddJsonFile("appSettings.json", optional: true, reloadOnChange: true)
    .Build();
```

## Add the repository feature
In an Asp.Net Core web application registering services is more straightforward, but in a **console application** you'll have to do some manual work to achieve the same result:

```csharp
// assemble a service container and register the sensenet repository service
var provider = new ServiceCollection()
    .AddSenseNetRepository(options => { config.Bind("sensenet", options); })
    .AddLogging(logging => logging.AddConsole())
    .BuildServiceProvider();
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
// load the factory service manually or through the constructor in another service or controller
var serverFactory = provider.GetRequiredService<IServerContextFactory>();
var server = await serverFactory.GetServerAsync();
```

<note severity="info">Please note that it is also possible to register and get server objects by name. This way you can connect to multiple sensenet repositories at the same time.</note>

## Make a request to the server
From now on you'll be able to send authenticated requests to the server. The permission level of the request is determined by the client id you provide here: it represents a user in the content repository.

```csharp
var children = await Content.LoadCollectionAsync("/Root/Content", server);
```

To learn more about the client API we offer for .Net developers and example requests you can make from a .Net Core client application, please visit the following articles:

- [Getting started with .Net Client](/tutorials/getting-started/getting-started-dotnet)
- [Content management](/api-docs/content-management) 
