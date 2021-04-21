---
title: Getting started
metaTitle: sensenet API - Getting started
metaDescription: How to start working with sensenet API
---

# Create a content repository

<div class="registerButton">
  <a href="https://profile.sensenet.com/?redirectToLogin" target="_blank">Register your free repo</a>
</div>

Next you'll need to model your content, create your custom types, and publish some documents to your repository.

# Try out sensenet with one of the demo repositories

You can start exploring one of our demo repositories filled with various demo content, just log in and you are ready to go! No registration required.

These environments are based on a daily build, which means all the built-in demo contents are reimported, the configurations are restored, and the customer created stuff are removed every day.

Just like with a dedicated sensenet instance, with these demos you can create, store, edit, organize and publish any type of content.

Now, let's take a look at how to connect the chosen content repository with your project.

# Your project

## .Net Client
You can connect to sensenet from either a **console application**, a **desktop application** or even from a server-side ASP.NET **web application** (for backend requests). The only requirement is to add the dependency below from NuGet.

<note title="sensenet as a remote service">The following .Net examples will help you connect to a remote sensenet service. To work in an in-proc environment when you have access to the server-side API of sensenet and a direct access to the repository database requires a different approach.</note>

If you are looking for a basic .Net Console application example that connects to a sensenet repository, please check out the source code here:

- [.Net Client Console application](https://github.com/SenseNet/sn-vs-projecttemplates/tree/master/src/netcore/SnConsoleClient)

# Include the dependencies

Let's add the following dependencies to your project.

<tab category="basic-concepts" article="getting-started" example="dependencies" />

# Connect to the API

<tab category="basic-concepts" article="getting-started" example="connect" />

# Configure your project

Followings should be created for using the API calls

<tab category="basic-concepts" article="getting-started" example="configuration" />

# Authentication

If you are working with private contents (in sensenet by default every content is private for non-authenticated users), you'll need to add some configurations and include your repository's access token. The required client ID's and secrets can be found on your [SNaaS profile](https://profile.sensenet.com/?redirectToLogin). If you want to know more about exactly what they are for and how you can use them, check [Client IDs and secrets](/concepts/basics/06-authentication-secrets) and the [authentication tutorials](/tutorials/authentication/how-to-authenticate-react).



