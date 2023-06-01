---
title: Column Settings
metaTitle: "sensenet Admin-ui - Column Settings"
metaDescription: "Column Settings is a feature that allows you to configure the displayed columns in Content Explorers"
---

Column Settings is a feature that allows you to configure the displayed columns in Content Explorer. You can also set the order and the title of the columns. You can show any field of the Content to be displayed as a column.

Link to settings: https://admin.sensenet.com/settings/configuration/

![Setup Global Column Settings](../img/global_column_settings.png "Setup the Global Settings on the admin surface")

## How to use

In a JSON file, you can declare the desired columns to be displayed and their titles.

```json
{
  "columns": [
    {
      "field": "DisplayName",
      "title": "Display Name"
    },
    {
      "field": "Modified",
      "title": "Who modified the content"
    },
    {
      "field": "Actions",
      "title": "Actions"
    }
  ]
}
```

Once you set the JSON File, the Global setting is ready to use.

![Global Setting Result](../img/global_column_settings_preview.png "The result of the Global Settings in the Content Explorer")

## Column Setting for a specific contents

If you need a special field to be visible in specific contents, simply click on the screwdriver icon and edit the JSON file. For example, if you want to set the visible columns for your calendar so you can see when it has been created and modified, you can edit the JSON file to include those columns.

![Setup Local Column Settings](../img/global_column_settings.png "Open the JSON editor for local Column Settings")

example:

```json
{
  "columns": [
    {
      "field": "DisplayName",
      "title": "Display Name"
    },
    {
      "field": "CreationDate",
      "title": "Date of Creation"
    },
    {
      "field": "ModificationDate",
      "title": "Date of Modification"
    },
    {
      "field": "Actions",
      "title": "Actions"
    }
  ]
}
```

after you set the JSON File, the local setting is ready to use.

![Result of Local Settings](../img/local_column_settings.png "Result of Local Settings")
