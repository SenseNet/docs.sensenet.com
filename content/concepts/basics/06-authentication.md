---
title: "Authentication"
metaTitle: "sensenet Concepts - Authentication"
metaDescription: "sensenet Authentication"
---

The **sensenet as a Service** offer is all about making your development work easier and simpler - while still maintaining the security standards expected in an enterprise environment.

For securing repositories hosted in our environment we use [IdentityServer4](https://identityserver4.readthedocs.io/en/latest) - the Open Source **OpenID Connect** and **OAuth 2.0** framework for .NET.

This means that developers who are familiar with OAuth 2.0 and OpenID Connect will be able to start working with our APIs in no time, because our service supports the usual protocols and APIs provided by IdentityServer4.

<note severity="info">Authentication is of course not necessary in case you are working with public content (e.g. blog posts or articles), but in most cases that is not sufficient.</note>

## The authentication workflow
In short, clients will need to connect to an authentication service (dedicated to the repository) for an access token. This token than should be sent to the repository service along every request to make authenticated calls and access secured resources.

<note severity="info">To learn more about the usual workflows, please read the <a href="https://identityserver4.readthedocs.io/en/latest/intro/big_picture.html" target="_blank">IdentityServer4</a> documentation.</note>

## Client types
There are two main types of clients when you are authenticating:

- clients that require per-user authentication: web or mobile applications
- tool-like clients: console or some desktop apps and B2B use cases

### Individual users
In the first case users need to sign in to the application by themselves (either using a username and password or a login service like Google or GitHub). In this case requests (and possible content changes in the repository) are made in the name of the currently signed in user. This is the use case of SPAs (single-page or one-page applications) and most mobile apps.

<note severity="info">This workflow requires the client application to have an <strong>authority url</strong> and a <strong>client id</strong>. To acquire these values, please visit your profile page and select the repository you want to connect to.</note>

### Tools and server-side apps
Tools on the other hand require a **clientid** and a **secret** which acts like a username and password for a dedicated technical user. In this case requests are made in the name of this technical user, regardless of who executes the client application. This workflow is used by synchronization or batch operation tools or in server-to-server communication.

<note severity="info">This workflow requires the client application to have a <strong>sensenet repository url</strong>, a <strong>client id</strong> and also a <strong>client secret</strong>. To acquire these values, please visit your profile page and select the repository you want to connect to.</note>
<div>&nbsp;</div>
<note severity="error">Make sure that nobody gets hold of your clientid and most importantly the client secret. If that happens, please visit your profile immediately, invalidate the secret and generate a new one to make sure nobody unauthorized can access the repository.</note>

## Client technologies
### JavaScript
The most common use case is to authenticate from a client-side application written in JavaScript or TypeScript. There is a well-known library that implements the [OIDC protocol](https://openid.net/connect/) and does the heavy lifting for you. Please take a look at the following article to learn how can you integrate that into your application:

- [JavaScript client for IdentityServer4](https://docs.identityserver.io/en/latest/quickstarts/4_javascript_client.html)

### React
We also have a React library for making the client authentication process even more easier. Please visit the following article for details:

- [Authentication from a React application](/tutorials/authentication/how-to-authenticate-react)

### .Net
If you are writing a console or desktop application, or want to make server-side requests from an Asp.Net application to the repository service, you should use our [client library](https://github.com/SenseNet/sn-client-dotnet) to connect to the repository. It has an API for connecting to the authority and requesting an access token.

To learn how to connect to sensenet from .Net, please visit the following tutorial:

- [Authentication from a .Net client](/tutorials/authentication/how-to-authenticate-dotnet)
