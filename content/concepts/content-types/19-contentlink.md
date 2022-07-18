---
title: "Content Link"
metaTitle: "sensenet - Content Link"
metaDescription: "sensenet Content Link"
---

A ContentLink is a mirror of another content. It propagates most of the fields of the referenced content. This content type is useful when you want to display a content somewhere else in the content tree but want to manage changes in a single place, so a copy would not be sufficient.

# Features

- Any content can be a reference regardless of its type.
- The link shows the attributes of the set reference.
- Editing or deleting the link does not affect the reference content.

# Parent type

[GenericContent](/concepts/content-types/01-genericcontent)

# Content handler

`SenseNet.ContentRepository.ContentLink`

# Special fields

| Name     | Type        | Description    |
| -------- | ----------- | -------------- |
| **Link** | `Reference` | Linked content |

# Example

```xml
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
  </Fields>
</ContentType>
```
