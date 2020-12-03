---
title: "Content Model"
metaTitle: "sensenet - Content Model and Schema"
metaDescription: "sensenet Content Model and Schema"
---

sensenet organizes content into content repositories, that allows you to group all the related content for one or even multiple project together. Since everything is a content is sensenet this repository includes documents, workspaces, users, settings, workspaces and many more.

Each repository has a content model, a schema that represents the content types you create.

# Content type hierarchy

Content types are organized into a hierarchy according to inheritance. Any content type may inherit from another one. The topmost content type in the inheritance hierarchy is the ``GenericContent`` (with handler ``SenseNet.ContentRepository.GenericContent``), every content type must inherit from this, or any of its descendant. When a child content type is inherited from a parent content type it means that the child content type contains all the fields of the parent, even if they are not defined in the child CTD - and also they share common implemented logic.

> Multiple inheritance is not allowed so content types are arranged in a simple tree.

# Content naming

Every content in the content repository is not only identified by its unique ID but also its path. If you move a content to another folder, thus changing its path, the system keeps track of the changes, making it possible to use the path as a link to the content. For example, the `Path` of the *IT* workspace is /Root/Content/IT, which means it is in the *Content* container: a child of the *Root* folder. This way the workspace is accessible through the /Root/Content/IT URL.
The content is represented in the Path by its Name, which is a field of every content which means you can freely modify it but note that this will also change its path (e.g. /Root/Content/**MyContent** to /Root/Content/**NewName**)
Name should not be set every time, in cases when no Name is given the repository automatically generates it from the content's type and creation date. (e.g. User-20200902075644)
Uploaded files will automatically be named by the file's name (e.g. *lorem-ipsum.docx* Name will be *lorem-ipsum.docx* after it is uploaded to the repository). Another useful feature for naming files is incremental naming, with which you can set that if a user uploads a file to a folder where a file with a same name exists, the older file will not be overridden, but the new one will be uploaded with a slightly changed name (e.g. *lorem-ipsum.docx* and *lorem-ipsum(1).docx*) These feature (allow incremental naming) is by default switched on and can be switched off for content types in the content type definition.

```xml
<ContentType name="" handler="" parentType="" xmlns="http://schemas.sensenet.com/SenseNet/ContentRepository/ContentTypeDefinition">
  ...
  <AllowIncrementalNaming>false</AllowIncrementalNaming>
  ...
```

# GenericContent

The content repository contains many different types of content. Content vary in structure and even in function. Different types of content contain different fields.
GenericContent is the ancestor of all types so it represents the base of the content model in sensenet content repository. All of the fields that are defined on GenericContent's CTD (Content Type Definition) are available on all the content types in the repository whether they are built-in ones or created by you.

## Fields on GenericContent

|Field|Type|Description|Read-only|
|-----|----|-----------|---------|
|Id|Integer|Unique identifier of the content|Read-only|
|ParentId|Integer|Id of the content's parent|Read-only|
|Name|ShortText|Url name of the content||
|DisplayName|ShortText|Displayed name of the content||
|Description|LongText|Description of the content||
|OwnerId|Integer|Id of the content's owner user|Read-only|
|Owner|Reference|Owner user||
|CreatedBy|Reference|Creator user|Read-only|
|CreatedById|Integer|Id of the creator user|Read-only|
|VersionCreatedBy|Reference|Creator of a version of the content|Read-only|
|CreationDate|DateTime|Date when the content was created|Read-only|
|VersionCreationDate|DateTime|Date when the version was created|Read-only|
|ModifiedBy|Reference|Modifier user|Read-only|
|ModifiedById|Integer|Id of the last modifier user|Read-only|
|VersionModifiedBy|Reference|Modifier of a version of the content|Read-only|
|ModificationDate|DateTime|Date when the content was modified|Read-only|
|VersionModificationDate|DateTime|Date when the version was modified|Read-only|
|VersionId|Integer|Id of the content's current version|Read-only|
|Type|NodeType|Content type of the content|Read-only|
|TypeIs|NodeType|Ancestor content types of the node in the repository|Read-only|
|Icon|ShortText|Name of the icon of the content|Read-only|
|Hidden|Boolean|Indicates whether the content is hidden or not||
|Index|Integer|Index number of the content||
|Locked|Boolean|Indicates wether the content is checked-out by someone or not|Read-only|
|CheckedOutTo|Reference|User who checked out the content|Read-only|
|Version|Version|Version number of the content|Read-only|
|Versions|Reference|List of versions of a content|Read-only|
|CheckInComments|LongText|Check-in comments for a version of a content||
|Reject reason|LongText|Reject reason for a version of a content||
|Path|ShortText|Full path of the content|Read-only|
|Depth|Integer|Content level in the tree|Read-only|
|InTree|ShortText|Ancestor paths|Read-only|
|InFolder|ShortText|Parent path of the content|Read-only|
|IsSystemContent|Boolean|Indicated whether the content is a system content or not|Read-only|
|IsFolder|Boolean|Indicated whether the content is a container or not|Read-only|
|EnableLifespan|Boolean|Switches lifespan filtering on or off||
|ValidFrom|DateTime|Validation from date||
|ValidTill|DateTime|Validation from date||
|AllowedChildTypes|AllowedChildTypes|Contains list of allowed types||
|EffectiveAllowedChildTypes|AllowedChildTypes|Contains list of effective allowed types||
|VersioningMode|VersioningMode|Versioning mode of the content||
|InheritableVersioningMode|VersioningMode|Inheritable versioning mode of the content||
|ApprovingMode|ApprovingMode|Approving mode of the content||
|InheritableApprovingMode|ApprovingMode|Inheritable approving mode of the content||
|TrashDisabled|Boolean|Indicated whether on the content trash feature is disabled or not||
|Workspace|Reference|Closest workspace where the content is stored|Read-only|
|Sharing|Sharing|Sharing info of a content||
|SharedWith|Sharing|User(s) with whom the content is shared|Read-only|
|SharedBy|Sharing|User by whom the content is shared|Read-only|
|SharingMode|Sharing|Sharing mode of the content|Read-only|
|SharingLevel|Sharing|Sharing level of the content|Read-only|


These fields are freely available on all the types, both on built-in and you custom types. You can take advantages of the type inheritance in many ways. You can inherit your custom type from the GenericContent or from an inherited built-in type such as User or File. These built-in type have additional type related fields that are also available to use in your custom type.
