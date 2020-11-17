---
title: "Linklist"
metaTitle: "sensenet - Linklist"
metaDescription: "sensenet Linklist"
---

LinkList is a container type for storing links.

# Features

- LinkList is a regular conatainer for storing items, this one is created to store Links
- LinkLists are created under Contents (/Root/Content)

# Parent type

ItemList

# Content handler

`SenseNet.ContentRepository.ContentList`

//TODO

# Special fields

All the field are inherited from its ancestors, there is no special field for this contetn type.

# Example

```
<ContentType name="LinkList" parentType="ItemList" handler="SenseNet.ContentRepository.ContentList" xmlns="http://schemas.sensenet.com/SenseNet/ContentRepository/ContentTypeDefinition">
  <DisplayName>$Ctd-LinkList,DisplayName</DisplayName>
  <Description>$Ctd-LinkList,Description</Description>
  <Icon>ContentList</Icon>
  <AllowedChildTypes>Link</AllowedChildTypes>
  <Fields>
    <Field name="DisplayName" type="ShortText">
      <DisplayName>$Ctd-LinkList,DisplayName-DisplayName</DisplayName>
      <Description>$Ctd-LinkList,DisplayName-Description</Description>
    </Field>
  </Fields>
</ContentType>
```
