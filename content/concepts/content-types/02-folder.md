---
title: "Folder"
metaTitle: "sensenet - Folder"
metaDescription: "sensenet Folder"
---

Folder is the base container type in sensenet and the ancestor of all other container types.

# Features

No special features for this type.

# Parent type

[GenericContent](/concepts/content-types/01-genericcontent)

# Content handler

`SenseNet.ContentRepository.Folder`

# Special fields

All the fields are inherited from its ancestors, there is no special field for this content type.

# Example

```xml
<ContentType name="Folder" parentType="GenericContent" handler="SenseNet.ContentRepository.Folder" xmlns="http://schemas.sensenet.com/SenseNet/ContentRepository/ContentTypeDefinition">
  <DisplayName>$Ctd-Folder,DisplayName</DisplayName>
  <Description>$Ctd-Folder,Description</Description>
  <Icon>Folder</Icon>
  <Fields></Fields>
</ContentType>
```
