---
title:  "Authentication from a .Net client"
category: Tutorials
index: 0
version: v7.0
tags: [dotnet, getting started, client]
description: This tutorial shows you how to make authenticated calls to sensenet using the .Net client API.
---

# How to authenticate with a sensenet repository from a .Net client
Unless you are working with publicly available content - like blog posts - it is necessary to make **authenticated** calls to the sensenet repository to access content items. In this article you'll see how to achieve that in a .Net application.

> To learn more about the sensenet authentication flow and components, please visit [this article](/concepts/basics/06-authentication).
>
> If you do not have a repository yet, please head over to [www.sensenet.com](https://www.sensenet.com) to get one.
>
> This workflow requires the client application to have a **sensenet repository url**, a **client id** and also a **client secret**. To acquire these values, please visit your profile page and select the repository you want to connect to.

## Create a new console application
Create a new .Net Core console application either in command line (`dotnet new`), Visual Studio or VS Code.

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
using SenseNet.Client.Authentication;
using SenseNet.Extensions.DependencyInjection;
```

## Register and load a token store service
In an Asp.Net Core web application registering services is more straightforward, but in a **console application** you'll have to do some manual work to achieve the same result:

```csharp
// assemble a service container and register the sensenet token store
var provider = new ServiceCollection()
    .AddSenseNetClientTokenStore()
    .AddLogging(logging => logging.AddConsole())
    .BuildServiceProvider();

// load the token store service
var tokenStore = provider.GetService<TokenStore>();
```

## Set up the connection to the sensenet service
Create a server object and provide your sensenet service url, client id and secret. The token is requested from our auth server (which uses **IdentityServer 4** to manage tokens) and cached in the background. Our client library will add this auth token to every request you send to the sensenet repository service.

```csharp
// define sensenet service url
var server = new ServerContext
{
    Url = "https://example.sensenet.cloud"
};

// request and set the access token
server.Authentication.AccessToken = await tokenStore.GetTokenAsync(server, "clientid", "secret");

ClientContext.Current.AddServer(server);
```

From now on you'll be able to send authenticated requests to the server. The permission level of the request is determined by the client id you provide here: it represents a user in the content repository.

To learn more about the client API we offer for .Net developers and example requests you can make from a .Net Core client application, please visit the following articles:

- [Getting started with .Net Client](/tutorials/getting-started/getting-started-dotnet)
- [Content management](/api-docs/content-management) 
