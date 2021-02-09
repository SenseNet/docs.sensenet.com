---
title: "Folder"
metaTitle: "sensenet - Folder"
metaDescription: "sensenet Folder"
---

Folder is the base container type in sensenet and the ancestor of all other container types.

# Features

# Parent type

[GenericContent](/concepts/content-types/01-generic-content)

# Content handler

`SenseNet.ContentRepository.Folder`

# Special fields

All the field are inherited from its ancestors, there is no special field for this content type.

# Example

```xml
<ContentType name="Folder" parentType="GenericContent" handler="SenseNet.ContentRepository.Folder" xmlns="http://schemas.sensenet.com/SenseNet/ContentRepository/ContentTypeDefinition">
  <DisplayName>$Ctd-Folder,DisplayName</DisplayName>
  <Description>$Ctd-Folder,Description</Description>
  <Icon>Folder</Icon>
  <Fields>
    <Field name="DisplayName" type="ShortText">
      <DisplayName>$Ctd-Folder,DisplayName-DisplayName</DisplayName>
      <Description>$Ctd-Folder,DisplayName-Description</Description>
    </Field>
    <Field name="Description" type="LongText">
      <Configuration>
        <VisibleBrowse>Hide</VisibleBrowse>
        <VisibleEdit>Hide</VisibleEdit>
        <VisibleNew>Hide</VisibleNew>
      </Configuration>
    </Field>
    <Field name="Version" type="Version">
      <Configuration>
        <VisibleBrowse>Hide</VisibleBrowse>
        <VisibleEdit>Hide</VisibleEdit>
        <VisibleNew>Hide</VisibleNew>
      </Configuration>
    </Field>
    <Field name="TrashDisabled" type="Boolean">
      <Configuration>
        <VisibleBrowse>Hide</VisibleBrowse>
        <VisibleEdit>Show</VisibleEdit>
        <VisibleNew>Show</VisibleNew>
      </Configuration>
    </Field>
  </Fields>
</ContentType>
```
