---
title: "Document Library"
metaTitle: "sensenet - Document Library"
metaDescription: "sensenet Document Library"
---

A special [List](/concepts/content-types/08-contentlist) for storing documents.

# Features

No special features for this type.

# Parent type

Library

# Content handler

`SenseNet.ContentRepository.ContentList`

# Special fields

All the fields are inherited from its ancestors, there is no special field for this content type.

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
  </Fields>
</ContentType>
```
