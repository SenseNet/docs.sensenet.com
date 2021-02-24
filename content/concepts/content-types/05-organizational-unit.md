---
title: "Organizational Unit"
metaTitle: "sensenet - Organizational Unit"
metaDescription: "sensenet Organizational Unit"
---

Organizational Unit (OU) provides a way for organizing users and groups in containers. An organizational unit usually represents an office or department.

# Features

You can assign permissions for organizational units on content items so that users or groups in that OU can access those contents.

# Parent type

[Folder](/concepts/content-types/02-folder)

# Content handler

`SenseNet.ContentRepository.OrganizationalUnit`

# Special fields

| Name         | Type        | Description                      |
| ------------ | ----------- | -------------------------------- |
| **SyncGuid** | `ShortText` | GUID of the corresponding AD object. |
| **LastSync** | `DateTime`  | Date of last synchronization.    |

# Example

```xml
<ContentType name="OrganizationalUnit" parentType="Folder" handler="SenseNet.ContentRepository.OrganizationalUnit" xmlns="http://schemas.sensenet.com/SenseNet/ContentRepository/ContentTypeDefinition">
  <DisplayName>$Ctd-OrganizationalUnit,DisplayName</DisplayName>
  <Description>$Ctd-OrganizationalUnit,Description</Description>
  <Icon>OrgUnit</Icon>
  <AllowedChildTypes>
    User,RegisteredUser,Group,OrganizationalUnit,ADFolder
  </AllowedChildTypes>
  <Fields>
    <Field name="Name" type="ShortText">
      <Configuration>
        <VisibleBrowse>Show</VisibleBrowse>
        <VisibleEdit>Show</VisibleEdit>
        <VisibleNew>Show</VisibleNew>
      </Configuration>
    </Field>
    <Field name="DisplayName" type="ShortText">
      <Configuration>
        <VisibleBrowse>Hide</VisibleBrowse>
        <VisibleEdit>Hide</VisibleEdit>
        <VisibleNew>Hide</VisibleNew>
      </Configuration>
    </Field>
    <Field name="Description" type="LongText">
      <Configuration>
        <VisibleBrowse>Advanced</VisibleBrowse>
        <VisibleEdit>Advanced</VisibleEdit>
        <VisibleNew>Advanced</VisibleNew>
      </Configuration>
    </Field>
    <Field name="SyncGuid" type="ShortText">
      <DisplayName>$Ctd-OrganizationalUnit,SyncGuid-DisplayName</DisplayName>
      <Description>$Ctd-OrganizationalUnit,SyncGuid-Description</Description>
      <Configuration>
        <VisibleBrowse>Advanced</VisibleBrowse>
        <VisibleEdit>Advanced</VisibleEdit>
        <VisibleNew>Hide</VisibleNew>
      </Configuration>
    </Field>
    <Field name="LastSync" type="DateTime">
      <DisplayName>$Ctd-OrganizationalUnit,LastSync-DisplayName</DisplayName>
      <Description>$Ctd-OrganizationalUnit,LastSync-Description</Description>
      <Configuration>
        <DateTimeMode>DateAndTime</DateTimeMode>
        <VisibleBrowse>Advanced</VisibleBrowse>
        <VisibleEdit>Advanced</VisibleEdit>
        <VisibleNew>Hide</VisibleNew>
      </Configuration>
    </Field>
  </Fields>
</ContentType>
```
