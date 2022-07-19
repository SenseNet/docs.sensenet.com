---
title:  "Authentication using API keys"
metaTitle: "sensenet Tutorials - Authentication using API keys"
category: Tutorials
index: 0
version: v7.0
tags: [getting started, client, api, authentication]
description: This tutorial shows you how to make authenticated calls to sensenet using API keys.
---

# How to authenticate with a sensenet repository using API keys
Unless you are working with publicly available content - like blog posts - it is necessary to make **authenticated** calls to the sensenet repository to access content items. In this article you'll see how you can configure 3rd party applications and services to make authenticated requests to the repository without having to modify their code.

<note severity="info">To learn more about the sensenet authentication flow and components, please visit <a href="/concepts/basics/06-authentication" target="_blank">this article</a>.<br/>
If you do not have a repository yet, please head over to <a href="https://www.sensenet.com" target="_blank">www.sensenet.com</a> to get one.</note>

## How it works
An API key is a string token that represents a user in the repository. If you authenticate with an api key, all your requests will be made in the name of that user. You can simply provide the token in the url or in the header of an HTTP request.

<note severity="info">Please note that API keys supposed to be used by 3rd party services and not end-users. Protect your API keys securely because they are usually valid for a long time.</note>

You can get and manage API keys using the following OData actions:

##### Get all API keys
```
GET https://example.com/odata.svc/Root/IMS/Public/('User1')/GetApiKeys
```
##### Create an API key
```
POST https://example.com/odata.svc/Root/IMS/Public/('User1')/CreateApiKey
```
##### Delete an API key
```
POST https://example.com/odata.svc/Root/IMS/Public/('User1')/DeleteApiKey
POST https://example.com/odata.svc/('Root')/DeleteApiKey
{
    'apiKey': 'abcd'
}
```
##### Delete API keys of a user
This is an administrator-only action.
```
POST https://example.com/odata.svc/Root/IMS/Public/('User1')/DeleteApiKeys
```
##### Delete all API keys
This is an administrator-only action.
```
POST https://example.com/odata.svc/('Root')/DeleteApiKeys
```

## Sending requests
If you have an API key, you'll be able to send authenticated requests to the server. The permission level of the request is determined by the API key: it represents a user in the content repository.

You can provide the API key in two ways:

##### In the url
```
GET https://example.com/odata.svc/Root/Content/MySecureFolder?apikey=abcd
```
##### In the request header
```
apikey=abcd
```

To learn more about the client API we offer for .Net developers and example requests you can make from a .Net Core client application, please visit the following articles:

- [Getting started with .Net Client](/tutorials/getting-started/getting-started-dotnet)
- [Content management](/api-docs/content-management) 
