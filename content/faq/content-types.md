---
title: "Content types"
metaTitle: "sensenet FAQ - Content types"
metaDescription: "sensenet FAQ - Content types"
---

> If you are looking for a more structured information please visit the [Content types](/concepts/content-types) article.

# Can I delete a content type?

If there's no content instance with the chosen type, then you can simply delete the content type as other contents in the repository. If you've created some content with the type already, delete the affected contents first, then you can remove the content type definition as well.

# How can I change the type of a field?

Changing a field's type is not possible since the field types can be quite different and the related values in most of the cases cannot be migrated. If you are sure you do not need the field with its current type, remove it from the content type definition, save it (the field will be removed from existing contents as well along with their value) and then you can freely add a new field with the same name but with another type.

# Can I change my type's parent type?

No, it is not possible to change the ParentType of a content type.

# I've created a new content type but it is not listed in the 'Add new' dropdown. What could be the problem?

Creating a new content type does not automatically mean that it will be available everywhere to make new content instances, it should be added as allowed child type to the chosen content. Check the parent where you want to add a new content with your newly created type. You will find the allowed child types field on the chosen parent's edit form.

# Why is a field not visible on the edit/new form?

Fields could not only be added and removed from the content type definitions, there's a more convenient solution by switching display the fields on the auto-generated forms like edit and new. So if a field appears to be missing, maybe it is only set to be hidden what you can check in the ctd.

```
<Field name="MyField" type="ShortText">
  <Configuration>
    <VisibleEdit>Show</VisibleEdit>
    <VisibleNew>Hide</VisibleNew>
    <VisibleBrowse>Hide</VisibleBrowse>
  </Configuration>
</Field>
```

# Which field names are reserved

Some of the field names are reserved by the repository for some basic and calculated fields. Because of the restriction that there cannot be two fields in the system with the same name but with a different type, these 'system' fields can only be used in your custom content types to set their visibility. List of the reserved field names are the following:

- "ParentId",
- "Id",
- "Name",
- "Version",
- "VersionId",
- "Path",
- "Depth",
- "Type",
- "TypeIs",
- "InTree",
- "InFolder",
- "IsSystemContent",
- "HandlerName",
- "ParentTypeName",
- "CreatedById",
- "ModifiedById",
- "AllFieldSettingContents",
- "OwnerId",
- "EffectiveAllowedChildTypes",
- "VersioningMode",
- "AllRoles",
- "DirectRoles",
- "CheckedOutTo",
- "InheritableVersioningMode",
- "VersionCreatedBy",
- "VersionCreationDate",
- "VersionModifiedBy",
- "VersionModificationDate",
- "ApprovingMode",
- "InheritableApprovingMode",
- "SavingState",
- "ExtensionData",
- "BrowseApplication",
- "Versions",
- "CheckInComments",
- "RejectReason",
- "Workspace",
- "BrowseUrl",
- "Sharing",
- "SharedWith",
- "SharedBy",
- "SharingMode",
- "SharingLevel",
- "Actions",
- "IsFile",
- "Children",
- "Publishable",
- "Locked",
- "Rate",
- "RateStr",
- "Tags",
- "Approvable",
- "IsFolder",
- "Icon",
- "WorkspaceSkin",
- "AvailableViews",
- "FieldSettingContents",
- "AvailableContentTypeFields",
- "OwnerWhenVisitor",
- "Image"
