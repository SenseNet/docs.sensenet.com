---
title: Actions
metaTitle: sensenet API - Actions
metaDescription: Exploring actions
---

# Exploring actions

Every content has executable actions in the sensenet content repository managed by the Action Framework. List of these actions are available via the `Actions` OData property. As it was mentioned at the [`$expand` option's section](/api-docs/basic-concepts/03-select-expand/#expand) the `Actions` property's value can be expanded to get its children like a collection of actions and functions with all of their own properties.

The content of the result collection depends on availability of each individual Action item, so they can be adjusted not only by their existence as a content, but by permission settings. So in the end this list will contain only those actions and function that can be executed by the current user on the given content.

Following example's results will be the list of actions and functions that are available on the given file:

<tab category="basic-concepts" article="action" example="actions" />


# Scenario

You can group the action content into a scenario and of course you can later filter the action list by a given scenario. This way you are able to create list of action for custom submenus (e.g. usermenu, context menu for items in a document library, etc.)

You can filter the actions with a (case sensitive) scenario name and the filter is the `scenario` URL parameter.

In the following example you can see how to get only those actions and functions that are grouped into the `ContextMenu` scenario:

<tab category="basic-concepts" article="action" example="scenario" />

The response will be something similar like the following:

```json
{
  "d": {
    "__count": 10,
    "results": [
      {
        "__metadata": {
          "uri": "",
          "type": "Action",
          "actions": [],
          "functions": []
        },
        "Name": "Add",
        "DisplayName": "Add",
        "Index": 0,
        "Icon": "add",
        "Url": "",
        "IsODataAction": false,
        "ActionParameters": [],
        "Scenario": "ContextMenu",
        "Forbidden": false
      },
      {
        "__metadata": {
          "uri": "",
          "type": "Action",
          "actions": [],
          "functions": []
        },
        "Name": "Browse",
        "DisplayName": "Browse",
        "Index": 0,
        "Icon": "browse",
        "Url": "",
        "IsODataAction": false,
        "ActionParameters": [],
        "Scenario": "ContextMenu",
        "Forbidden": false
      },
      ...
```
