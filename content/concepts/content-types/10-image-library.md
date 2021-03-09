---
title: "Image Library"
metaTitle: "sensenet - Image Library"
metaDescription: "sensenet Image Library"
---

A special [List](/concepts/content-types/08-contentlist) for storing images.

# Features

No special features for this type.

# Parent type

Library

# Content handler

`SenseNet.ContentRepository.ContentList`

# Special fields

| Name           | Type        | Description                |
| -------------- | ----------- | -------------------------- |
| **CoverImage** | `Reference` | Cover image of the gallery |

# Example

```xml
<ContentType name="ImageLibrary" parentType="Library" handler="SenseNet.ContentRepository.ContentList" xmlns="http://schemas.sensenet.com/SenseNet/ContentRepository/ContentTypeDefinition">
  <DisplayName>$Ctd-ImageLibrary,DisplayName</DisplayName>
  <Description>$Ctd-ImageLibrary,Description</Description>
  <Icon>ContentList</Icon>
  <AllowedChildTypes>
    Folder,Image
  </AllowedChildTypes>
  <Fields>
    <Field name="CoverImage" type="Reference">
      <DisplayName>$Ctd-GenericContent,CoverImage</DisplayName>
      <Description>Select cover image</Description>
      <Configuration>
        <AllowMultiple>false</AllowMultiple>
        <AllowedTypes>
          <Type>Image</Type>
        </AllowedTypes>
        <FieldIndex>1</FieldIndex>
      </Configuration>
    </Field>
  </Fields>
</ContentType>
```
