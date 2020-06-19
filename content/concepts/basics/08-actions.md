---
title: "Actions"
metaTitle: "sensenet - Actions"
metaDescription: "sensenet Actions"
---

Most of the operations done on content in sensenet is governed via Actions. An Action is basically a command, instructing the system to use a specific component, to get or update the addressed content item's properties. All of these actions can be invoked through OData REST API. There are many built-in ones and developers can publish custom operations as actions as well.

Under the hood OData operations are integrated into sensenet via the *Action Framework*. sensenet actions behave as OData operations. The action in Action Framework is the extensibility point: every 3rd party action appears automatically in OData metadata if the current user has enough permissions.

![action menu](../img/actions.gif)

# Built-in actions

As it was mentioned in the introduction there are tons of built-in actions (operations) in sensenet. There are actions related to versioning, permission and user management. Use cases can be very different but the way they should be used is the same. They can be invoked on a content, have a unique name and can have optional and required parameters. An action call is always something similar, like the following:

```
https://myproject.com/OData.svc/Content('MyContent')/ActionName
```

As their use is quite unique each case, for specific use cases and examples check the [API docs](/api-docs/basic-concepts/09-actions).

# Exploring actions of a content

Actions are always connected to contents and it is also possible to look at them from the content's side as well. That means you can always check which actions are available on a content without doing any special move or writing custom code. List of the available actions are on one hand stored on the content metadata or can be requested with custom action named */Actions*.

[more about exploring actions](/api-docs/basic-concepts/09-actions#exploringactions)

# Accessibility

Actions could be contents in the repository too, and as every other content, sensenet Actions are also covered by the permission system. Which means you are not only able to set permissions on a content or for a subtree but you are also able to control the access of the actions. This way you are able to define which type of user are able to do a task and which are not (e.g. you can allow the *Editors* group to use the **Approve** action but not allow it for *Developers*). There is a separate permission for dealing with these kind of things. Its name is RunApplication and by allowing it on an action content for a user you give him permissions to execute the operation.

It is also possible to add custom rules to an action like you expect the user to have a special permission to use the affected action. For example you need the user to have permission to delete content as well in order to approve it. Every action has a field *RequiredPermissions* that let you add as many required permissions as you need in your custom solution.

# Custom action groups and lists

Another advantage of storing actions as contents in the repository is that you can create loosley groups of them. That means you can create custom menus dinamically just using the *Scenario* feature of sensenet. *Scenario* is actually a field on every action content where you can add custom Scenario names freely. Basically this name will be the name of your group (e.g. UserMenu) and you can refer to it later when you request */Actions* on a content like the following:

```
https://myproject.com/OData.svc/Content('MyContent')/Actions?scenario=UserMenu
```

This way only those actions will be listed in the results that has the name *UserMenu* set as Scenario.

[see scenario examples](/api-docs/basic-concepts/09-actions#scenario)
