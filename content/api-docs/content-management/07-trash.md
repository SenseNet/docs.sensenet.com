---
title: Trash
metaTitle: "sensenet API - Trash"
metaDescription: "Managing the Trash"
---

Using sensenet you are able to use trash just like in Windows. When you delete a document or a folder, it will not be deleted permanently by default. You can find it in the repository's trash bin, and you can restore it. There are several configs and settings related to the trash functionality and the global trash bin. See the related [concept docs](/concepts/collaboration/05-trash) for further information.

The trash bin is a central place for deleted documents where you can browse, restore or delete content permanently just as you do with any other content in the repository. The Trash bin contains the items wrapped in separate trash bags. The followings can be executed only on this type of contents.

## Switch Trash on and off globally

Trash is a workspace content (/Root/Trash) so that you are able to disable it by changing its `IsAction` field's value to false. As you can see in the next example it can be done with a simple patch request called on '/Root/Trash':

<tab category="content-management" article="trash" example="disableTrashGlobally" />

## Disable Trash for a specific container

It is also possible to switch off Trash for a container (folder or list) by changing the affected content's `TrashDisabled` field's value to false. This field is available by default on every content (it is defined on GenericContent). In the next example you can see how to switch off trash functionality for a workspace:

<tab category="content-management" article="trash" example="disableTrashOnAContent" />

## Configure trash options

There are a few possible configurations that can be made related to Trash (for further information see the related [guide](/guides/content-management/trash)). Since Trash is a content as everything else in sensenet its configureable options are available as fields and can be changed with a simple patch request. See in the next example how you can change all the config options of Trash at once:

<tab category="content-management" article="trash" example="trashOptions" />

## Restore items from the trash

The following example shows you how you can restore an item from the trash to its original place:

<tab category="content-management" article="trash" example="restoreFromTrash" />

## Restore items to different destination

 You are not only able to restore it to its original place, but setting a new target you can restore it to another destination if the settings there (permissions, allowed childtypes) make it possible:

<tab category="content-management" article="trash" example="restoreToAnotherDestination" />

## Restore items with a new name

It is possible to rename the restored content automatically if there's other content with the same name at the time of the restore at the chosen destination (e.g. mydocument(1).docx). See how you can use the `newname` param:

<tab category="content-management" article="trash" example="restoreWithNewName" />

## Delete items from the trash

Removing an item from the trash bin works the same way as deleting any other content in the repository except that in this case you can only remove them permanently. The next example shows you how to do it:

<tab category="content-management" article="trash" example="deleteFromTrash" />
