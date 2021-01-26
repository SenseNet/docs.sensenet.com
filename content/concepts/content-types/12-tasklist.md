---
title: "Tasklist"
metaTitle: "sensenet - Tasklist"
metaDescription: "sensenet Tasklist"
---

A List type for storing Tasks.

# Features

# Parent type

ItemList

# Content handler

`SenseNet.ContentRepository.ContentList`

# Special fields

All the field are inherited from its ancestors, there is no special field for this contetn type.

# Example

```xml
<ContentType name="TaskList" parentType="ItemList" handler="SenseNet.ContentRepository.ContentList" xmlns="http://schemas.sensenet.com/SenseNet/ContentRepository/ContentTypeDefinition">
  <DisplayName>$Ctd-TaskList,DisplayName</DisplayName>
  <Description>$Ctd-TaskList,Description</Description>
  <Icon>ContentList</Icon>
  <AllowedChildTypes>
    Task,ApprovalWorkflowTask,ExpenseClaimWorkflowTask
  </AllowedChildTypes>
  <Fields></Fields>
</ContentType>
```
