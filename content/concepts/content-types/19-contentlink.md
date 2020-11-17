---
title: "Contentlink"
metaTitle: "sensenet - Contentlink"
metaDescription: "sensenet Contentlink"
---

A content that propagates most of the fields of another content.

# Features

- Any content can be a reference regardless of its type
- The link shows the attributes of the set reference
- Editing or deleting the link does not affect the reference content

# Parent type

[GenericContent](/concepts/content-types/01-generic-content)

# Content handler

`SenseNet.ContentRepository.ContentLink`

//TODO

# Special fields

| Name            | Type        | Description    |
| --------------- | ----------- | -------------- |
| **Link**        | `Reference` | Linked content |

# Example

```
<ContentType name="ContentLink" parentType="GenericContent" handler="SenseNet.ContentRepository.ContentLink" xmlns="http://schemas.sensenet.com/SenseNet/ContentRepository/ContentTypeDefinition">
  <DisplayName>$Ctd-ContentLink,DisplayName</DisplayName>
  <Description>$Ctd-ContentLink,Description</Description>
  <Icon>Folder</Icon>
  <Fields>
    <Field name="Link" type="Reference">
      <DisplayName>$Ctd-ContentLink,Link-DisplayName</DisplayName>
      <Description>$Ctd-ContentLink,Link-Description</Description>
      <Configuration>
        <AllowMultiple>false</AllowMultiple>
      </Configuration>
    </Field>
    <Field name="Description" type="LongText">
      <Configuration>
        <VisibleNew>Hide</VisibleNew>
        <VisibleEdit>Hide</VisibleEdit>
        <VisibleBrowse>Hide</VisibleBrowse>
      </Configuration>
    </Field>
  </Fields>
</ContentType>
```
