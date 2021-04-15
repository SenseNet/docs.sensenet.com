---
title:  "Authentication from a React application"
metaTitle: "sensenet Tutorials - Authentication from a React application"
category: Tutorials
index: 0
version: v7.0
tags: [react, getting started, authentication, client]
description: This tutorial shows you how to authenticate your a React app to sensenet.
---

This tutorial shows you how to authenticate your React app to sensenet.

You should install the sensenet oidc-react lib as a dependency of your project:

```
yarn add @sensenet/authentication-oidc-react
```

After that you have to update the *configuration.js* file with the identity server url that is connected to your repository. For further details about authentication and the identity server see the following [documentation](../content/guides/getting-started/how-to-authenticate-dotnet.md).

```javascript
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

You also have to update the *app-provider.js* which will be now responsible for managing authentication as well. It should be something like this:

```javascript
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

You should wrap your application with the above mentioned provider in *src/index.js*

```javascript
ReactDOM.render(
  <React.StrictMode>
    <AppProviders>
      <App />
    </AppProviders>
  </React.StrictMode>,
  document.getElementById("root")
);

```
