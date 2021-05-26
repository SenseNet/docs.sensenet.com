---
title: "Sourcing from sensenet"
metaTitle: "Gatsby - Sourcing from sensenet"
metaDescription: "Gatsby - Sourcing from sensenet"
---

# What is sensenet?

[sensenet](https://sensenet.com) is an open-source headless content management system (CMS) built mainly for developers and development companies.
It is a content repository where you can store all your content and reach it through APIs. It is a solid base for your custom solutions, offering an enterprise-grade security and permission system, versioning, dynamic content types and even more.

# Prerequisites

This guide assumes that you have Gatsby project set up. If you need to set up a project, check out the [Quick Start guide](https://www.gatsbyjs.com/docs/quick-start/), then come back.

For using this plugin sensenet repository is also required. If you don't have visit [this site](https://profile.sensenet.com/?redirectToLogin) for registration.

# Sourcing data from sensenet

First, you should have data in your sensenet repository. Initially you have a _Sample workspace_ with sample contents under '/Root/Content' path. For your gatsby site you have to create your own unique contents what you would like to use for your site. It is also possible to create [new content types](https://docs.sensenet.com/tutorials/content-types) or you can also choose from the basic content types, it is up to you.

If you have finished preparing the contents for the site you need to install [gatsby-source-sensenet](https://github.com/SenseNet/sn-client/tree/develop/packages/gatsby-source-sensenet) plugin to read the data from your sensenet repository.

# Install

```shell
npm install gatsby-source-sensenet
```

# How to use

```javascript
// In your gatsby-config.js
module.exports = {
  plugins: [
    {
      resolve: `gatsby-source-sensenet`,
      options: {
        host: '<YOUR REPOSITORY URL>',
        path: '<RELATIVE PATH TO YOUR CONTENTS>', //optional
        oDataOptions: '<ODATA OPTIONS>' //optional
        accessToken: '<ACCESS TOKEN FOR AUTHENTICATION>'
        level: '<NUMBER OF LEVELS TO READ CONTENTS>' //optional
      },
    },
  ],
}
```

There are two ways to get the missing information:
From your [profile site](https://docs.sensenet.com/concepts/basics/06-authentication-secrets) and from [admin-ui](https://docs.sensenet.com/guides/settings/api-and-security) as well. Here you can check your repository url and identity server url, too.

If you would like to generate accesstoken programatically you can use _codeLogin_ function from [sn-authentication-oidc-react](https://github.com/SenseNet/sn-client/tree/develop/packages/sn-authentication-oidc-react) package.

```shell
npm install @sensenet/authentication-oidc-react
```

Example:

```javascript
// In your gatsby-config.js
const fetch = require("node-fetch");
const { codeLogin } = require("@sensenet/authentication-oidc-react");

module.exports = {
  plugins: [
    {
      resolve: `gatsby-source-sensenet`,
      options: {
        host: "<YOUR REPOSITORY URL>",
        accessToken: async () => {
          const authData = await codeLogin({
            clientId: process.env.GATSBY_REACT_APP_CLIENT_ID || "",
            clientSecret: process.env.GATSBY_REACT_APP_CLIENT_SECRET || "",
            identityServerUrl: "<YOUR IDENTITY SERVER URL>",
            fetchMethod: fetch,
          });
          return authData.access_token;
        },
      },
    },
  ],
};
```

**GATSBY_REACT_APP_CLIENT_ID** and **GATSBY_REACT_APP_CLIENT_SECRET** environmental variables should be defined. fetchmethod is `window.fetch.bind(window)` by default but you can overwrite it like in the example above.

# Examples of Gatsby + sensenet websites

An example site for using this plugin is at [sn-blog-gatsby](https://github.com/SenseNet/sn-client/tree/develop/examples/sn-blog-gatsby)
