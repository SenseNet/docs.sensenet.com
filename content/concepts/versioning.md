---
title: "Versioning"
metaTitle: "sensenet - Versioning"
metaDescription: "sensenet Versioning"
---

# What is content versioning?
Versioning is the management of changes to documents and other information stored in a file system or repository.
The versioning system of sensenet also provides mechanisms for keeping the published version of a document visible to non-editor users, while you continue to work on the latest, draft version.
In sensenet, versioning is disabled by default. It can be enabled for folders or content lists, by setting the value of the Versioning Mode field. Subfolders inherit versioning settings by default. 
When a new Content is created in the Content Repository with versioning enabled, it is assigned the initial version number, depending on the versioning mode. Changes made to the document will result in a bump of the version number, with old versions tracked for possible rollbacks.

# Does sensenet also version content types or users?
In sensenet everything is content (documents, tasks, users, project, content types etc.). As content types and users are content too, yes, they can be versioned. It can happen, for example, that you need to modify the fields of a content type, versioning is a good solution to keep track of the previous versions. As described above, you can enable versioning by setting the value of the Versioning Mode fiels.
# versioning modes
In sensenet versioning is disabled by default, you can enable it and set the following Versioning Modes for folders, workspaces or on any type of individual content or even for a subtree:

- None: the default setting of the Root folder, no versioning.
- Inherited: The folder inherits its versioning mode from its parent. This is the default setting for all other content.
- Major only: Only major versions (1.0, 2.0,…) are preserved. After a user finished editing a Content, the major version number is bumped by default: eg. 1.0 becomes 2.0. This means the new version is automatically published, and will be served to all users requesting the content in question.
- Major and minor: Every version is preserved (1.0, 1.1, 1.2,…). In this mode, saving a Content bumps its minor version number. Content with minor version (for example 1.2, 3.5, anything but x.0) are considered working versions, and aren’t served to guest users - they get the latest major version instead. (Eg. if a document’s latest version is 5.4D, guest users will be served 5.0A, the latest public version.) In this versioning mode, bumping the major version and thus publishing the changes can be done by pressing the Publish button.
You can change versioning or approving mode on any folder or other container type. If you visit the edit page of the folder you'll find the versioning and approving settings among the advanced fields.

Content in the repository can have several non-numeric version states:
- A (Approved): Only a major version can be in approved state: 1.0A or 2.0A. The last approved version of the content is that users with low level permission can see.
- L (Locked): When a content is locked, only the user who locked it can modify it.
- D (Draft): A draft version is only visible to users who have permission to see minor versions of a content. Any other user will see the last public version.
- P (Pending): When approval is enabled in a folder or list, then contents cannot be published without approval. After sending a content for approval it remains in pending for approval state, until somebody with sufficient rights approves it.
- R (Rejected): If a content is not correct, the user with approving rights can reject it. This means it is not published and should be refined.

These states are related to the approval process, you can read more about it under [Approval](/concepts/simple-approval).
# Versioning and visibility
Visitors in general are only allowed to view the last public versions of a content. This is controlled by the Open minor permissions: a user who does not possess the open minor permission for a content will only see the last public version of a content, and will never see any changes that correspond to a draft version or that are not yet approved. The other important thing here to bear in mind is that if a document gets rejected it does not mean that the document is not visible for the public. It only means that the last version that was rejected will not be visible to the public.
# How do I configure user permissions to work with versioning?
To configure user permissions to work with versioning you can use the following built-in permissions:
- Open minor: controls whether the user is allowed to open minor versions of the Content and see corresponding Field data.
- Recall old version: controls whether the user is permitted to restore an old version of the Content.
- Delete old version: controls whether the user is allowed to delete an old version of the Content
# usage (advantages)
Versioning is important for documents that undergo a lot of revision and redrafting. It is particularly important for electronic documents because they can easily be changed by a number of different users. These changes may not be immediately apparent. Knowing which version of a document you are looking at is important, for example, if you are trying to find out which version of a policy is currently in force, or which version of a policy was in use at a particular time. Version control is also important if you are working on a collaborative document with a number of contributors and/or with frequent revisions.
