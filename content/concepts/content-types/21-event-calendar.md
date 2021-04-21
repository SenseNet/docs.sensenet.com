---
title: "Calendar"
metaTitle: "sensenet - Calendar"
metaDescription: "sensenet Calendar"
---

A special container type to store calendar events.

# Features

- The Event Calendar (or EventList) is a regular container for storing Events.
- EventLists are usually created inside workspaces.

# Parent type

ItemList

# Content handler

`SenseNet.ContentRepository.ContentList`

# Special fields

| Name                   | Type        | Description                                   |
| ---------------------- | ----------- | --------------------------------------------- |
| **RegistrationFolder** | `Reference` | Registration folder (currently not available) |

# Example

```xml
<ContentType name="EventList" parentType="ItemList" handler="SenseNet.ContentRepository.ContentList" xmlns="http://schemas.sensenet.com/SenseNet/ContentRepository/ContentTypeDefinition">
  <DisplayName>$Ctd-EventList,DisplayName</DisplayName>
  <Description>$Ctd-EventList,Description</Description>
  <Icon>ContentList</Icon>
  <AllowedChildTypes>CalendarEvent</AllowedChildTypes>
  <Fields>
    <Field name="RegistrationFolder" type="Reference">
      <DisplayName>$Ctd-EventList,RegistrationFolder-DisplayName</DisplayName>
      <Configuration>
        <AllowMultiple>false</AllowMultiple>
        <AllowedTypes>
          <Type>Folder</Type>
        </AllowedTypes>
        <VisibleBrowse>Hide</VisibleBrowse>
        <VisibleEdit>Hide</VisibleEdit>
        <VisibleNew>Hide</VisibleNew>
      </Configuration>
    </Field>
  </Fields>
</ContentType>
```
