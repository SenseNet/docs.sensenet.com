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
This workflow requires the client application to have a <strong>sensenet repository url</strong> and either a <strong>client id</strong> and also a <strong>client secret</strong>, or alternatively an <a href="/tutorials/authentication/how-to-authenticate-apikey">API key</a>. To acquire these values, please visit your profile page and select the repository you want to connect to, or directly log in to the admin UI of your repository. There you can get the security values on the <a href="/guides/settings/api-and-security">Api and security</a> page.
</note>
<div>&nbsp;</div>

## Create a new console application
As a prerequisite, please visit the [.Net console application]("/tutorials/getting-started/getting-started-dotnet") tutorial to see how to create a console app that connects to a sensenet repository.

## Add config file and load configuration
Add a new json file to your project called `appsettings.json` and set the *Copy to output directory* property to **Copy if newer** in its properties window. This will ensure that the config file will be present when you start the app.

If you followed the tutorial above, all your services are already registered. Your application will load
 the necessary services and the configuration from the `sensenet:repository` segment. The structure of the configuration should be the following:

```json
{
  "sensenet": {
    "repository": {
      "Url": "https://example.sensenet.cloud",
      "Authentication": {
        "ClientId": "abc",
        "ClientSecret": "abcdefghijkl",
      }
    }
  }
}
```
Or using an API key:

```json
{
  "sensenet": {
    "repository": {
      "Url": "https://example.sensenet.cloud",
      "Authentication": {
        "ApiKey": "abcdefghijk"
      }
    }
  }
}
```

To be able to connect to a sensenet service, you will either have to fill the **clientid/secret** pair, or use an **API key**. See the links at the beginning of this article to see how can you acquire them.

## Get the repository instance
If you configured the values above correctly, you will get an authenticated repository instance when using the API described in the console app getting started article:

```csharp
var repositoryCollection = host.Services.GetRequiredService<IRepositoryCollection>();
var repository = await repositoryCollection.GetRepositoryAsync(CancellationToken.None);
```
You do not have to do anything else, the instance is already filled with the necessary tokens, you can start working with content items.

<note severity="info">Please note that it is also possible to register and get repository objects by name. This way you can connect to <strong>multiple sensenet repositories</strong> at the same time.</note>

To learn more about the client API we offer for .Net developers and example requests you can make from a .Net Core client application, please visit the following articles:

- [Getting started with .Net Client](/tutorials/getting-started/getting-started-dotnet)
- [Content management](/api-docs/content-management) 
