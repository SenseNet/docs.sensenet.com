---
title: "Link List"
metaTitle: "sensenet - Link List"
metaDescription: "sensenet Link List"
---

LinkList is a container type for storing links.

# Features

LinkList is a regular container for storing items, this one is created to store Links. LinkLists are usually created inside workspaces.

# Parent type

ItemList

# Content handler

`SenseNet.ContentRepository.ContentList`

# Special fields

All the fields are inherited from its ancestors, there is no special field for this content type.

# Example

```xml
<ContentType name="LinkList" parentType="ItemList" handler="SenseNet.ContentRepository.ContentList" xmlns="http://schemas.sensenet.com/SenseNet/ContentRepository/ContentTypeDefinition">
  <DisplayName>$Ctd-LinkList,DisplayName</DisplayName>
  <Description>$Ctd-LinkList,Description</Description>
  <Icon>ContentList</Icon>
  <AllowedChildTypes>Link</AllowedChildTypes>
  <Fields></Fields>
</ContentType>
```
