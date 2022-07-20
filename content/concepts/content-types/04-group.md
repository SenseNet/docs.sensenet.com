---
title: "Group"
metaTitle: "sensenet - Group"
metaDescription: "sensenet Group"
---

In sensenet you use groups to organize users by their permission level. You can use groups as roles that you can assign to users. A group may have users or even other groups as members. The main use case for groups is to assign permissions to them so that their members can access certain parts of the sensenet content repository.

# Features

You can assign permissions to groups on content items. Use groups instead of users when defining permissions in sensenet when possible, so that you do not have to change permissions when your users change.

See [User and group permissions](/concepts/user-and-permission-management) for more details.

# Parent type

[GenericContent](/concepts/content-types/01-genericcontent)

# Content handler

`SenseNet.ContentRepository.Group`

# Special fields

| Name         | Type        | Description                                             |
| ------------ | ----------- | ------------------------------------------------------- |
| **Members**  | `Reference` | List of users and other groups that belong to the group |
| **SyncGuid** | `ShortText` | GUID of the corresponding AD object.                    |
| **LastSync** | `DateTime`  | Date of last synchronization.                           |

# Example

```xml
<ContentType name="Group" parentType="GenericContent" handler="SenseNet.ContentRepository.Group" xmlns="http://schemas.sensenet.com/SenseNet/ContentRepository/ContentTypeDefinition">
  <DisplayName>$Ctd-Group,DisplayName</DisplayName>
  <Description>$Ctd-Group,Description</Description>
  <Icon>Group</Icon>
  <Fields>
    <Field name="Members" type="Reference">
      <DisplayName>$Ctd-Group,Members-DisplayName</DisplayName>
      <Description>$Ctd-Group,Members-Description</Description>
      <Configuration>
        <FieldIndex>20</FieldIndex>
        <AllowMultiple>true</AllowMultiple>
        <AllowedTypes>
          <Type>User</Type>
          <Type>Group</Type>
        </AllowedTypes>
        <SelectionRoot>
          <Path>/Root/IMS/Public</Path>
          <Path>/Root</Path>
        </SelectionRoot>
        <VisibleBrowse>Show</VisibleBrowse>
        <VisibleEdit>Show</VisibleEdit>
        <VisibleNew>Show</VisibleNew>
      </Configuration>
    </Field>
    <Field name="SyncGuid" type="ShortText">
      <DisplayName>$Ctd-Group,SyncGuid-DisplayName</DisplayName>
      <Description>$Ctd-Group,SyncGuid-Description</Description>
      <Configuration>
        <VisibleBrowse>Hide</VisibleBrowse>
        <VisibleEdit>Hide</VisibleEdit>
        <VisibleNew>Hide</VisibleNew>
      </Configuration>
    </Field>
    <Field name="LastSync" type="DateTime">
      <DisplayName>$Ctd-Group,LastSync-DisplayName</DisplayName>
      <Description>$Ctd-Group,LastSync-Description</Description>
      <Configuration>
        <DateTimeMode>DateAndTime</DateTimeMode>
        <VisibleBrowse>Hide</VisibleBrowse>
        <VisibleEdit>Hide</VisibleEdit>
        <VisibleNew>Hide</VisibleNew>
      </Configuration>
    </Field>
  </Fields>
</ContentType>
```
