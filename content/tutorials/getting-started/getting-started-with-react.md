---
title: "Getting started with React"
metaTitle: "sensenet Tutorials - Getting started with React"
metaDescription: "sensenet Tutorials - Getting started with React"
---

# Create react app

First of all you will need a react environment what you can create easily with [create-react-app](https://github.com/facebook/create-react-app#creating-an-app).

E.g.: `yarn create react-app example`

If you follow these steps you will have an environment where you can start working with sensenet.

After creating your environment you can start it from the root (`cd example`) with the `yarn start` command.

It will start on http://localhost:3000.

![create react app](../getting-started-with-react/create-react-app.png)

# Authentication

You should add new dependencies to your environtment with

`yarn add @sensenet/authentication-oidc-react`

`yarn add @sensenet/client-core`

`yarn add @sensenet/hooks-react`

`yarn add react-router-dom`

After that you should add a configuration.js file under your src folder

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

You should also create an app-provider.js (under src) which will be responsibe for managing authentication and repository. It should be something like this:

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
