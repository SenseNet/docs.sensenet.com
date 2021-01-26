---
title: "Document Library"
metaTitle: "sensenet - Document Library"
metaDescription: "sensenet Document Library"
---

A special List for storing documents.

# Features

# Parent type

Library

# Content handler

`SenseNet.ContentRepository.ContentList`

# Special fields

All the field are inherited from its ancestors, there is no special field for this contetn type.

# Example

```xml
<ContentType name="DocumentLibrary" parentType="Library" handler="SenseNet.ContentRepository.ContentList" xmlns="http://schemas.sensenet.com/SenseNet/ContentRepository/ContentTypeDefinition">
  <DisplayName>$Ctd-DocumentLibrary,DisplayName</DisplayName>
  <Description>$Ctd-DocumentLibrary,Description</Description>
  <Icon>ContentList</Icon>
  <AllowedChildTypes>
    Folder,File
  </AllowedChildTypes>
  <Fields>
    <Field name="DisplayName" type="ShortText">
      <DisplayName>$Ctd-DocumentLibrary,DisplayName-DisplayName</DisplayName>
      <Description>$Ctd-DocumentLibrary,DisplayName-Description</Description>
      <Configuration>
        <FieldIndex>0</FieldIndex>
      </Configuration>
    </Field>
    <Field name="Name" type="ShortText">
      <Configuration>
        <DefaultValue>DocumentLibrary</DefaultValue>
        <VisibleBrowse>Hide</VisibleBrowse>
        <VisibleEdit>Hide</VisibleEdit>
        <VisibleNew>Hide</VisibleNew>
      </Configuration>
    </Field>
    <Field name="Index" type="Integer">
      <Configuration>
        <FieldIndex>1</FieldIndex>
      </Configuration>
    </Field>
    <Field name="InheritableVersioningMode" type="InheritableVersioningMode">
      <Configuration>
        <FieldIndex>2</FieldIndex>
      </Configuration>
    </Field>
    <Field name="InheritableApprovingMode" type="InheritableApprovingMode">
      <Configuration>
        <FieldIndex>3</FieldIndex>
      </Configuration>
    </Field>
    <Field name="AllowedChildTypes" type="AllowedChildTypes">
      <Configuration>
        <FieldIndex>4</FieldIndex>
      </Configuration>
    </Field>
  </Fields>
</ContentType>
```
