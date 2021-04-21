---
title: "Memo List"
metaTitle: "sensenet - Memo List"
metaDescription: "sensenet Memo List"
---

A [List](/concepts/content-types/08-contentlist) type for storing Memos.

# Features

No special features for this type.

# Parent type

ItemList

# Content handler

`SenseNet.ContentRepository.ContentList`

# Special fields

All the fields are inherited from its ancestors, there is no special field for this content type.

# Example

```xml
<ContentType name="MemoList" parentType="ItemList" handler="SenseNet.ContentRepository.ContentList" xmlns="http://schemas.sensenet.com/SenseNet/ContentRepository/ContentTypeDefinition">
  <DisplayName>$Ctd-MemoList,DisplayName</DisplayName>
  <Description>$Ctd-MemoList,Description</Description>
  <Icon>ContentList</Icon>
  <AllowedChildTypes>
    Memo
  </AllowedChildTypes>
  <Fields></Fields>
</ContentType>
```
