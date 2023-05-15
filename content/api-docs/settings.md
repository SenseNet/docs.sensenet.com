---
title: "Settings API"
metaTitle: "sensenet API - Settings API"
metaDescription: "Introduction to the settings API in sensenet"
---

The [settings](/concepts/basics/07-settings) feature of sensenet is a powerful tool for customizing the behavior of the system. This article is a reference for the settings OData API. We describe how developers can read and write settings through OData and what permissions are required for that.

## Global and local settings
In most cases a global setting is enough for a feature. However, sometimes it is necessary to override a global setting in a specific part of the content tree. This is where local settings come into play.

For example you may want to customize the look of a specific workspace. In this case you can create a local setting file in the workspace's `Settings` folder with the same name as the global setting file. The system will automatically use the local setting file instead of the global one.

| Settings owner Content | Settings Content | Settings level
| --- | --- | --- |
| /Root | /Root/System/Settings/MySettings.settings | Global settings |
| /Root/Content | **/Root/Content**/Settings/MySettings.settings | Top level local settings |
| /Root/Content/MyWorkspace | **/Root/Content/MyWorkspace**/Settings/MySettings.settings | Local settings level 2 |
| /Root/Content/MyWorkspace/DocumentLibrary | **/Root/Content/MyWorkspace/DocumentLibrary**/Settings/MySettings.settings | Local settings level 3 |

## Reading settings
The read API for settings hides all the details above (but for developers it is still useful to understand the structure of settings files). The following example shows how to read settings on the client.

<tab category="settings" article="settings" example="read" />

The context of the request is the actual content for which you need to read the settings. You do not have to specify the path of the settings file, only the name.

The system will automatically find all the relevant settings files in the tree and **merge them into a single response**. If there is no local setting file, the global one will be returned.

### Examples
Let's say we have the following global and local setting files containing the following JSON contents:

| Settings Content | Settings JSON |
| --- | --- |
| /Root/System/Settings/MySettings.settings | { Prop1:Value1 } |
| /Root/Content/MyWorkspace/Settings/MySettings.settings | { Prop2:Value2 } |
| /Root/Content/MyWorkspace/DocumentLibrary/Folder1/Settings/MySettings.settings | { Prop1:Value11, Prop3:Value3 } |

When you get the settings for the content items listed in the first column below, the system will return the settings listed in the second column. Note the _merged_ setting properties.

| Content | Effective Settings JSON |
| --- | --- |
| /Root | { Prop1:Value1 } |
| /Root/Content | { Prop1:Value1 } |
| /Root/Content/MyWorkspace | { Prop1:Value1, Prop2:Value2 } |
| /Root/Content/MyWorkspace/DocumentLibrary | { Prop1:Value1, Prop2:Value2 } |
| /Root/Content/MyWorkspace/DocumentLibrary/Folder1 | { Prop1:Value11, Prop2:Value2, Prop3:Value3 } |
| /Root/Content/MyWorkspace/DocumentLibrary/Folder1/Folder2 | { Prop1:Value11, Prop2:Value2, Prop3:Value3 } |

## Writing settings
Writing a setting is only necessary if you want to override a global setting locally. The following example shows how to write settings on the client.

<tab category="settings" article="settings" example="write" />

There are a couple of things to note here:

- you can only write local settings for existing global ones
- the name has to be the same as the global setting
- permissions may vary based on group membership - see permissions below

## Permissions
If there is only a global settings, the permissions for reading and writing it are set on the settings content itself, globally.

However if there are local settings, the permissions for reading and writing them are defined by local groups in the workspace where the settings resides. This means that you can have different readers and editors for the global and local settings.

### Local roles
If there are no local groups, permissions are evaluated based on the global settings. If there are local groups, the system will look for them in the following way:

- There are two local groups in the current workspace: one for readers and one for editors.
- Naming convention: `{SettingName}{RoleName}` - for example `MySettingsReaders` and `MySettingsEditors`.
- Every workspace can define/override these groups.
- These reside under the workspace's `Groups` folder.
- If a lower workspace has no role, a role in a higher workspace takes affect.
- Roles are not inherited (a higher role is not affected if a lower role exists).

### Permission evaluation
- Reading
  - Administrators: always permitted
  - No Readers local role: the global setting's `Open` permission is checked
  - Existing Readers local role: permitted if the user is member of the group
- Writing
  - Administrators: always permitted
  - No Editors local role: the global setting's `Save` permission is checked
  - Existing Editors local role: permitted if the user is member of the group

> A local role overrides other permissions: if the current user is in Readers role and the content is readable for them, they can read the settings even if the role content is invisible or parent settings are not permitted for them.

## Creating a new setting

1. Create a global settings content: `/Root/System/Settings/MySettings.settings`
> The binary content must be JSON. The empty settings is `{}`.
2. Set permissions carefully for readers (Open) and editors (Save) because the settings may contain sensitive information.
> From then on local settings can be created / modified under workspaces. The following steps are optional and only necessary in case of local settings. 
3. Create roles under workspaces where the readers/editors are _different_ from the global settings.
    - Ensure the `Groups` SystemFolder under the workspace exists.
    - Create a group named `MySettingsReaders` under the Groups folder and add members.
    - Create a group named `MySettingsEditors` under the Groups folder and add members.