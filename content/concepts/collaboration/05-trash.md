---
title: "Trash"
metaTitle: "sensenet - Trash"
metaDescription: "sensenet Trash"
---

When you delete a document or a folder, and the trash feature is enabled (enabled by default), the content will be wrapped into a special container called the Trash Bag, and will be moved to the Trash Bin `/Root/Trash`.

The Trash Bin is a central place for deleted documents where you can browse, restore or delete content permanently. It is also possible to provide a local (workspace-level) trash for users.

The size of the trash and the time frame while the contents can be recovered from the trash is set by the administrator. Trash feature can be switched on or off globally.

# Delete operation capabilities
Delete operation allows users to transfer content (documents, folders or whole workspaces) into the Trash Bin - or delete them permanently.

Contents can be deleted through API calls, but these actions are also available on the admin ui:

You can access delete action for basically every content in the doclib by clicking context menu (...) or right click on item.
![delete action](../img/delete_contextmenu.png)


By default configuration, a confirmation popup appears, displaying content name and path, with an additional option to permanently delete the content (skipping trash).
![confirm delete](../img/confirm.png)

Deleted (trashed) items can be found in a specific folder having some extra parameter like retention time, quota for size and number of content. These limits can be customized.
![trash](../img/trasheditem.png)

Content from trash could be restored to a container chosen by the user. By default this container is the original parent of the deleted content, but the restore target could be chosen freely,

<note title="Important">
Type of the restored content should be allowed on the chosen container.
</note>

Additional actions can also be performed on trashed items like edit or delete permanently.
![trash actions](../img/trash_actions.png)

When deleting a trashed item, the content will be permanently deleted.
![delete from trash](../img/permanentdelete.png)

If the trash is disabled, the popup informs you that the feature is turned off. Be careful because you may delete a content permanently. Your content can't be restored in this case.

# Workspace trash

It is possible to provide a workspace-level trash for users. Deleted content in fact will still be moved to the global Trash `(/Root/Trash)` but users will be able to see content deleted from a particular workspace in a folder under that workspace. This functionality is practically a filter for the global Trash and can be accessed by creating a SmartFolder under the workspace. You can place the SmartFolder anywhere under the workspace.

Properties of the SmartFolder:
- Folder name: anything - e.g. Workspace Trash
- Autofilters: disable
- Query: +InTree:'/Root/Trash' +TypeIs:TrashBag +WorkspaceId:@@CurrentWorkspace.Id@@

All content deleted under the workspace will be visible here and can be restored or deleted permanently. The deleted content are still accessible and restorable from the global Trash and all size and date settings are still applied.

## Permissions
The content moved to the trash will preserve its actual permissions and the container Trash Bag will get all its inherited permissions. This means that if you delete a content that only few users can see, other users won't see it in the trash either.

See how to configure and manage Trash [trough OData REST API](/api-docs/content-management/07-trash) or on the [admin surface](/guides/content-management/trash).
