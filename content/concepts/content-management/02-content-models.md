---
title: "Content Model"
metaTitle: "sensenet - Content Model and Schema"
metaDescription: "sensenet Content Model and Schema"
---

sensenet organizes content into content repositories, that allows you to group all the related content for a project together. Since everything is a content is sensenet this repository includes documents, workspaces, users, settings, and many more.
The content repository contains many different types of content. A content type is a special content in the content repository that defines the structure and functions of contents. For example a User has a name, e-mail address, etc. - these are the fields of the User content type.

Each repository has a content model, a schema that represents the content types you create. This is project-specific, so it is your own. It is important defining the business logic and creating the content types at the beginning of the project.

# Content type hierarchy
Content types can inherit fields from their ancestors. For example a Domain type inherits all the fields of the basic Folder type. A content type may only inherit fields from a single type thus the content types are arranged in a simple tree hierarchy. Inherited field configuration can be overridden in derived types. Field inheritance and overriding is defined in the content type definition (CTD) of the type.

# Content naming
In the sensenet content repository every content has a _Name_ field and a _DisplayName_. 
The _Name_ field together with its location is the main identifier of the content. The content name is part of the content path, and since the path can be used to address the content via url, there are certain restrictions against the name. Thus changing content’s name (aka. renaming a content) also changes the path and therefore renaming operations should be carried out carefully as it may result broken links. The content name my not contain special caracters.

The _DisplayName_ is the user-friendly human readable name of content and can contain any kind of characters without restrictions. Generally, when a content is displayed on the front-end, the value of the DisplayName property is shown. Changing the DisplayName is a simple operation and does not cause broken links (because changing only the DisplayName does not change the url).

The Name is the main identifier of the content. Its value is also included in the path property which acts as a permalink to the content. Thus changing content’s name (aka. renaming a content) also changes the path and therefore renaming operations should be carried out carefully. A path change may result in a lengthy operation (paths of child content are also changed respectively) and may also result in broken links in the content repository (if another content refers to the changed one through its path - e.g. an article containing a link in its text). These two properties are used when the content is referred to via a url link and therefore may not contain special characters.

The DisplayName is the main display name of the Content. It acts as a legible, human readable name and may contain punctuations and accented characters as well. Generally, when a content is displayed on the front-end, the value of the DisplayName property is shown. Changing the DisplayName is a simple operation and does not cause broken links (because changing only the DisplayName does not change the url).
Since it can be very time consuming to provide a Name and a DisplayName for a content at the same time - especially in cases when the Name can be derived from the DisplayName - sensenet provides automatic name generation mechanisms both on client and server side. 

# Content type properties

The content repository contains many different types of content. Content vary in structure and even in function. Different types of content contain different fields. In sensenet built-in content types are available, but it's also possible to create custom ones.
A Content Type Definition is an xml-format configuration file that holds information about:
•	the type name, description
•	properties that control how content of this type look and behave (icon, preview generation, indexing)
•	parent content type
•	set of fields (name, displayname and configuration of fields)
•	content handler

The Content Type Definition xml of a content type can be edited.

# Fields

generic content main fields

The following elements build up the field definition:
•	Field: root element, holds basic information in attributes.
•	DisplayName: displayed name of the field.
•	Description: description of the field.
•	AppInfo: custom text or xml fragment for CTD extensibility.
•	Bind: name of the storage property the field is bound to. By default the bound property name is the name of the field.
•	Indexing: indexing settings of the field.
•	Configuration: configuration settings of the field.

A content type inherits its fields from its parent content type (defined by the parentType attribute). This means that only additional fields have to be defined in the type’s CTD. The inherited fields apply to the content type as defined on the parent type, but may also be overridden. 

# Modeling a project workspace
In sensenet everything is content. When you create a new article, workspace or just upload a document you are creating a content. But you do not always want to start from scratch. There are pre-built workspaces in sensenet containing lists and libraries for a special purpose. These are predefined templates for creating new content.
One of sensenet's built-in workspace is the project workspace. It is tipically used for collaborative projects. It is possible to define the list, libraries and other content types users can create in the workspace.
To create a content template you simply need to create a new content under the appropriate folder (named by the type). You can set any property of the content template or add child content (e.g. libraries and lists for a workspace), they will be part of the template.

# Modeling a contract

Content types define the structure and functions of contents.
A contract, for example, can have several fields, like title, customer, date, registration number, you can also add signature field.
Default content types can be used in your solution but cannot be modified or deleted (in SNaaS). You can create custom content type by inheriting from GenericContent or any other content type in the tree.
 
