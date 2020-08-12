---
title: "Allowed child types"
metaTitle: "admin ui - allowed child types"
metaDescription: "sensenet allowed child types"
---

In a file system you can store any type (file or folder) anywhere, whereas in the sensenet content repository with the help of allowed child types it is possible to define restrictions on what content types the different containers can contain.
You can configure allowed child types in the content type definition (CTD) of the different types. For example a *Calendar* can only contain *Events*, a *Document Library* can only contain *Folders* and *Files*, etc. These settings can be overridden on the specific content, for example you can modify any of your document libraries to contain images too. There are also some special types that behave differently: a *Folder* for example can never define its child types, it will always inherit its parent settings. A *SystemFolder* will allow every type by default and can be created anywhere in the repository but only with admin rights.

# CTD settings
To set the default allowed child types for a specific content type, go to its CTD (or content type definition) and define the *AllowedChildTypes* element.
If it does not exist yet, create it right before the Fields element:

```xml
<AllowedChildTypes>
Folder,File
</AllowedChildTypes>
```

The above settings will ensure that whenever you create a new content of this specific type, only *Files* and *Folders* will be allowed to be created under it. This setting can be overridden on the created content as explained in the next section.

# Edit mode
When types are locally defined for a specific content, it overwrites the CTD settings of its type. This way you can freely modify allowed child type settings for a specific content, and modifications in CTD will not affect the child type settings of that content in any ways. The local allowed child type settings of a content is stored in the *AllowedChildTypes* field.


![AllowedChildType](../../concepts/img/AllowedChildType.png)

For example, go to *IT Workspace/Image Library*, open the action menu with right click and select *Edit* option. Here you can find, edit and define which content types this folder can contain.

The whole point of allowed child types feature is to create a precisely defined content structure and to provide control on the long run.
