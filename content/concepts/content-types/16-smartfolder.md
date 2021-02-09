---
title: "Smartfolder"
metaTitle: "sensenet - Smartfolder"
metaDescription: "sensenet Smartfolder"
---

Use smart folders to group information (content) by Repository query.

# Features

# Parent type

[Folder](/concepts/content-types/02-folder)

# Content handler

`SenseNet.ContentRepository.SmartFolder`

# Special fields

| Name                  | Type       | Description                                                                                     |
| --------------------- | ---------- | ----------------------------------------------------------------------------------------------- |
| **Query**             | `LongText` | Please give a query here that you want to use for collecting the children of this smart folder. |
| **EnableAutofilters** | `Choice`   | If autofilters are enabled, system content will be filtered from the query.                     |

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
