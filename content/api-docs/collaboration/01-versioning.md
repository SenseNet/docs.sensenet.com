---
title: Versioning
metaTitle: "sensenet API - Versioning"
metaDescription: "sensenet API - Versioning"
---

Versioning, also known as revision control, is the management of changes to documents and other information stored in a file system or repository. The main goal of versioning is to prevent information from being overwritten or deleted during everyday work with documents. Changes are kept track of, and a mechanism is offered to restore a particular document to a previous version.

The versioning system of sensenet also provides mechanisms for keeping the published version of a document under heavy editing visible to outside users, while you continue to work on the latest, draft version.

# Enable versioning

In sensenet, versioning is disabled by default. It can be enabled for folders or content lists, or even for individual contents by setting the value of the `Versioning Mode` field. (Sub-folders inherit versioning settings by default.)

Versioning mode can be set as the followings:

| Name | Number | Description |
|-|-|-|
|**None**|0|The default setting of the Root folder, no versioning.|
|**Inherited**|1|The folder inherits its versioning mode from its parent. This is the default setting for all other content.|
|**Major only**|2|Only major versions (1.0, 2.0,...) are preserved.|
|**Major and minor**|3|Every version is preserved (1.0, 1.1, 1.2,...).|

With the following example you switch on versioning for a workspace:

<tab category="collaboration" article="versioning" example="enableVersioning" />

# Content states

Content in the repository can have several non-numeric version states:

| | | |
|-|-|-|
|A|APPROVED|Only a major version can be in approved state: 1.0A or 2.0A. The last approved version of the content is that users with low level permission can see.|
|L|LOCKED|When a content is locked, only the user who locked it can modify it.|
|D|DRAFT|A draft version is only visible to users who have permission to see minor versions of a content. Any other user will see the last public version.|
|P|PENDING|When approval is enabled in a folder or list, then contents cannot be published without approval.| After sending a content for approval it remains in pending for approval state, until somebody with sufficient rights approves it.|
|R|REJECTED|If a content is not correct, the user with approving rights can reject it. This means it is not published and should be refined.|

# Get current version of a content

Current version is always saved as a value of the field `Version` on every content. As you can see in the following code snippet you can get the current version number as any of the common field values:

<tab category="collaboration" article="versioning" example="versionNumber" />

# Get a specific version of a content

You can easily get a specific (older) version of a content knowing the actual version number. You can set it as a param of the OData url like in the next example:

<tab category="collaboration" article="versioning" example="specificVersion" />

# Checkout a content for edit

Following example shows you how to checkout (lock) a document:

<tab category="collaboration" article="versioning" example="checkout" />

# Check-in a content

With the next example you will check-in a document adding a comment:

<tab category="collaboration" article="versioning" example="checkin" />

# How to know if a content is locked

If a content is checked out by someone it became locked for other users. Locked is also a field on every content so you can easily check if a content is locked or not. With the following code snippet you can find out if a content is locked and by whom it is locked:

<tab category="collaboration" article="versioning" example="locked" />

# Save a draft version

When versioning mode is set to 'Major and minor', you are able to work with draft versions. If you want to create a draft, save to content without publishing the changes (e.g. using the Publish action). You can save the content over and over again, until you use the publication, only draft versions are generated.

# Publish a new major version

As it is mentioned before using the Publish action makes a content public, creating its major version. In the next example you can see how to publish a document:

<tab category="collaboration" article="versioning" example="publish" />

# Undo changes

It can happen that you don't want publish your changes and you want to withdraw them. Using the next example you will be able to undo the changes that you've made on a content:

<tab category="collaboration" article="versioning" example="undoChanges" />

# Force undo changes

It is also possible to undo other users' changes on a document. This feature is really useful when somebody leave a content in checked out (locked) and does not able or willing to finish the work on the content. If you are allowed to do that (it can be set with permissions) with the next snippet you can undo changes made by another user and return to the previous version:

<tab category="collaboration" article="versioning" example="forceUndoChanges" />

# Take lock over

Following lets administrators take over the lock of a checked out document from another user. A new locker user can be provided using the 'user' parameter (user path or id as string). If left empty, the current user will take the lock.

<tab category="collaboration" article="versioning" example="takeLockOver" />

# Get version history of a content

You're able to get all the version history (current version, old minor and major versions, etc) related to a content at once. Following example shows you how:

<tab category="collaboration" article="versioning" example="versionHistory" />

# Restore an old version

It is also possible to recall an older version. In the next example you can see how you can restore a previous major version of a content:

<tab category="collaboration" article="versioning" example="recallVersion" />
&nbsp;
<note>You must be allowed to restore previous versions having 'Recall old versions' permission allowed on the content.</note>

<!--# Delete an old version

Sometimes it could be useful to remove old versions, because if you're working on a content constantly creating tons of versions, it may increase the size of the database. With the following example you can remove a previous version:

<tab category="collaboration" article="versioning" example="deleteVersion" />
&nbsp;
<note>You must be allowed to restore previous versions having 'Delete old versions' permission allowed on the content.</note>-->

