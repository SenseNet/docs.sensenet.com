---
title: "Memo"
metaTitle: "sensenet - Memo"
metaDescription: "sensenet Memo"
---

A content type for short memos or posts on a subject.

# Features

No special features for this type.

# Parent type

ListItem

# Content handler

`SenseNet.ContentRepository.GenericContent`

# Special fields

| Name         | Type        | Description                              |
| ------------ | ----------- | ---------------------------------------- |
| **Date**     | `DateTime`  | The due date of the memo.                |
| **MemoType** | `Choice`    | Type of the memo.                        |
| **SeeAlso**  | `Reference` | A list of content this memo pertains to. |

# Example

```xml
<ContentType name="Memo" parentType="ListItem" handler="SenseNet.ContentRepository.GenericContent" xmlns="http://schemas.sensenet.com/SenseNet/ContentRepository/ContentTypeDefinition">
  <DisplayName>$Ctd-Memo,DisplayName</DisplayName>
  <Description>$Ctd-Memo,Description</Description>
  <Icon>Document</Icon>
  <AllowIncrementalNaming>true</AllowIncrementalNaming>
  <Fields>
    <Field name="Date" type="DateTime">
      <DisplayName>$Ctd-Memo,Date-DisplayName</DisplayName>
      <Description>$Ctd-Memo,Date-Description</Description>
      <Configuration>
        <DateTimeMode>DateAndTime</DateTimeMode>
      </Configuration>
    </Field>
    <Field name="MemoType" type="Choice">
      <DisplayName>$Ctd-Memo,MemoType-DisplayName</DisplayName>
      <Description>$Ctd-Memo,MemoType-Description</Description>
      <Configuration>
        <AllowMultiple>false</AllowMultiple>
        <AllowExtraValue>true</AllowExtraValue>
        <Options>
          <Option value="generic" selected="true">$Ctd-Memo,MemoType-generic</Option>
          <Option value="iso">$Ctd-Memo,MemoType-iso</Option>
          <Option value="iaudit">$Ctd-Memo,MemoType-iaudit</Option>
        </Options>
      </Configuration>
    </Field>
    <Field name="SeeAlso" type="Reference">
      <DisplayName>$Ctd-Memo,SeeAlso-DisplayName</DisplayName>
      <Description>$Ctd-Memo,SeeAlso-Description</Description>
      <Configuration>
        <AllowMultiple>true</AllowMultiple>
      </Configuration>
    </Field>
  </Fields>
</ContentType>
```
