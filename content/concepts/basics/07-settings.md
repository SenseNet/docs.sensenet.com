---
title: "Settings"
metaTitle: "sensenet - Settings"
metaDescription: "sensenet Settings"
---

sensenet has a number of modules and features that provide a way to customize their behavior by offering settings. It is an essential part of an application how it stores and handles settings. Keeping this in mind we wanted to provide a framework that is easy to use and customize, enabling developers to make custom modules more flexible and easy to configure.

![Setup dashboard](../../guides/img/setup-dashboard.png "Setup dashboard on the admin surface")

# Settings is a content too
In sensenet, settings are stored as content in the content repository. The advantage of this is that changing a setting does not involve site restart and values can be managed in one central place.

Another advantage of storing settings as content is that you are able to provide a rich user interface for administrators to manage them. Settings are actually json files, so it is easy to build a dedicated ui for creating or editing settings in your app or simply updating them using OData.

# Local and global settings
Settings in sensenet can be either global or local

**Global settings:** stored in the `/Root/System/Settings` folder or can be found on the admin ui's Setup page.
-> screenshot

**Local settings:** any folder can contain a system folder named Settings for storing settings files related only to that part of the repository that override or extend global settings.

# Setting inheritance
Settings files can be global or local (see above). Local settings files override global ones and they are applied only in that part of the Content Repository.

Every key in a settings file is overridable in another file with the same name under an appropriate position in the sub.
In this case your application's real settings are combined by the ancestor settings chain.

The inheritance is realized on the file and key level: if the settings file on a lower level (which has the same name) contains only one key, only this value will be overridden; values in other files in higher levels won't be affected and will remain accessible.

## Under the hood
To achieve this, the system uses a path parameter. That is the content path that the settings framework will use as the starting point when discovering the appropriate settings. If no local setting is found with that name or the given property, the fallback is always the global settings file in the `/Root/System/Settings` folder.

## Usage
The variety of settings enables a multitude of usage. Let's have watermark settings as an example. In sensenet it is possible to set a watermark globally for each and every preview image. In addition to that, you can define different watermarks for different workspaces (which will then overwrite global settings) or even set watermark to a specific doclib.
Watermark is just one example how versatile settings in sensenet can be, thanks mainly to [hierarchical tree structure](concepts/basics/02-content-tree) which forms the base of our content repository.

# Editing settings through OData
Settings content can be edited through OData as any other content in the Content Repository.
You have two options here:

- edit the whole text using the OData Upload action
- send a POST or PATCH OData request to create or modify settings

> Since settings files are in JSON format, the properties are exposed as regular fields of the settings content. This lets you access and even modify setting values directly through OData without having to edit the text.

> ([learn more about how to change settings](/guides/setup))
