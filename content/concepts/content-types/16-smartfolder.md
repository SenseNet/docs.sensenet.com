---
title: "Smartfolder"
metaTitle: "sensenet - Smartfolder"
metaDescription: "sensenet Smartfolder"
---

Use smart folders to group content items by a repository query. You can display items as if they were all stored in the smart folder, even if they reside in different parts of the repository.

# Features

Smart folders do not contain actual child elements by themselves - they show virtual items instead collected on-the-fly by a content query stored in the `Query` field of the smart folder.

# Parent type

[Folder](/concepts/content-types/02-folder)

# Content handler

`SenseNet.ContentRepository.SmartFolder`

# Special fields

| Name                     | Type       | Description                                                                                     |
| ------------------------ | ---------- | ----------------------------------------------------------------------------------------------- |
| **Query**                | `LongText` | Please give a query here that you want to use for collecting the children of this smart folder. |
| **EnableAutofilters**    | `Choice`   | If autofilters are enabled, system content will be filtered from the query.                     |
| **EnableLifespanFilter** | `Choice`   | If lifespan filter is enabled, only valid content will be in the result.                        |

# Example

```xml
<ContentType name="SmartFolder" parentType="Folder" handler="SenseNet.ContentRepository.SmartFolder" xmlns="http://schemas.sensenet.com/SenseNet/ContentRepository/ContentTypeDefinition">
  <DisplayName>$Ctd-SmartFolder,DisplayName</DisplayName>
  <Description>$Ctd-SmartFolder,Description</Description>
  <Icon>SmartFolder</Icon>
  <Fields>
    <Field name="Query" type="LongText">
      <DisplayName>$Ctd-SmartFolder,Query-DisplayName</DisplayName>
      <Description>$Ctd-SmartFolder,Query-Description</Description>
      <Indexing>
        <Mode>No</Mode>
      </Indexing>
      <Configuration>
        <ControlHint>sn:QueryBuilder</ControlHint>
      </Configuration>
    </Field>
    <Field name="EnableAutofilters" type="Choice">
      <DisplayName>$Ctd-SmartFolder,EnableAutofilters-DisplayName</DisplayName>
      <Description>$Ctd-SmartFolder,EnableAutofilters-Description</Description>
      <Configuration>
        <AllowMultiple>false</AllowMultiple>
        <AllowExtraValue>false</AllowExtraValue>
        <Options>
          <Enum type="SenseNet.Search.FilterStatus" />
        </Options>
      </Configuration>
    </Field>
    <Field name="EnableLifespanFilter" type="Choice">
      <DisplayName>$Ctd-SmartFolder,EnableLifespanFilter-DisplayName</DisplayName>
      <Description>$Ctd-SmartFolder,EnableLifespanFilter-Description</Description>
      <Configuration>
        <AllowMultiple>false</AllowMultiple>
        <AllowExtraValue>false</AllowExtraValue>
        <Options>
          <Enum type="SenseNet.Search.FilterStatus" />
        </Options>
      </Configuration>
    </Field>
  </Fields>
</ContentType>
```
