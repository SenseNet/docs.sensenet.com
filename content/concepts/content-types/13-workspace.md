---
title: "Workspace"
metaTitle: "sensenet - Workspace"
metaDescription: "sensenet Workspace"
---

Collaborative workspace for organizing content around a project or company. A workspace usually contains one or more [content lists](/concepts/content-types/08-contentlist) - for example a [document library](/concepts/content-types/09-document-library) or [image gallery](/concepts/content-types/09-image-library) - to store contents.

# Features

Workspaces can also be organized in a hierarchy and developers can access the containing workspace of any content when loading the content through the OData API.

# Parent type

[Folder](/concepts/content-types/02-folder)

# Content handler

`SenseNet.ContentRepository.Workspaces.Workspace`

# Special fields

| Name                | Type        | Description                                                                                                                                                 |
| ------------------- | ----------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Manager**         | `Reference` | The person responsible for the project.                                                                                                                     |
| **Deadline**        | `DateTime`  |                                                                                                                                                             |
| **IsActive**        | `Boolean`   | This workspace is currently active.                                                                                                                         |
| **WorkspaceSkin**   | `Reference` |                                                                                                                                                             |
| **IsCritical**      | `Boolean`   | This workspace is currently in a critical status.                                                                                                           |
| **IsWallContainer** | `Boolean`   | This workspace is configured to contain a wall - this indicates that posts are created under this workspace if Content are shared anywhere below this path. |
| **IsFollowed**      | `Boolean`   |                                                                                                                                                             |

# Example

```xml
<ContentType name="Workspace" parentType="Folder" handler="SenseNet.ContentRepository.Workspaces.Workspace" xmlns="http://schemas.sensenet.com/SenseNet/ContentRepository/ContentTypeDefinition">
  <DisplayName>$Ctd-Workspace,DisplayName</DisplayName>
  <Description>$Ctd-Workspace,Description</Description>
  <Icon>Workspace</Icon>
  <AllowedChildTypes>Page,Folder,DocumentLibrary,ImageLibrary,EventList,MemoList,LinkList,TaskList,CustomList,Workspace</AllowedChildTypes>
  <Fields>
    <Field name="Manager" type="Reference">
      <DisplayName>$Ctd-Workspace,Manager-DisplayName</DisplayName>
      <Description>$Ctd-Workspace,Manager-Description</Description>
      <Configuration>
        <AllowMultiple>false</AllowMultiple>
        <AllowedTypes>
          <Type>User</Type>
        </AllowedTypes>
        <SelectionRoot>
          <Path>/Root/IMS</Path>
          <Path>/Root</Path>
        </SelectionRoot>
        <VisibleBrowse>Hide</VisibleBrowse>
        <VisibleEdit>Hide</VisibleEdit>
        <VisibleNew>Hide</VisibleNew>
      </Configuration>
    </Field>
    <Field name="Deadline" type="DateTime">
      <DisplayName>$Ctd-Workspace,Deadline-DisplayName</DisplayName>
      <Configuration>
        <DateTimeMode>DateAndTime</DateTimeMode>
        <VisibleBrowse>Hide</VisibleBrowse>
        <VisibleEdit>Hide</VisibleEdit>
        <VisibleNew>Hide</VisibleNew>
      </Configuration>
    </Field>
    <Field name="IsActive" type="Boolean">
      <DisplayName>$Ctd-Workspace,IsActive-DisplayName</DisplayName>
      <Description>$Ctd-Workspace,IsActive-Description</Description>
      <Configuration>
        <Compulsory>true</Compulsory>
        <DefaultValue>true</DefaultValue>
        <VisibleBrowse>Hide</VisibleBrowse>
        <VisibleEdit>Hide</VisibleEdit>
        <VisibleNew>Hide</VisibleNew>
      </Configuration>
    </Field>
    <Field name="WorkspaceSkin" type="Reference">
      <DisplayName>$Ctd-Workspace,WorkspaceSkin-DisplayName</DisplayName>
      <Configuration>
        <AllowMultiple>false</AllowMultiple>
        <AllowedTypes>
          <Type>Skin</Type>
        </AllowedTypes>
        <SelectionRoot>
          <Path>/Root/Skins</Path>
        </SelectionRoot>
        <VisibleBrowse>Hide</VisibleBrowse>
        <VisibleEdit>Hide</VisibleEdit>
        <VisibleNew>Hide</VisibleNew>
      </Configuration>
    </Field>
    <Field name="IsCritical" type="Boolean">
      <DisplayName>$Ctd-Workspace,IsCritical-DisplayName</DisplayName>
      <Description>$Ctd-Workspace,IsCritical-Description</Description>
      <Configuration>
        <VisibleBrowse>Hide</VisibleBrowse>
        <VisibleEdit>Hide</VisibleEdit>
        <VisibleNew>Hide</VisibleNew>
      </Configuration>
    </Field>
    <Field name="IsWallContainer" type="Boolean">
      <DisplayName>$Ctd-Workspace,IsWallContainer-DisplayName</DisplayName>
      <Description>$Ctd-Workspace,IsWallContainer-Description</Description>
      <Configuration>
        <VisibleBrowse>Hide</VisibleBrowse>
        <VisibleEdit>Hide</VisibleEdit>
        <VisibleNew>Hide</VisibleNew>
      </Configuration>
    </Field>
    <Field name="IsFollowed" type="Boolean">
      <Configuration>
        <VisibleBrowse>Hide</VisibleBrowse>
        <VisibleEdit>Hide</VisibleEdit>
        <VisibleNew>Hide</VisibleNew>
      </Configuration>
    </Field>
  </Fields>
</ContentType>
```
