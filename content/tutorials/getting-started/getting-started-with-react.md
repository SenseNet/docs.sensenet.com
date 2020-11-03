---
title: "Getting started with React"
metaTitle: "sensenet Tutorials - Getting started with React"
metaDescription: "sensenet Tutorials - Getting started with React"
---

# Getting started with React and sensenet

In this tutorial, you will discover how to start a new project using [React framework](https://reactjs.org/) and sensenet.

# Create react app

First of all you will need a react environment what you can create easily with [create-react-app](https://github.com/facebook/create-react-app#creating-an-app).

E.g.: `yarn create react-app example`

After creating your environment you can run it from the root (`cd example`) with the `yarn start` command.

You should see your new application with a greeting to the world on localhost:3000 address in your browser.

![create react app](getting-started-with-react/create-react-app.png)

To install sensenet core package use the following command:

`yarn add @sensenet/client-core`

In this tutorial we assume that all the content items you are working with are **public** (accessible for visitors). You can make content (for example files or whole folders) public on the admin UI: on the **Set permissions** page hit the Make content public button.

To access private content, please check out how to add authentication to your application in the next chapter, otherwise you can skip this part.

# Build a simple app with authentication (Optional)

You should add new dependencies to your environtment with

`yarn add @sensenet/authentication-oidc-react` --> for authentication

`yarn add @sensenet/hooks-react` --> for repository management

`yarn add react-router-dom` --> (optional) for routing

After that you will need configuration.js file (you can add it under your src folder). In this file you can set your sensenet repository and your identity server as well. See the following documentation for the [tasks on server side](../content/guides/getting-started/how-to-authenticate-dotnet.md).

```
export const repositoryUrl = <your sensenet repository>

export const configuration = {
  client_id: "spa",
  automaticSilentRenew: true,
  redirect_uri: `${window.location.origin}/authentication/callback`,
  response_type: "code",
  post_logout_redirect_uri: `${window.location.origin}/`,
  scope: "openid profile sensenet",
  authority: <your identity server url>,
  silent_redirect_uri: `${window.location.origin}/authentication/silent_callback`,
  extraQueryParams: { snrepo: <your sensenet repository> },
};
```

You should also create an app-provider.js (under src) which will be responsibe for managing authentication and your repository. It should be something like this:

```
import {
  AuthenticationProvider,
  useOidcAuthentication,
} from "@sensenet/authentication-oidc-react";
import { Repository } from "@sensenet/client-core";
import { RepositoryContext } from "@sensenet/hooks-react";
import { configuration, repositoryUrl } from "./configuration";
import React from "react";
import { BrowserRouter, useHistory } from "react-router-dom";

export function AppProviders({ children }) {
  return (
    <BrowserRouter>
      <AuthProvider>
        <RepositoryProvider>{children}</RepositoryProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export const AuthProvider = ({ children }) => {
  const history = useHistory();

  return (
    <AuthenticationProvider configuration={configuration} history={history}>
      {children}
    </AuthenticationProvider>
  );
};

export const RepositoryProvider = ({ children }) => {
  const { oidcUser } = useOidcAuthentication();
  const { login } = useOidcAuthentication();

  if (!oidcUser) {
    return <button onClick={login}>Login</button>;
  }

  return (
    <RepositoryContext.Provider
      value={new Repository({ repositoryUrl, token: oidcUser.access_token })}
    >
      {children}
    </RepositoryContext.Provider>
  );
};
```

You should wrap your application with these providers in src/index.js

```
ReactDOM.render(
  <React.StrictMode>
    <AppProviders>
      <App />
    </AppProviders>
  </React.StrictMode>,
  document.getElementById("root")
);

```

# Build a simple app without authentication

**Note:** _If you followed the steps in the Authentication chapter you can skip this part._

You should add new dependencies to your environtment with

`yarn add @sensenet/hooks-react` --> for repository management

After that you will need configuration.js file (you can add it under your src folder). In this file you can store the address of your sensenet repository.

```
export const repositoryUrl = <your sensenet repository>
```

You should also create an app-provider.js (under src) which will be responsibe for your repository. It should be something like this:

```
import { Repository } from "@sensenet/client-core";
import { RepositoryContext } from "@sensenet/hooks-react";
import { repositoryUrl } from "./configuration";
import React from "react";

export function AppProviders({ children }) {
  return <RepositoryProvider>{children}</RepositoryProvider>;
}

export const RepositoryProvider = ({ children }) => {
  return (
    <RepositoryContext.Provider value={new Repository({ repositoryUrl })}>
      {children}
    </RepositoryContext.Provider>
  );
};
```

You should wrap your application with this provider in src/index.js

```
ReactDOM.render(
  <React.StrictMode>
    <AppProviders>
      <App />
    </AppProviders>
  </React.StrictMode>,
  document.getElementById("root")
);

```

# Work with sensenet

Now you can use any api request in your project. Check the api docs [here](https://docs.sensenet.com/api-docs/basic-concepts/00-getting-started).

Open the Admin UI [here](http://admin.sensenet.com/). Log in to your sensenet repository and navigate to contents using the drawer on the left.

![admin-ui](getting-started-with-react/admin-ui.png)

In sensenet, everything is content. Documents, tasks, users, projects, even system configuration files – everything – are stored and managed in the content repository. It is the foundation that makes content management easy and powerful at the same time. All content items are organized in a content tree, so you can always operate through subtrees and with inheritance when managing and presenting content.

For example if you would like to list the Sample Workspace's children you can use the repository instance set in the app-provider. Just use the loadCollection function anywhere your application. In the following example you can see how:

```
import { useState, useEffect } from "react";
import { useRepository } from "@sensenet/hooks-react";

export const ExampleComponent = () => {
  const repo = useRepository();
  const [data, setData] = useState();

  useEffect(() => {
    async function loadChildrenOfSamplews() {
      const result = await repo.loadCollection({
        path: `/Root/Content/SampleWorkspace`,
        oDataOptions: {
          select: "all",
        },
      });
      setData(result.d.results);
    }
    loadChildrenOfSamplews();
  }, [repo]);

  return (
    <>
      {data?.map((child) => (
        <div>{child.DisplayName}</div>
      ))}
    </>
  );
};
```

The result will be:

![load-children](getting-started-with-react/load-children.png)

# Creating a blog with sensenet

## Add content types

There are a lot of bultin content types in sensenet by default but you can also create new types as your business needs.

For example if you would like to build a blog you should add two new content types to your repository: blog and post. Blog will be the container of our posts and it is descendant of the builtin ItemList type.

![content-types](getting-started-with-react/content-types.png)

You can add the following 2 CTDs (Content Type Definition) with clicking on the + plus button and selecting Content Type on [admin-ui](http://admin.sensenet.com/) in Content Types menu. It opens a new page with an editor. Replace the default text inside the editor to the code of our types.
You can define more fields if you would like to add some introduction or description to your blog.

**Note:** _Creating new content types requires administration privileges_

```xml
<ContentType name="Blog" parentType="ItemList" handler="SenseNet.ContentRepository.ContentList" xmlns="http://schemas.sensenet.com/SenseNet/ContentRepository/ContentTypeDefinition">
  <DisplayName>Blog</DisplayName>
  <Description>Container of blog posts</Description>
  <Icon>ContentList</Icon>
  <AllowedChildTypes>
    BlogPost
  </AllowedChildTypes>
  <Fields></Fields>
</ContentType>
```

Post is descendant of Article type which contains basic fields for metadata, e.g. author, lead, keywords or content body. We will extend it with the date of publication.

```xml
<ContentType name="BlogPost" parentType="Article" handler="SenseNet.ContentRepository.GenericContent" xmlns="http://schemas.sensenet.com/SenseNet/ContentRepository/ContentTypeDefinition">
  <DisplayName>Blog Post</DisplayName>
  <Icon>Document</Icon>
  <AllowIncrementalNaming>true</AllowIncrementalNaming>
  <Fields>
      <Field name="Date" type="DateTime">
      <DisplayName>Publish date</DisplayName>
      <Configuration>
        <DateTimeMode>Date</DateTimeMode>
      </Configuration>
    </Field>
  </Fields>
</ContentType>
```

These are basic types for our blog. Feel free to try add more fields or modify their configuration.

## Create posts

Now we are able to fill our blog with contents.
Navigate to the content explorer by clicking on the globe icon on the drawer.
First we should add our new Blog type to the allowed child types on the explorer to be able to create a new Blog content. Right click on the Content item on the breadcrumb and edit it:

![edit-content](getting-started-with-react/edit-content.png)

Add our Blog type to the allowed child types field:
Do not forget to click on the + icon beside the input and save the form.

![add-blog](getting-started-with-react/add-blog.png)

After this the dropdown of the add (+) button in the drawer should contain a Blog item, click on it.
Create a new item with "MyBlog" name by filling the form.

After creating a blog you should create blog post as well under your newly created blog. Click on your blog in the tree then click on the add (+) button in the drawer, it will contain BlogPost item.

Fill this form as well with the name of "MyPost".

## Visualize your post

```
  useEffect(() => {
    async function loadMyPost() {
      const result = await repo.load({
        idOrPath: "/Root/Content/MyBlog/MyPost",
        oDataOptions: {
          select: "all",
        },
      });
      console.log(result.d);

      setData(result.d);
    }
    loadMyPost();
  }, [repo]);
```

You can get your "MyPost" content from backend with the load function in the example above. It sets the "MyPost" content to `data` state. You can style your post as you want, it is up to you.

Please check [this](https://github.com/SenseNet/sn-client/tree/develop/examples) for more examples and [this](https://docs.sensenet.com/api-docs/basic-concepts/00-getting-started) for the available api requests.
