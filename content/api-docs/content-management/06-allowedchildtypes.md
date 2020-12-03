---
title: Allowed Child Types
metaTitle: "sensenet API - Allowed child types"
metaDescription: "Managing allowed child types"
---

sensenet content repository stores different content types. One of the major differences between a file system and the content repository is that in a file system you can store any type (file or folder) anywhere, whereas in the sensenet content repository it is possible to define **restrictions** on what content types the different containers can contain. This allows you to create a much more precisely defined structure and provide the users a better user experience when creating new content under different places in the repository.

Basically you can configure allowed child types in the content type definition of the different types (for example a `TaskList` can only contain `Tasks`, a `DocumentLibrary` can only contain `Folders` and `Files`, etc.). These settings can be overridden on the specific content, for example you can modify any of your document libraries to be able to contain images, too.

<note severity="info">A <b>Folder</b> can never have child types defined, it will always inherit from its parent's settings. A <b>SystemFolder</b> will allow every type by default and can be created anywhere in the repository.</note>

## Get child types allowed effectively on a content

Following example results in the list of content types that are allowed effectively on the given content (e.g. a merged list with content types allowed in the content type definition or directly on the content):

<tab category="content-management" article="allowed-childtypes" example="effectivelyAllowed" />

## Get child types allowed on a content

This next example returns the list of content types allowed directly on the given content:

<tab category="content-management" article="allowed-childtypes" example="allowedChildTypes" />

## Get allowed child types set in the content type definition

The next example returns the list of content types set as allowed in the given content's CTD:

<tab category="content-management" article="allowed-childtypes" example="allowedChildTypesFromCTD" />

## Update list of allowed child types on a content

You are able to update the allowed type list at once with updating the value of the `AllowedChildTypes` field of the content. It works the same way as updating other field values as you can see in the next example, you can update the list by providing the list of type names as the value of the mentioned field:

<tab category="content-management" article="allowed-childtypes" example="updateAllowedChildTypes" />

## Add a type to the allowed childtypes

The following example shows you how to add types to the given content's allowed content type list:

<tab category="content-management" article="allowed-childtypes" example="addTypes" />

## Remove a type from the allowed childtypes

The next example shows you how to remove a type from the given content's allowed content type list:

<tab category="content-management" article="allowed-childtypes" example="removeTypes" />
&nbsp;
<note severity="info">If the list after the remove operation and the list on the matching CTD are the same, the local list will be cleared.</note>

## Check allowed childtypes

With the next example you are able to get all contents/paths where `AllowedChildTypes` list is empty. Paths are categorized by content type names. This is a helper function that can be used to get an overview of your system.

<tab category="content-management" article="allowed-childtypes" example="checkAllowedTypes" />
