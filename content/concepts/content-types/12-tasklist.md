---
title: "Tasklist"
metaTitle: "sensenet - Tasklist"
metaDescription: "sensenet Tasklist"
---

A [List](/concepts/content-types/08-contentlist) type for storing Tasks.

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
